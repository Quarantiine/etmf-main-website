"use client";

import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
import programList from "@/data/programList.json";
import Link from "next/link";

interface ProgramListTypes {
	title: string;
	subTitle: string;
	description: {
		text: string;
	}[];
	image: string;
	statementSection: {
		title: string;
		paragraphs: {
			textHeader: string;
			text: string;
		}[];
	}[];
}

interface StatementTypes {
	title: string;
	paragraphs: {
		textHeader: string;
		text: string;
	}[];
}

interface TextTypes {
	textHeader: string;
	text: string;
}

export default function ProgramsTab(): React.ReactElement {
	const [currentClickedProgram, setCurrentClickedProgram] = useState("");

	const handleClickedProgram = (text: string) => {
		window.scrollTo(0, 510);
		setCurrentClickedProgram(text);
	};

	const handleBackToPrograms:
		| MouseEventHandler<HTMLButtonElement>
		| undefined = () => {
		setCurrentClickedProgram("");
	};

	return (
		<>
			<div className="default-width flex flex-col gap-5 mx-auto">
				{currentClickedProgram === "" && (
					<div className="flex flex-col sm:grid sm:grid-cols-2 text-white relative gap-10 justify-center sm:justify-start items-center w-full pb-20">
						{programList.map((program: ProgramListTypes, index: number) => {
							return (
								<React.Fragment key={index}>
									<button
										onClick={() => handleClickedProgram(program.title)}
										className="no-style-btn flex flex-col relative rounded-xl w-full h-72 sm:h-96 overflow-hidden"
									>
										<div className="placeholder-bg flex justify-center items-center">
											<div className="spinner" />
										</div>

										<Image
											className="object-cover inset-0 z-0"
											src={program.image}
											alt="image"
											fill
											sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>

										<div className="w-full h-full p-5 flex flex-col justify-end items-start text-start gap-4 bg-[rgba(0,0,0,0.4)] z-10 relative">
											<h1 className="montserrat-bold text-3xl">
												{program.title}
											</h1>
										</div>
									</button>
								</React.Fragment>
							);
						})}
					</div>
				)}

				{programList
					.filter((value) => value.title === currentClickedProgram)
					.map((program: ProgramListTypes, index: number) => {
						return (
							<React.Fragment key={index}>
								{currentClickedProgram === program.title && (
									<>
										<button
											onClick={handleBackToPrograms}
											className="styled-btn mr-auto"
										>
											Back
										</button>

										<div className="default-width flex flex-col justify-center items-center">
											<div className="flex flex-col justify-center items-center relative pb-20 gap-20 w-full">
												<div className="check-point-line" />

												{programList
													.filter(
														(value) => value.title === currentClickedProgram
													)
													.map((program: ProgramListTypes, index: number) => {
														return (
															<React.Fragment key={index}>
																<div className="flex flex-col gap-5 w-full">
																	<div className="flex flex-col justify-center items-start gap-5 w-full">
																		<div className="flex flex-row gap-4 justify-start items-start h-fit">
																			<div className="check-point-circles" />

																			<div className="flex flex-col justify-start items-start">
																				<h1 className="lato-regular text-lg">
																					{program.subTitle}
																				</h1>
																				<h1 className="montserrat-bold text-4xl sm:text-5xl text-green-3">
																					{program.title}
																				</h1>
																			</div>
																		</div>

																		<div className="flex flex-col justify-center items-start gap-5 w-full pl-14">
																			{program.description.map(
																				(
																					descr: { text: string },
																					index: number
																				) => {
																					return (
																						<React.Fragment key={index}>
																							<p className="list-decimal">
																								{descr.text}
																							</p>
																						</React.Fragment>
																					);
																				}
																			)}
																		</div>
																	</div>

																	<div className="flex flex-col gap-5 justify-center items-start">
																		{program.statementSection.map(
																			(
																				statement: StatementTypes,
																				index: number
																			) => {
																				return (
																					<React.Fragment key={index}>
																						<div className="flex flex-col gap-5 justify-center items-start">
																							<div className="flex flex-row gap-4 justify-start items-center h-fit">
																								<div className="check-point-circles" />
																								<h1 className="montserrat-bold text-3xl sm:text-4xl">
																									{statement.title}
																								</h1>
																							</div>

																							<ul className="flex flex-col gap-5 justify-center items-start pl-[100px]">
																								{statement.paragraphs.map(
																									(
																										paragraph: TextTypes,
																										index: number
																									) => {
																										return (
																											<React.Fragment
																												key={index}
																											>
																												<li className="list-decimal">
																													{paragraph.textHeader && (
																														<p className="lato-bold text-xl">
																															{
																																paragraph.textHeader
																															}
																														</p>
																													)}
																													{paragraph.text && (
																														<p>
																															{paragraph.text}
																														</p>
																													)}
																												</li>
																											</React.Fragment>
																										);
																									}
																								)}
																							</ul>
																						</div>
																					</React.Fragment>
																				);
																			}
																		)}
																	</div>
																</div>
															</React.Fragment>
														);
													})}
											</div>
										</div>
									</>
								)}
							</React.Fragment>
						);
					})}
			</div>

			{currentClickedProgram !== "" && (
				<div className="flex flex-col w-full h-fit px-5 sm:px-10 py-10 bg-green-3 justify-center items-center text-white relative">
					<Image
						className="object-cover inset-0 z-0 grayscale opacity-10"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/brjgvrkjyqpit2zn3hrg"
						}
						alt="image"
						fill
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="default-width flex flex-col gap-5 justify-center items-start z-10">
						<h1 className="montserrat-bold text-4xl sm:text-5xl">
							Curious about how we’ll bring our vision to life?
						</h1>

						<div className="flex flex-col gap-5 justify-center items-start">
							<p>
								Fill out the form below to connect with someone who can discuss
								how the ETM Foundation will achieve success in the initiatives
								we offer.
							</p>
						</div>

						<Link
							href={"https://m06w1sq48mn.typeform.com/to/egR2Hgce"}
							className="styled-btn"
							target="_blank"
						>
							Meet a Person
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
