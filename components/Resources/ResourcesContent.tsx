"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import CarouselArrows from "../Widgets/CarouselArrows";

interface ResourcesTypes {
	title: string;
	subTitle: string;
	link: string;
	enableBg: boolean;
	content: {
		title: string;
		image: string;
		imageCollage: {
			src: string;
		}[];
		link: string;
		mediaType: string;
	}[];
}

interface ContentTypes {
	title: string;
	image: string;
	imageCollage: {
		src: string;
	}[];
	link: string;
	mediaType: string;
}

export const ResourcesContent: FC<{ resource: ResourcesTypes }> = ({
	resource,
}) => {
	const resourceCarouselArrowsRef = useRef<HTMLDivElement>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".resources-content")) {
				setOpenModal(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, [openModal]);

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<>
			{resource.content.map((data: ContentTypes) => data).length > 0 && (
				<div className="default-width flex flex-col justify-center items-start gap-5 w-full relative">
					<div
						className={`flex flex-col sm:flex-row gap-2 w-full h-auto ${
							resource.link
								? "justify-start sm:justify-between items-start w-full sm:items-end"
								: "justify-start items-start"
						}`}
					>
						<div className="flex flex-col justify-start items-start">
							<h3 className="lato-regular text-lg">{resource.subTitle}</h3>
							<h1 className="montserrat-bold text-3xl sm:text-5xl text-green-3">
								{resource.title}
							</h1>
						</div>

						{resource.link && (
							<Link
								href={resource.link}
								className="styled-btn w-full sm:w-fit text-center"
							>
								View More
							</Link>
						)}
					</div>

					<div className="w-full flex flex-col justify-center items-center relative">
						<div className="w-fit h-fit hidden lg:block">
							{resource.content.map((data: ContentTypes) => data).length >
								2 && (
								<>
									<CarouselArrows
										carouselArrowsRef={resourceCarouselArrowsRef}
									/>
								</>
							)}
						</div>

						<div className="w-fit h-fit lg:hidden">
							{resource.content.map((data: ContentTypes) => data).length >
								1 && (
								<>
									<CarouselArrows
										carouselArrowsRef={resourceCarouselArrowsRef}
									/>
								</>
							)}
						</div>

						<div
							ref={resourceCarouselArrowsRef}
							className={`default-overflow-x overflow-x-auto overflow-y-hidden w-full h-full grid grid-flow-col auto-cols-[minmax(300px,4fr)] sm:auto-cols-[minmax(400px,4fr)] gap-5 rounded-xl ${
								resource.enableBg ? "bg-gray-200 p-2" : "pb-5"
							}`}
						>
							{resource.content.map((data: ContentTypes, index: number) => {
								return (
									<React.Fragment key={index}>
										{data.link &&
										data.mediaType !== "mindset-media-productions" &&
										data.mediaType !== "youtube" ? (
											<Link
												href={data.link}
												target="_blank"
												className="default-overflow-x-child no-style-btn w-full h-96 bg-gray-500 rounded-xl flex flex-col justify-end items-start text-white p-5 relative overflow-hidden"
											>
												<Image
													className="object-cover object-center w-auto"
													src={data.image}
													alt="image"
													fill
													sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>
												<div className="default-gradient-bg" />

												<h1 className="montserrat-bold text-3xl z-10">
													{data.title}
												</h1>
											</Link>
										) : (
											<>
												<button
													onClick={handleOpenModal}
													className="no-style-btn w-full h-96 bg-gray-500 rounded-xl flex flex-col text-start justify-end items-start text-white p-5 relative overflow-hidden"
												>
													<Image
														className="object-cover object-center w-auto h-auto"
														src={data.image}
														alt="image"
														fill
														sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
													/>
													<div className="default-gradient-bg" />

													<h1 className="montserrat-bold text-3xl z-10">
														{data.title}
													</h1>
												</button>

												{openModal &&
													createPortal(
														<>
															<div className="default-modal">
																<div className="default-overflow resources-content bg-white default-width rounded-xl flex flex-col sm:flex-row overflow-x-hidden overflow-y-scroll justify-start sm:justify-center items-center sm:items-start">
																	{data.mediaType === "youtube" && (
																		<Youtube data={data} />
																	)}

																	{data.mediaType ===
																		"mindset-media-productions" && (
																		<MindsetMediaProductionsContent
																			data={data}
																		/>
																	)}
																</div>
															</div>
														</>,
														document.body
													)}
											</>
										)}
									</React.Fragment>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const Youtube: FC<{ data: ContentTypes }> = ({ data }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-3 relative w-full p-2">
			<div className="flex flex-wrap justify-center items-center w-full h-auto gap-2">
				{data.imageCollage.map((image: { src: string }, index: number) => {
					return (
						<div className="w-full h-[400px] relative" key={index}>
							<Image
								className="object-cover w-full h-auto rounded-xl"
								src={image.src}
								alt="image"
								fill
								sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					);
				})}
			</div>

			<Link
				href={data.link}
				target="_blank"
				className="styled-btn text-center w-full"
			>
				Go to Channel
			</Link>
		</div>
	);
};

const MindsetMediaProductionsContent: FC<{ data: ContentTypes }> = ({
	data,
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-3 relative w-full">
			<div className="w-full h-[300px] relative flex flex-col justify-center items-start gap-5">
				<Image
					className="object-cover w-full h-auto"
					src={data.image}
					alt="image"
					fill
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 p-5 w-full h-auto">
				<div className="flex flex-col justify-start items-start w-full gap-2">
					<h1 className="montserrat-bold text-3xl sm:text-4xl">
						Podcast Playlist
					</h1>
					<div className="main-overflow-x gap-5 rounded-xl">
						<iframe
							width="100%" // adjust width as needed
							height="500" // adjust height as needed
							src="https://www.youtube.com/embed/videoseries?list=PL-ew-Q-81RCuPlGcZz1ja6_8wybT4qUFJ"
							title="YouTube Playlist"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>

				<div className="main-overflow-x gap-5">
					<Link
						href={"https://www.youtube.com/@ETMFoundation/shorts"}
						target="_blank"
						className="no-style-btn w-auto h-auto z-10 relative rounded-xl overflow-hidden"
					>
						<div className="w-full h-[400px]">
							<Image
								className="object-cover w-full h-auto z-0"
								src={
									"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Social%20Media/dscwtzkz54sap74jhuml"
								}
								alt="image"
								fill
								sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<div className="default-gradient-bg opacity-70 absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-end items-start text-white p-5">
								<h1 className="montserrat-bold text-2xl sm:text-3xl">
									Explore ETMF Shorts
								</h1>
							</div>
						</div>
					</Link>

					<Link
						href={"https://www.youtube.com/@ETMFoundation/podcasts"}
						target="_blank"
						className="no-style-btn w-auto h-auto z-10 relative rounded-xl overflow-hidden"
					>
						<div className="w-full h-[400px]">
							<Image
								className="object-cover w-full h-auto z-0"
								src={
									"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Social%20Media/yqkghuukufvatwafz2eh"
								}
								alt="image"
								fill
								sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<div className="default-gradient-bg opacity-70 absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-end items-start text-white p-5">
								<h1 className="montserrat-bold text-2xl sm:text-3xl">
									Explore ETMF Podcasts
								</h1>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<Link
				href={data.link}
				target="_blank"
				className="styled-btn !rounded-none text-center w-full"
			>
				Go to Channel
			</Link>
		</div>
	);
};
