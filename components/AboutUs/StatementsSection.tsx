"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface StatementListTypes {
	title: string;
	paragraphs: {
		text: string;
	}[];
}

export default function StatementsSection({
	statement,
}: {
	statement: StatementListTypes;
}): React.ReactElement {
	useEffect(() => {
		gsap.to(".check-point-circles", {
			scrollTrigger: {
				trigger: ".statement-sections",
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
			<div className="flex flex-col gap-5">
				<div className="flex flex-row gap-4 justify-start items-start">
					<div className="check-point-circles" />

					<h1 className="montserrat-bold text-5xl text-green-3">
						{statement.title}
					</h1>
				</div>

				<div className="flex flex-col gap-5 justify-center items-start pl-20">
					{statement.paragraphs.map(
						(paragraph: { text: string }, index: number) => {
							return (
								<React.Fragment key={index}>
									<p>{paragraph.text}</p>
								</React.Fragment>
							);
						}
					)}
				</div>
			</div>
		</>
	);
}
