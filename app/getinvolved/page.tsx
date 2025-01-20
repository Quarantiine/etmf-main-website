import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import gettingInvolvedData from "@/data/gettingInvolvedData.json";
import Section1 from "@/components/GetInvolved/Section1";
import SectionComponent from "@/components/GetInvolved/SectionComponent";

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

					<Section1 />
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
