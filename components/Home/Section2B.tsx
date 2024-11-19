"use client";

import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";

interface ProblemListType {
	title: string;
	pointSection: { mainPoint: string }[];
	image: string;
}

interface PointsType {
	mainPoint: string;
}

export const Section2B: React.FC = () => {
	const problemList: ProblemListType[] = [
		{
			title: "Virtual Reality (VR) for ETMF Academy",
			pointSection: [
				{
					mainPoint:
						"Pitch Delivery Practice: Simulate pitches to virtual investors or panels, using AI feedback to improve body language, voice modulation, and clarity.",
				},
				{
					mainPoint:
						"Strategic Decision-Making: Analyze market data and experience the consequences of business decisions in dynamic VR scenarios, boosting strategic confidence.",
				},
				{
					mainPoint:
						"Leadership and Team Management: Hone leadership, conflict resolution, and team management skills through realistic VR scenarios like product launches and interpersonal conflicts.",
				},
			],
			image: "/icons/engagement.png",
		},
		{
			title: "Zhyra AI For ETMF Website",
			pointSection: [
				{
					mainPoint:
						"Deconstructs intricate topics into clear, concise, and digestible insights.",
				},
				{
					mainPoint:
						"Improves website navigation by directing users to the most relevant pages with accurate links.",
				},
				{
					mainPoint:
						"Continuously enhances interactions by leveraging user feedback and behavior to maximize engagement.",
				},
			],
			image: "/icons/area-chart.png",
		},
		{
			title: "Zhyra AI For ETMF Academy",
			pointSection: [
				{
					mainPoint:
						"Adapts dynamically to individual preferences and needs for a tailored user experience.",
				},
				{
					mainPoint:
						"Delivers personalized support, offering relevant guidance and resources to each user.",
				},
				{
					mainPoint:
						"Continuously refines interactions based on user feedback and behavior for optimal engagement.",
				},
			],
			image: "/icons/ai.png",
		},
	];

	return (
		<>
			<div className="bg-gradient-green-1 w-full h-fit flex flex-col justify-center items-start text-white relative px-5 sm:px-10 py-16 overflow-hidden">
				<Image
					className="object-cover grayscale opacity-20 inset-0 z-0"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/ztn0h5db9b2uig0ivfah"
					}
					alt="image"
					fill
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="flex flex-col justify-center items-start default-width mx-auto gap-10 z-10">
					<h1 className="montserrat-bold text-4xl sm:text-5xl">
						{"How We’re Embracing Technology"}
					</h1>

					<p>
						{`Here are just a few examples of how we're harnessing technology to create a more vibrant and connected community. Discover more in the "Resources" tab!`}
					</p>
					<p>
						{`Zhyra AI is an advanced AI assistant developed and managed under the guidance of the Chief Product & Technology Officer.`}
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-3 w-full mx-auto h-auto justify-center items-center gap-5 relative">
						{problemList.map((list: ProblemListType, index) => (
							<div className="relative w-full h-full" key={index}>
								<div className="w-full h-fit p-5 flex rounded-xl flex-col gap-4 text-start bg-white text-black z-10 relative">
									<Image src={list.image} alt="icon" width={100} height={100} />
									<h1 className="montserrat-bold">{list.title}</h1>

									<>
										{list.pointSection.map(
											(points: PointsType, pointIndex: number) => (
												<React.Fragment key={pointIndex}>
													<ul className="flex flex-col pl-5">
														{points.mainPoint && (
															<li className="list-disc">{points.mainPoint}</li>
														)}
													</ul>
												</React.Fragment>
											)
										)}
									</>
								</div>
							</div>
						))}
					</div>

					<Link
						className="w-full sm:w-[200px] text-center styled-btn"
						href={"/resources"}
					>
						Discover More
					</Link>
				</div>
			</div>
		</>
	);
};
