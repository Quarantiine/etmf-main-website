import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import gettingInvolvedData from "@/data/gettingInvolvedData.json";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Get Involved",
	description:
		"Join the vibrant community of the ETM Foundation, where passionate individuals from diverse backgrounds unite in a shared vision of growth and success",
};

interface GettingInvolvedTypes {
	title: string;
	paragraphs: {
		textHeader: string;
		text: string;
	}[];
	link: string;
	linkText: string;
}

export default function GetInvolved(): React.ReactElement {
	return (
		<>
			<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
				<div className="flex flex-col justify-center items-center gap-20 w-full h-fit border-b-[25px] border-[#4BF2C7] relative">
					<div className="placeholder-bg" />

					<Image
						className="object-cover inset-0 z-0"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/jovxbjibhwkwve5umi7n"
						}
						alt="image"
						fill
						priority={true}
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
						<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
							<h1 className="montserrat-bold text-5xl">Getting Involved</h1>
							<p>
								{
									"ETMF offers various ways for individuals and organizations to get involved, including direct and targeted donations, event sponsorship, partnerships with educational institutions, and volunteer opportunities in mentorship and event support. Additionally, spreading awareness through social media and personal testimonials can help amplify ETMF's mission and impact"
								}
							</p>

							{/* Colored dots for design purposes */}
							<div className="flex justify-start items-center gap-8">
								{/* Hidden on smaller screens, visible on larger screens */}
								<div className="hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
								{/* Visible colored dots */}
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
							</div>
						</div>
					</div>
				</div>

				<div className="default-width flex flex-col justify-center items-center">
					{gettingInvolvedData
						.slice(0, 4)
						.map((data: GettingInvolvedTypes, index: number) => {
							return <SectionComponent key={index} data={data} />;
						})}
				</div>
			</main>
		</>
	);
}

interface TextTypes {
	textHeader: string;
	text: string;
}

const SectionComponent = ({
	data,
}: {
	data: GettingInvolvedTypes;
}): JSX.Element => {
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
};
