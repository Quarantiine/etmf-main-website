"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Section2B from "./Section2B";

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
				"Our Department of Education empowers students, faculty, staff, administration, and educational institutions through innovative programs and initiatives designed to revolutionize learning and foster student empowerment.",
			currentBtn: "btn1",
		},
		{
			title: "Technology and Innovation",
			description:
				"The Technology & Innovation Department leverages emerging technologies to create innovative solutions in education, revolutionizing the way people learn through  cutting-edge educational tools.",
			currentBtn: "btn4",
		},
		{
			title: "Community Engagement",
			description:
				"Our Community Engagement Department partners with community organizations, legislators, and leaders to create transformative programs designed to empower communities and drive positive change.",
			currentBtn: "btn2",
		},
		{
			title: "Operations and Finance",
			description:
				"Our Operations and Finance teams ensure the sustainable growth and efficient management of our initiatives, maintaining transparency and accountability in all our endeavors.",
			currentBtn: "btn3",
		},
	];

	const [currentDropdown, setCurrentDropdown] = useState("btn1");
	const shadowRef = useRef(null);

	const handleDropdown = (currentBtn: string) => {
		setCurrentDropdown(currentBtn);
	};

	return (
		<>
			<div className="flex flex-col gap-20 md:gap-0 w-full h-fit">
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

							<div
								ref={shadowRef}
								className="shadow-[0px_0px_200px_200px_rgba(255,215,0,1)] bg-yellow w-30 h-30 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1]"
							></div>
						</div>
					</>

					<div className="default-width xl:w-[500px] h-auto md:pr-10 mx-auto flex flex-col justify-center items-start gap-10">
						<h1 className="montserrat-bold text-5xl">Our Mission</h1>
						<ul className="flex flex-col gap-4 list-disc ml-5">
							<li>
								Revolutionize education by redefining learning methods and
								transforming communities through the power of education and
								innovation.
							</li>
							<li>Inspire empowerment through mindset changes.</li>
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
