"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import CarouselArrows from "../Widgets/CarouselArrows";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContentTypes, ResourcesTypes } from "@/lib/types";
gsap.registerPlugin(ScrollTrigger);

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
					title: "ICE News & Awareness: Know Your Rights",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/ICE/j3bpipwkluaiz8vf2w9a",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://immigrantjustice.org/know-your-rights",
					mediaType: "ice",
					important: true,
				},
				{
					title:
						"DCCCD's Student Engagement Coordinator | Mindset Matters EP19",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Featured%20Content/uscp5fcapwctr7z7avuc",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/yUfCJnhxqN4",
					mediaType: "",
					important: true,
				},
				{
					title:
						"Bridging Education Service and Entrepreneurship | Mindset Matters EP18",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Featured%20Content/sarjc93pfbbtz9ckqi5h",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/euXO9iqk6Zg",
					mediaType: "",
					important: true,
				},
				{
					title:
						"From Passion To Plate | Dallas College Chef Student | Mindset Matters Podcast EP17 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Header%20Section/vulzdh2uanpqorkzkzud",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://www.youtube.com/watch?v=y98GPmDsQHc&t=441s",
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
									<div className="flex flex-col justify-start items-start feature-section-titles">
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
