"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
					title: "How Will AI be Used at ETMF?",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Tech%20News/rmpl9bahnkfqbfqdlcu6",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://medium.com/@danielward.occ/meet-zhyra-ai-the-intelligent-ai-assistant-3034b939de89",
					mediaType: "",
				},
				{
					title: "(Dropping) Mindset Matters Podcast EP11!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Podcast/q4fiuz59ulfplqbmtfr4",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtube.com/@ETMFoundation",
					mediaType: "",
				},
				{
					title: "Mindset Matters Podcast EP10 Dropped!",
					image:
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Podcast/nxxnazu57tbunj9ntuco",
					imageCollage: [
						{
							src: "none",
						},
					],
					link: "https://youtu.be/Z9W11vOq8Vc?si=hHcgfuKS_lKLiAOz",
					mediaType: "",
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
									{/* <button className="no-style-btn bg-green-1 w-16 h-16 absolute top-1/2 -translate-y-1/2 -left-6 z-10 rounded-full flex flex-col justify-center items-center -rotate-90">
										<Image
											className="w-auto h-[30px]"
											src={"/icons/arrow_drop_up.png"}
											alt="icon"
											width={35}
											height={35}
										/>
									</button> */}

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
