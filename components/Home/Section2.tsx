"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Section2B from "./Section2B";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface BtnListTypes {
	title: string;
	description: string;
	currentBtn: string;
}

export default function Section2(): React.ReactElement {
	const btnList: BtnListTypes[] = [
		{
			title: "Department of Education",
			description:
				"Our Department of Education empowers institutions to deliver innovative programs, fostering a growth mindset, developing essential skills, and paving the way for student success and workforce readiness, ultimately leading to wider economic development.",
			currentBtn: "btn1",
		},
		{
			title: "Technology and Innovation",
			description:
				"The foundation is built on innovation, personalization, and accessibility, leveraging emerging technology to curate impactful learning experiences and foster deeper engagement with ETMF's mission.",
			currentBtn: "btn4",
		},
		{
			title: "Community Engagement",
			description:
				"Our Community Engagement department develops initiatives that inspire and motivate community members to embrace personal growth, pursue their passions, and build a brighter, more empowered society.",
			currentBtn: "btn2",
		},
		{
			title: "Mindset Media Productions",
			description:
				"Our production company creates impactful, mindset-based content to educate, empower, and inspire our audiences to leverage what they've learned through our programs and initiatives to reach their full potential.",
			currentBtn: "btn3",
		},
	];

	const [currentDropdown, setCurrentDropdown] = useState("btn1");

	const handleDropdown = (currentBtn: string) => {
		setCurrentDropdown(currentBtn);
	};

	useEffect(() => {
		gsap.to(".section-2", {
			scrollTrigger: {
				trigger: ".section-2",
				start: "25% 70%",
				end: "25% 70%",
			},

			opacity: 1,
		});
	}, []);

	return (
		<>
			<div className="section-2 flex flex-col gap-20 md:gap-0 w-full h-fit">
				<div className="flex flex-row w-full h-full relative justify-start items-center gap-5">
					<>
						<div className="hidden md:block relative w-[700px] h-fit">
							<div className="w-auto h-auto">
								<Image
									className="w-auto h-auto object-cover z-10"
									src={
										"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/hand-flower"
									}
									alt="image"
									width={650}
									height={650}
								/>
							</div>

							<div className="shadow-[0px_0px_200px_200px_rgba(255,215,0,1)] bg-yellow w-30 h-30 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1]"></div>
						</div>
					</>

					<div className="default-width xl:w-[500px] h-auto md:pr-10 mx-auto flex flex-col justify-center items-start gap-10">
						<h1 className="section-2-title montserrat-bold text-5xl">
							Our Mission
						</h1>
						<ul className="flex flex-col gap-4">
							<li className="list-disc ml-5">
								Unlock your extraordinary potential through the power of
								mindset.
							</li>
							<li className="list-disc ml-5">
								At ETM Foundation, we believe that true success starts with a
								shift in perspective.
							</li>
							<li className="list-disc ml-5">
								Discover how our programs can help you cultivate a mindset of
								growth, resilience, and unwavering belief in yourself.
							</li>
						</ul>

						<div className="w-full h-auto flex flex-col gap-3">
							{btnList.map((btn: BtnListTypes, index: number) => {
								return (
									<React.Fragment key={index}>
										<div className="w-full h-fit">
											<button
												onClick={() => handleDropdown(btn.currentBtn)}
												className={`styled-btn w-full ${
													btn.currentBtn !== currentDropdown &&
													"gray-styled-btn"
												}`}
											>
												{btn.title}
											</button>

											{btn.currentBtn === currentDropdown && (
												<div className="w-full h-fit py-3">
													{btn.description}
												</div>
											)}
										</div>
									</React.Fragment>
								);
							})}
						</div>
					</div>
				</div>

				<Section2B />
			</div>
		</>
	);
}
