"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import meetingMinutesData from "@/data/meetingMinutesData.json";

interface MeetingMinutesTypes {
	title: string;
	content: string;
}

export default function MeetingMinutes({}): React.ReactElement {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".meeting-minutes")) {
				setOpenModal(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, []);

	return (
		<>
			<div className="w-full bg-green-1 h-1 rounded-full" />

			<div className="main-overflow-x gap-5">
				<button
					onClick={handleOpenModal}
					className="no-style-btn w-full h-96 bg-gray-500 rounded-xl flex flex-col text-start justify-end items-start text-white p-5 relative overflow-hidden"
				>
					<Image
						className="object-cover object-top w-auto h-auto"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/r4k0nvkygole1htejwv7"
						}
						alt="image"
						fill
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div className="default-gradient-bg" />

					<div className="flex flex-col gap-2 w-full">
						<h1 className="montserrat-bold text-3xl z-10">
							Board Meeting Minutes
						</h1>

						<p className="text-lg z-10">
							{
								"Explore the discussions and initiatives the board is undertaking to enhance the nonprofit's operations, foster growth, and maximize its impact on the community."
							}
						</p>
					</div>
				</button>

				{openModal &&
					createPortal(
						<>
							<div className="default-modal">
								<div className="meeting-minutes p-5 bg-white default-width w-fit h-fit rounded-xl flex flex-col sm:flex-row overflow-hidden">
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto gap-5 default-overflow overflow-y-scroll overflow-x-hidden justify-start items-start">
										{meetingMinutesData.map(
											(data: MeetingMinutesTypes, index: number) => {
												return (
													<React.Fragment key={index}>
														<Link
															href={data.content}
															target="_blank"
															className="no-style-btn w-full h-80 bg-gray-500 rounded-xl flex flex-col text-start justify-end items-start text-white p-5 relative overflow-hidden"
														>
															<Image
																className="object-cover object-top w-auto h-auto"
																src={data.content}
																alt="image"
																fill
																sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
															/>
															<div className="default-gradient-bg" />

															<div className="flex flex-col gap-2 w-full">
																<h1 className="montserrat-bold text-3xl sm:text-4xl z-10">
																	{data.title}
																</h1>
															</div>
														</Link>
													</React.Fragment>
												);
											}
										)}
									</div>
								</div>
							</div>
						</>,
						document.body
					)}
			</div>
		</>
	);
}
