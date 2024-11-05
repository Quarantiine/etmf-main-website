"use client";

import Image from "next/image";
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
			title: "Simplifies Complex Information",
			pointSection: [
				{
					mainPoint:
						"Zhyra AI breaks down complicated topics and website navigation, making information easily accessible to everyone.",
				},
			],
			image: "/icons/engagement.png",
		},
		{
			title: "Personalizes the Experience",
			pointSection: [
				{
					mainPoint:
						"Zhyra AI adapts to individual learning styles and preferences, creating custom-tailored support and guidance.",
				},
			],
			image: "/icons/ai.png",
		},
		{
			title: "Empowers Efficient Decision-Making",
			pointSection: [
				{
					mainPoint:
						"Zhyra AI provides data-driven insights and streamlines workflows, freeing up time for strategic thinking.",
				},
			],
			image: "/icons/tuition.png",
		},
		{
			title: "Promotes Deeper Engagement",
			pointSection: [
				{
					mainPoint:
						"Zhyra AI interactive approach and personalized feedback boost user motivation and create more meaningful learning and growth experiences",
				},
			],
			image: "/icons/area-chart.png",
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
						{"What Problems We're Solving Using Technology?"}
					</h1>

					<p>
						{`Here are just a few examples of how we're harnessing technology to create a more vibrant and connected community. Discover more about our initiatives in the "Resources" tab!`}
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto h-auto justify-center items-center gap-5 relative">
						{problemList.map((list: ProblemListType, index) => (
							<div
								className="relative w-full h-full rounded-xl overflow-hidden"
								key={index}
							>
								<div className="w-full h-full p-5 flex flex-col gap-4 text-start bg-white text-black z-10 relative">
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

					{/* <Link
            className="w-full sm:w-[200px] text-center styled-btn"
            href={"/resources"}
          >
            Read More
          </Link> */}
				</div>
			</div>
		</>
	);
};
