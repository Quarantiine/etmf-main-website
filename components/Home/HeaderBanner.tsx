"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import NavigationBar from "../NavigationBar/NavigationBar";

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
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Headshots/grro5vpbuz9kf5ec7cqk",
		},
		{
			title: "Education",
			description:
				"Education as Transformation: Education shapes futures, fosters growth, and drives societal change.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/v1737404162/Screenshot_20241218-111200_fzibf6.png",
		},
		{
			title: "Innovation",
			description:
				"Innovation in Education: We push educational boundaries with AI, VR, and emerging tech.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Header%20Section/lzykqzfcjgqo5tnrpsan",
		},
		{
			title: "Empowerment",
			description:
				"Empowerment Through Support: We provide resources and programs to remove barriers, fostering self-reliance and change.",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/Header%20Section/iqsl27ytbbvlgm4xvpdh",
		},
	];

	return (
		<>
			<div className="w-full h-full relative flex flex-col bg-[#111] z-50 bg-scroll">
				<NavigationBar />

				<div className="w-full mx-auto h-[800px] flex flex-col justify-center items-center">
					<div className="flex-col justify-center items-center relative bg-[#000] gap-5 w-full h-full">
						<div className="flex-col justify-start items-center relative bg-[#000] overflow-hidden default-overflow-x overflow-x-auto overflow-y-hidden h-full grid grid-flow-col auto-cols-[100%] gap-5">
							{slideItems
								.filter((_, index) => index === slideSection)
								.map((item: SlideItemProps, index) => {
									return (
										<React.Fragment key={index}>
											<div className="relative w-full h-full overflow-hidden flex flex-col">
												<Image
													className="header-section-image object-cover object-bottom sm:object-center"
													src={item.image}
													alt="images"
													fill
													sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>

												<div className="w-full h-full bg-gradient-to-t from-[#000] via-[#0000009a] to-[transparent] absolute bottom-0 left-0 flex flex-col justify-end items-start text-white p-5 sm:p-10 gap-5">
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
			<div className="flex flex-row justify-center items-center gap-5 w-full py-5 bg-black">
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
