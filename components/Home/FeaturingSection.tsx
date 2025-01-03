"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
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
		important: boolean;
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
	important: boolean;
}

export default function FeaturingSection() {
	const carouselArrowsRef = useRef<HTMLDivElement>(null);

	const resources: ResourcesTypes[] = [
		{
			title: "Featured Content",
			subTitle: "The Latest Updates from the Foundation",
			link: "",
			enableBg: false,
			content: [
				{
					title: "ETMF Speaker Series Event Coming Up! Register Now!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/ETMF%20Academy/wvwpmrgawzovcygl1c0x",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://docs.google.com/forms/d/e/1FAIpQLSf1N0zcn6oanoTVBccynQ_D7fQFiy6gCMn5L2uaasIDKqEB2w/viewform",
					mediaType: "",
					important: true,
				},
				{
					title: "Dallas College's Story on our President, CEO",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Social%20Media/e4fxbqflfvqbiodbvofz",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://x.com/dallascollegetx/status/1859257947773079747/photo/",
					mediaType: "",
					important: true,
				},
				{
					title: "Mindset Matters Podcast EP15 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Featured%20Content/kxpijsxnvodto6cchvwd",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/-mzOPaGaEJQ",
					mediaType: "",
					important: false,
				},
				{
					title: "Mindset Matters Podcast EP14 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Featured%20Content/m12mibbf26qg3f4cp6iw",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/-43UQc8j94M?si=XqkUyzwrH12I8kwL",
					mediaType: "",
					important: false,
				},
			],
		},
	];

	return (
		<>
			{resources.map((resource: ResourcesTypes, index: number) => {
				return (
					<React.Fragment key={index}>
						{resource.content.map((data: ContentTypes) => data).length > 0 && (
							<div className="flex flex-col justify-center items-start gap-5 w-full relative">
								<div
									className={`flex flex-col sm:flex-row gap-2 w-full h-auto ${
										resource.link
											? "justify-start sm:justify-between items-start w-full sm:items-end"
											: "justify-start items-start"
									}`}
								>
									<div className="flex flex-col justify-start items-start">
										<h3 className="lato-regular text-lg">
											{resource.subTitle}
										</h3>
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
									<CarouselArrows carouselArrowsRef={carouselArrowsRef} />

									<div
										ref={carouselArrowsRef}
										className={`default-overflow-x overflow-x-auto overflow-y-hidden w-full h-full grid grid-flow-col auto-cols-[minmax(300px,4fr)] sm:auto-cols-[minmax(400px,4fr)] gap-5 rounded-xl ${
											resource.enableBg ? "bg-gray-200 p-2" : "pb-5"
										}`}
									>
										{resource.content.map(
											(data: ContentTypes, index: number) => {
												return (
													<div className="relative" key={index}>
														{data.important && (
															<div className="w-fit bg-white h-fit p-.5 rounded-full z-10 absolute top-3 right-3 lato-bold text-black shadow-xl border-2 border-[#4bf2c7]">
																<Image
																	className="object-cover object-center w-auto h-[30px]"
																	src={"/icons/star.svg"}
																	title="Important"
																	alt="image"
																	width={33}
																	height={33}
																/>
															</div>
														)}

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

															<h1 className="montserrat-bold text-2xl z-10">
																{data.title}
															</h1>
														</Link>
													</div>
												);
											}
										)}
									</div>
								</div>
							</div>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
}
