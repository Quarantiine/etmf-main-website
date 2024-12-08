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
						"VR simulates pitch scenarios with AI feedback on delivery, helping entrepreneurs perfect their presentation skills.",
				},
				{
					mainPoint:
						"Interactive VR challenges enhance decision-making by letting users analyze data and experience the outcomes of their choices.",
				},
				{
					mainPoint:
						"VR offers a risk-free environment for developing team management, conflict resolution, and leadership abilities.",
				},
			],
			image: "/icons/engagement.png",
		},
		{
			title: "AI For ETMF Academy",
			pointSection: [
				{
					mainPoint:
						"AI provides targeted hints, feedback, and conversational engagement with lecture videos, enhancing critical thinking and comprehension.",
				},
				{
					mainPoint:
						"AI-generated scenarios based on course content allow students to apply their knowledge in real-world situations for deeper understanding.",
				},
				{
					mainPoint:
						"Students can customize the AI assistant's personality for a motivating experience, with multilingual support ensuring inclusivity for diverse learners.",
				},
			],
			image: "/icons/ai.png",
		},
	];

	return (
		<>
			<div className="bg-gradient-green-1 w-full h-fit flex flex-col justify-center items-start text-white relative px-5 sm:px-10 py-16 overflow-hidden">
				<div className="flex flex-col justify-center items-start default-width mx-auto gap-10 z-10">
					<h1 className="montserrat-bold text-4xl sm:text-5xl">
						{"How We’re Embracing Technology"}
					</h1>

					<p>
						{`Here are just a few examples of how we're harnessing technology to create a more vibrant and connected community. Discover more in the "Programs" or "Resources" tab!`}
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto h-auto justify-center items-center gap-5 relative">
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
						href={"/programs"}
					>
						Discover More
					</Link>
				</div>
			</div>
		</>
	);
};
