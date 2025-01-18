"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface TeamListTypes {
	name: string;
	position: string;
	bio: string;
	socials: {
		linkedIn: string;
		img: string;
	}[];
	picture: string;
}

interface SocialsLinkTypes {
	linkedIn: string;
	img: string;
}

export default function PersonalModal({
	team,
}: {
	team: TeamListTypes;
}): React.ReactElement {
	const [openModal, setOpenModal] = useState(false);

	const handleOpeningModal = () => {
		setOpenModal(!openModal);
	};

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".persona-modal")) {
				setOpenModal(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, [openModal]);

	return (
		<>
			<div className="flex flex-col gap-3 justify-start items-center h-fit relative w-full">
				<button
					onClick={handleOpeningModal}
					className="no-style-btn black p-5 w-full h-[400px] sm:h-[300px] flex flex-col relative justify-end items-start text-start rounded-3xl overflow-hidden"
				>
					<Image
						className="object-cover"
						src={team.picture}
						alt="image"
						fill
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					{/* <div className="default-gradient-bg" /> */}
				</button>

				<div className="flex flex-col relative justify-end items-start text-start w-full z-10 text-black">
					<h1 className="montserrat-bold text-xl">{team.name}</h1>
					<p>{team.position}</p>
				</div>
			</div>

			{openModal &&
				createPortal(
					<>
						<div className="default-modal">
							<div className="default-overflow persona-modal bg-white default-width w-fit h-fit rounded-xl flex flex-col sm:flex-row overflow-hidden">
								<div className="hidden sm:block min-w-[200px] md:min-w-[300px] h-full relative">
									<Image
										className="object-cover object-center h-auto rounded-l-xl"
										src={team.picture}
										alt="image"
										fill
										sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>

								<div className="default-overflow flex flex-col relative justify-start items-start text-start p-10 rounded-xl w-full h-[300px] gap-3 overflow-y-scroll overflow-x-hidden">
									<div className="flex flex-col justify-start items-start">
										<h1 className="montserrat-bold text-3xl">{team.name}</h1>
										<h3 className="text-xl">{team.position}</h3>
									</div>

									<p>{team.bio}</p>

									<div className="flex flex-row gap-2 justify-start items-start w-full h-fit">
										{team.socials.map(
											(social: SocialsLinkTypes, index: number) => {
												return (
													<React.Fragment key={index}>
														<Link
															className="no-style-btn"
															href={social.linkedIn}
															target="_blank"
														>
															<Image
																className="w-auto h-[40px]"
																src={social.img}
																alt={`icon`}
																width={50}
																height={50}
															/>
														</Link>
													</React.Fragment>
												);
											}
										)}
									</div>
								</div>
							</div>
						</div>
					</>,
					document.body
				)}
		</>
	);
}
