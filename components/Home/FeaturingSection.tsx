"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
// import resource from "@/data/resourcesData.json"

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

export default function FeaturingSection() {
	const resources: ResourcesTypes[] = [
		{
			title: "Featured Content",
			subTitle: "The Latest Updates from the Foundation",
			link: "",
			enableBg: false,
			content: [
				{
					title: "(Event) Speaker Series Coming Up!! Nov 22nd",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Flyers/d5pluqj0zcbb04c1dl7q",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://forms.office.com/r/MW9sp08a1m",
					mediaType: "flyer",
				},
				{
					title: "Mindset Matters Podcast EP9 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Podcast/e1djhrwzy9vj7s7oawfc",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/qqMElU0qALE?si=3p3enTbFdiy2UWLd",
					mediaType: "",
				},
				{
					title: "Mindset Matters Podcast EP8 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Podcast/hbticm142i7rk93p8ydt",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://www.youtube.com/watch?v=_OYptmC4lGo",
					mediaType: "",
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

								<div className="w-full flex flex-col justify-center items-center">
									<div
										className={`default-overflow-x overflow-x-auto overflow-y-hidden w-full h-full grid grid-flow-col auto-cols-[minmax(300px,4fr)] sm:auto-cols-[minmax(400px,4fr)] gap-5 rounded-xl ${
											resource.enableBg ? "bg-gray-200 p-2" : "pb-5"
										}`}
									>
										{resource.content.map(
											(data: ContentTypes, index: number) => {
												return (
													<React.Fragment key={index}>
														<Link
															href={data.link}
															target="_blank"
															className="no-style-btn w-full h-96 bg-gray-500 rounded-xl flex flex-col justify-end items-start text-white p-5 relative overflow-hidden"
														>
															<Image
																className="object-cover object-top w-auto"
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
													</React.Fragment>
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

			{}
		</>
	);
}
