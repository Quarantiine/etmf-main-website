import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import resourcesData from "@/data/resourcesData.json";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Resources | ETMF",
	description:
		"Explore how the ETM Foundation is impacting students’ lives and enriching communities. Discover our latest advanced technology developments, initiatives, and much more.",
};

interface ResourcesTypes {
	title: string;
	subTitle: string;
	description: string;
	link: string;
	enableBg: boolean;
	content: {
		title: string;
		image: string;
	}[];
}

interface ContentTypes {
	title: string;
	image: string;
}

export default function Resources(): React.ReactElement {
	return (
		<>
			<>
				<div className="flex flex-col justify-center items-center default-width absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
					<Image
						className="object-cover w-auto h-[200px]"
						src={"/etm_foundation_text_gray.png"}
						alt="logo"
						width={210}
						height={210}
					/>

					<p className="text-center bg-gray-500 p-3 rounded-full text-white">
						<span className="lato-bold">Gotcha!</span> This Page is not yet
						ready, comeback another time wonderful user.
					</p>
				</div>
			</>

			{false && (
				<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
					<div className="flex flex-col justify-center items-center gap-20 w-full h-fit border-b-[25px] border-[#4BF2C7] relative">
						<div className="placeholder-bg" />

						<Image
							className="object-cover inset-0 z-0"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/qj7uohlcpyay3fmd11hb"
							}
							alt="image"
							fill
							priority={true}
							sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
							<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
								<h1 className="montserrat-bold text-5xl">Resoures</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eligendi quasi odit dolorum, laboriosam, quaerat eveniet animi
									quas deleniti quos, facilis maiores. Tempora, aperiam.
									Aliquam, exercitationem quaerat illum adipisci porro
									architecto.
								</p>

								{/* Colored dots for design purposes */}
								<div className="flex justify-start items-center gap-8">
									{/* Hidden on smaller screens, visible on larger screens */}
									<div className="hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
									{/* Visible colored dots */}
									<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
									<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
									<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
									<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-20 pb-20 w-full h-auto justify-center items-center">
						{resourcesData.map((resource: ResourcesTypes, index: number) => {
							return (
								<React.Fragment key={index}>
									<div className="flex flex-col justify-center items-start gap-5 w-full default-width">
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
													resource.enableBg ? "bg-gray-200 p-5" : "pb-5"
												}`}
											>
												{resource.content.map(
													(data: ContentTypes, index: number) => {
														return (
															<React.Fragment key={index}>
																<button className="no-style-btn w-full h-96 bg-gray-500 rounded-xl flex flex-col justify-end items-start text-white p-5">
																	<h1 className="montserrat-bold text-3xl">
																		{data.title}
																	</h1>
																</button>
															</React.Fragment>
														);
													}
												)}
											</div>
										</div>
									</div>
								</React.Fragment>
							);
						})}
					</div>
				</main>
			)}
		</>
	);
}
