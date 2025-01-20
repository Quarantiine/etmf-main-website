"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface GettingInvolvedTypes {
	title: string;
	paragraphs: {
		textHeader: string;
		text: string;
	}[];
	link: string;
	linkText: string;
}

interface TextTypes {
	textHeader: string;
	text: string;
}

export default function SectionComponent({
	data,
}: {
	data: GettingInvolvedTypes;
}): React.ReactElement {
	useEffect(() => {
		gsap.to(".check-point-circles", {
			scrollTrigger: {
				trigger: ".statement-sections-2",
				start: "top 50%",
				end: "80% 50%",
				scrub: 1,
			},

			backgroundColor: "#4BF2C7",
			stagger: {
				each: 0.5,
			},
		});
	}, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center relative pb-20 gap-2 w-full">
				<div className="check-point-line" />

				<div className="flex flex-col gap-5 w-full">
					<>
						<div className="flex flex-col gap-5 justify-center items-start">
							<div className="flex flex-col gap-5 justify-center items-start">
								<div className="flex flex-row gap-4 justify-start items-start h-fit">
									<div className="check-point-circles" />
									<h1 className="montserrat-bold text-3xl sm:text-5xl">
										{data.title}
									</h1>
								</div>

								<ul className="flex flex-col gap-5 justify-center items-start pl-[100px]">
									{data.paragraphs.map(
										(paragraph: TextTypes, index: number) => {
											return (
												<React.Fragment key={index}>
													<li className="list-decimal">
														<p className="lato-bold text-xl">
															{paragraph.textHeader}
														</p>
														<p>{paragraph.text}</p>
													</li>
												</React.Fragment>
											);
										}
									)}

									{data.linkText && (
										<Link
											className="styled-btn"
											href={data.link}
											target="_blank"
										>
											{data.linkText}
										</Link>
									)}
								</ul>
							</div>
						</div>
					</>
				</div>
			</div>
		</>
	);
}
