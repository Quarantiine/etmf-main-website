"use client";

import React, { Dispatch, useRef, useState } from "react";
import inquiryList from "@/data/inquiryList.json";
import Image from "next/image";
import { FirebaseAPI } from "@/app/lib/firebase";

export const ContactUsForm = () => {
	const {
		contactFormSession: { sendMessage, formMessageError, formMessageLoading },
	} = FirebaseAPI();

	const [inquiryType, setInquiryType] = useState<string>("");
	const [inquiryCategory, setInquiryCategory] = useState<string>("");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const [formErrorMesg, setFormErrorMesg] = useState<boolean>(false);
	const formErrorMesgRef = useRef<NodeJS.Timeout | null>(null);

	const [submitted, setSubmitted] = useState<boolean>(false);
	const submittedRef = useRef<NodeJS.Timeout | null>(null);

	const handleInquiryType = (type: string) => {
		setInquiryType(type);
		if (type === inquiryType) {
			setInquiryCategory(inquiryCategory);
		} else {
			setInquiryCategory("");
		}
	};

	const handleInquiryCategory = (category: string) => {
		setInquiryCategory(category);
	};

	const handleOnChange = (
		text: string,
		setText: Dispatch<React.SetStateAction<string>>
	) => {
		setText(text);
	};

	const handleOnSubmit = () => {
		const checkContactEmail = (email: string) => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(email);
		};

		const checkContactName = (name: string) => {
			const nameCheck = name.length > 1;
			return nameCheck;
		};

		const checkContactMessage = (message: string) => {
			const messageCheck = message.length > 9;
			return messageCheck;
		};

		if (formErrorMesgRef.current) clearTimeout(formErrorMesgRef.current);
		if (submittedRef.current) clearTimeout(submittedRef.current);

		if (
			checkContactEmail(email) &&
			checkContactMessage(message) &&
			checkContactName(name) &&
			inquiryType &&
			inquiryCategory
		) {
			setEmail("");
			setName("");
			setMessage("");
			setEmail("");
			setFormErrorMesg(false);
			setInquiryType("");
			setInquiryCategory("");

			setSubmitted(true);

			sendMessage(name, email, message, inquiryType, inquiryCategory);

			submittedRef.current = setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		} else {
			setFormErrorMesg(true);
		}
	};

	const handleCloseErrorMesg = () => {
		setFormErrorMesg(false);
	};

	return (
		<>
			<div className="w-fit h-fit p-5 rounded-xl border flex flex-col justify-center items-start gap-4">
				<h1 className="text-2xl">Contact</h1>

				<div className="grid grid-cols-1 justify-start items-start gap-5">
					{inquiryList.map((inquiry, index) => {
						return (
							<React.Fragment key={index}>
								<div className="w-full h-fit flex flex-col gap-2">
									<button
										onClick={() => handleInquiryType(inquiry.title)}
										className={`rounded-xl w-full no-style-btn p-5 text-start flex flex-col justify-center items-start gap-1 ${
											inquiry.title === inquiryType
												? "bg-green-3 text-white"
												: "bg-gray-100 text-gray-500"
										}`}
									>
										<p className="lato-bold">{inquiry.title}</p>
										<p className="text-sm">{inquiry.description}</p>
									</button>

									{inquiry.title === inquiryType && (
										<div className="bg-white border p-5 rounded-xl flex flex-col gap-2 text-sm">
											<h1 className="text-gray-500 lato-bold">
												{inquiry.categoriesTitle}
											</h1>

											<div className="flex flex-col justify-start items-start text-base w-full gap-3">
												{inquiry.categories.map((category, index) => {
													return (
														<React.Fragment key={index}>
															<button
																onClick={() =>
																	handleInquiryCategory(category.textHeader)
																}
																className={`no-style-btn flex flex-col justify-start items-start text-start p-3 rounded-xl w-full ${
																	category.textHeader === inquiryCategory
																		? "bg-green-3 text-white"
																		: "bg-gray-100"
																}`}
															>
																<p className="lato-bold">
																	{category.textHeader}
																</p>
																<p className="text-sm">{category.text}</p>
															</button>
														</React.Fragment>
													);
												})}
											</div>
										</div>
									)}
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>

			<div className="sticky top-10 left-0 w-full h-fit p-5 rounded-xl border flex flex-col justify-center items-center">
				<form className="flex flex-col justify-center items-start gap-5 w-full">
					{formMessageError && (
						<div className="flex justify-start items-center gap-2 text-white bg-red-500 p-4 rounded-xl w-full text-sm">
							<Image
								className="h-auto w-[20px]"
								src={"/icons/error.svg"}
								alt="icon"
								width={25}
								height={25}
							/>

							<h1 className="lato-bold">{formMessageError}</h1>
						</div>
					)}

					{formErrorMesg && (
						<>
							<div className="flex flex-col justify-center items-start gap-2 text-white bg-yellow-500 p-4 rounded-xl w-full text-sm">
								<div className="flex justify-between items-center gap-2 w-full">
									<h1 className="lato-bold">Follow the instructions below:</h1>

									<button
										onClick={(e) => {
											e.preventDefault();
											handleCloseErrorMesg();
										}}
										className="no-style-btn"
									>
										<Image
											className="h-auto w-[20px]"
											src={"/icons/close_white.svg"}
											alt="icon"
											width={25}
											height={25}
										/>
									</button>
								</div>

								<ul className="list-disc pl-5 flex flex-col justify-center items-start gap-1">
									<li className="w-full">
										<p>{"Must be valid email"}</p>
									</li>
									<li className="w-full">
										<p>{"Name Characters > 1"}</p>
									</li>
									<li className="w-full">
										<p>{"Message Characters > 9"}</p>
									</li>
									<li className="w-full">
										<p>{"Select a contact on the left"}</p>
									</li>
									<li className="w-full">
										<p>{"Select a category on the left"}</p>
									</li>
								</ul>
							</div>
						</>
					)}

					<div className="flex flex-col justify-center items-start gap-1 w-full">
						<label htmlFor="name">Name:</label>
						<input
							className={`input-field-style bg-gray-100 w-full`}
							type="text"
							id="name"
							name="name"
							placeholder="Joe"
							onChange={(e) => handleOnChange(e.target.value, setName)}
							value={name}
							required
						/>
					</div>

					<div className="flex flex-col justify-center items-start gap-1 w-full">
						<label htmlFor="email">Email:</label>
						<input
							className="input-field-style bg-gray-100 w-full"
							type="email"
							id="email"
							name="email"
							placeholder="joe@example.com"
							onChange={(e) => handleOnChange(e.target.value, setEmail)}
							value={email}
							required
						/>
					</div>

					<div className="flex flex-col justify-center items-start gap-1 w-full">
						<label htmlFor="message">Message:</label>
						<textarea
							className="input-field-style max-h-[150px] h-[45px] min-h-[150px] overflow-y-auto w-full bg-gray-100"
							id="message"
							name="message"
							placeholder="I was wondering when is the next event?"
							onChange={(e) => handleOnChange(e.target.value, setMessage)}
							value={message}
							required
						/>
					</div>

					<div className="flex flex-col justify-center items-center gap-2 w-full p-3 bg-gray-100 rounded-xl">
						{inquiryType ? (
							<div className="flex flex-col justify-center items-center bg-green-3 rounded-xl p-3 text-center text-white w-full text-sm">
								<p className="lato-bold">{inquiryType} (Inquiry)</p>
							</div>
						) : (
							<div className="flex flex-col justify-center items-center bg-gray-200 text-gray-500 text-center p-3 rounded-xl w-full text-sm">
								<p>Choose Contact</p>
							</div>
						)}

						{inquiryCategory ? (
							<div className="flex flex-col justify-center items-center bg-green-3 rounded-xl p-3 text-center text-white w-full text-sm">
								<p className="lato-bold">{inquiryCategory} (Category)</p>
							</div>
						) : (
							<div className="flex flex-col justify-center items-center bg-gray-200 text-gray-500 text-center p-3 rounded-xl w-full text-sm">
								<p>Choose Category</p>
							</div>
						)}
					</div>

					{formMessageLoading ? (
						<>
							<button
								disabled={true}
								className={`disabled-styled-btn w-full flex justify-center items-center gap-2`}
								type="submit"
							>
								<span>Submitting</span>
								<div className="disabled-spinner" />
							</button>
						</>
					) : (
						<>
							<button
								disabled={submitted ? true : false}
								onClick={(e) => {
									e.preventDefault();
									handleOnSubmit();
								}}
								className={`styled-btn w-full ${
									submitted ? "!text-white !bg-green-500" : ""
								}`}
								type="submit"
							>
								{submitted ? (
									<div className="flex justify-center items-center gap-2">
										<Image
											className="h-auto w-[20px]"
											src={"/icons/check_circle.svg"}
											alt="icon"
											width={25}
											height={25}
										/>

										<h1 className="lato-bold">Submitted</h1>
									</div>
								) : (
									<>
										<span>Submit</span>
									</>
								)}
							</button>
						</>
					)}
				</form>
			</div>
		</>
	);
};
