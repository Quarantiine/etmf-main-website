"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProblemListType {
	title: string;
	pointSection: { mainPoint: string; point: { text: string }[] }[];
	image: string;
}

interface PointsType {
	mainPoint: string;
	point: { text: string }[];
}

export default function Section3(): React.ReactElement {
	const problemList: ProblemListType[] = [
		{
			title: "Addressing Student Engagement and Motivation",
			pointSection: [
				{
					mainPoint:
						"AI (ETMF AI Assistant) is designed to improve student engagement through: Enthusiastic and upbeat interactions",
					point: [
						{ text: "Supportive and encouraging communication" },
						{
							text: "Incorporating playfulness and humor to keep learning fun Celebrating milestones and achievements",
						},
					],
				},
			],
			image: "/icons/engagement.png",
		},
		{
			title: "How AI Enhances the ETMF Website Experience",
			pointSection: [
				{
					mainPoint: "",
					point: [
						{
							text: "Seamless Navigation: The AI assistant guides users, answers questions, and suggests resources for easy access and engagement.",
						},
						{
							text: "Accessibility for All: Multilingual support and accessibility features make the site inclusive.",
						},
						{
							text: "Fostering Involvement: The AI assistant simplifies donations and promotes volunteer opportunities.",
						},
					],
				},
			],
			image: "/icons/ai.png",
		},
		{
			title: "Efficient Use of Educational Resources",
			pointSection: [
				{
					mainPoint:
						"By implementing AI, ETMF aims to provide more efficient and effective learning experiences with ETMF Academy. This addresses the problem of inefficient use of educational resources by:",
					point: [
						{ text: "Offering personalized tutoring at scale" },
						{ text: "Adapting to learners' unique needs" },
						{ text: "Providing customized feedback" },
					],
				},
			],
			image: "/icons/tuition.png",
		},
		{
			title: "Data-Driven Improvement",
			pointSection: [
				{
					mainPoint: "The fine-tuning system for the AI assistant includes:",
					point: [
						{
							text: "A 'Gold Standard' database for storing successful interactions for the AI assistant to replicate and follow after.",
						},
						{
							text: "A 'Lessons Learned' database for interactions that need to be avoided. Teaches the AI assistant to avoid certain conversations.",
						},
					],
				},
			],
			image: "/icons/area-chart.png",
		},
	];

	return (
		<>
			<div className="bg-gradient-green-1b w-full ml-auto h-fit flex flex-col justify-center items-start text-white relative px-10 py-16 overflow-hidden">
				<Image
					className="object-cover grayscale opacity-20 inset-0 z-0"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/lfmml8rh1gej3kstghir"
					}
					alt="image"
					fill
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="flex flex-col justify-center items-start default-width mx-auto gap-10 z-10">
					<h1 className="montserrat-bold text-4xl sm:text-5xl text-start">
						How Can We Impact Students And Communities?
					</h1>

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

														<div className="flex flex-col pl-5">
															{points.point.map((p, i) => (
																<li key={i} className="list-disc">
																	{p.text}
																</li>
															))}
														</div>
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
						Read More
					</Link>
				</div>
			</div>
		</>
	);
}
