"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface SlideItemProps {
	title: string;
	description: string;
	image: string;
}

export default function HeaderBanner(): React.ReactElement {
	const [slideSection, setSlideSection] = useState<number>(0);
	const [slideBtn, setSlideBtn] = useState<boolean>(false);

	const slideItems = [
		{
			title: "Inspiration",
			description:
				"Inspiration for Empowerment: We inspire action, belief in potential, and a culture of hope.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/v1734609885/Headshots/mokanqopnrfpglrbsfza.jpg",
		},
		{
			title: "Education",
			description:
				"Education as Transformation: Education shapes futures, fosters growth, and drives societal change.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/v1737348741/Screenshot_20241218-145138_1_op3ya8.png",
		},
		{
			title: "Innovation",
			description:
				"Innovation in Education: We push educational boundaries with AI, VR, and emerging tech.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/v1737348957/PXL_20241017_210020220.MP_uzfgny.jpg",
		},
		{
			title: "Empowerment",
			description:
				"Empowerment Through Support: We provide resources and programs to remove barriers, fostering self-reliance and change.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/v1737351361/PXL_20250118_174218142.MP_q0qljw.jpg",
		},
	];

	useEffect(() => {
		gsap.to(".header-section-image", {
			scrollTrigger: {
				trigger: ".header-section",
				start: "top 0%",
				end: "20% 0%",
				scrub: 1,
			},

			height: "800px",
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!slideBtn) {
				setSlideSection((prevSection) => (prevSection + 1) % slideItems.length);
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [slideItems.length, slideBtn]);

	return (
		<>
			<div className="header-section w-full h-full relative flex flex-col bg-white z-50 rounded-3xl shadow-[10px_10px_40px_0px_rgba(0,0,0,0.1)]">
				<div className="w-[97%] sm:w-[90%] mx-auto h-[1100px] flex flex-col justify-center items-center lg:px-10 pb-10 md:py-10">
					<div className="flex-col justify-center items-center relative bg-[#222] rounded-3xl gap-5 w-full h-full">
						<div className="flex-col justify-start items-center relative bg-[#222] overflow-hidden rounded-3xl default-overflow-x overflow-x-auto overflow-y-hidden h-full grid grid-flow-col auto-cols-[100%] gap-5">
							{slideItems
								.filter((_, index) => index === slideSection)
								.map((item: SlideItemProps, index) => {
									return (
										<React.Fragment key={index}>
											<div className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col">
												<Image
													className="header-section-image object-cover object-bottom sm:object-center rounded-3xl"
													src={item.image}
													alt="images"
													fill
													sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>

												<div className="w-full h-full bg-gradient-to-t from-[#222] via-[#222222de] to-[transparent] absolute bottom-0 left-0 flex flex-col justify-end items-start text-white p-5 sm:p-10 gap-5">
													<div className="flex flex-col gap-2 w-full">
														<h1 className="text-2xl sm:text-4xl lato-bold">
															{item.title}
														</h1>
														<p className="text-lg">{item.description}</p>
													</div>
												</div>
											</div>
										</React.Fragment>
									);
								})}
						</div>
					</div>

					<ButtonControls
						slideItems={slideItems}
						slideSection={slideSection}
						setSlideSection={setSlideSection}
						slideBtn={slideBtn}
						setSlideBtn={setSlideBtn}
					/>

					<div className="default-width flex flex-col justify-center items-start relative h-fit bg-white gap-5 px-10 lg:px-0">
						<div className="flex flex-col justify-start items-start pt-10">
							<h3 className="text-base lato-bold text-gray-500">WELCOME TO</h3>
							<h1 className="text-4xl sm:text-6xl lato-bold text-[#222]">
								Empowerment Through Mindset Foundation
							</h1>
						</div>

						<div className="flex flex-col justify-start items-start gap-5">
							<p className="text-lg lg:text-xl text-[#222]">
								ETMF is building the future of education—a world where learning
								is infused with innovation, powered by technology, and made
								engaging through impactful content.
							</p>
							<p className="text-lg lg:text-xl text-[#222]">
								We empower students, employees, communities and individuals to
								reach their full potential, and create pathways for
								extraordinary success.
							</p>
						</div>

						<Link className="styled-btn" href={"/aboutus"}>
							Learn About Us
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

const ButtonControls = ({
	slideItems,
	slideSection,
	setSlideSection,
	setSlideBtn,
}: {
	slideItems: SlideItemProps[];
	slideSection: number;
	setSlideSection: React.Dispatch<React.SetStateAction<number>>;
	slideBtn: boolean;
	setSlideBtn: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
	const slideBtnRef = useRef<NodeJS.Timeout | undefined>(undefined);

	const handleSlideSection = (index: number) => {
		setSlideBtn(true);

		if (slideBtnRef.current) {
			slideBtnRef.current = setTimeout(() => {
				setSlideBtn(false);
			}, 5000);
		}

		setSlideSection(index);
	};

	return (
		<>
			<div className="flex flex-row justify-center items-center gap-5 w-full pt-5">
				{slideItems.map((_, index) => {
					return (
						<React.Fragment key={index}>
							{slideSection === index ? (
								<div
									className={`rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1`}
								/>
							) : (
								<button
									onClick={() => handleSlideSection(index)}
									className="no-style-btn rounded-full min-w-3 min-h-3 max-w-3 max-h-3 bg-gray-600"
								/>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</>
	);
};
