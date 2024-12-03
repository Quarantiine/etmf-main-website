import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import resourcesData from "@/data/resourcesData.json";
import { ResourcesContent } from "@/components/Resources/ResourcesContent";

export const metadata: Metadata = {
	title: "Resources",
	description:
		"Explore how the ETM Foundation is impacting students’ lives and enriching communities. Discover our latest advanced technology developments, initiatives, and much more.",
};

interface ResourcesTypes {
	title: string;
	subTitle: string;
	link: string;
	enableBg: boolean;
	content: {
		title: string;
		image: string;
		imageCollage: {
			src: string;
		}[];
		link: string;
		mediaType: string;
	}[];
}

export default function Resources(): React.ReactElement {
	return (
		<>
			<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
				<div className="flex flex-col justify-center items-center gap-20 w-full h-fit border-b-[25px] border-[#4BF2C7] relative">
					<div className="placeholder-bg" />

					<Image
						className="object-cover inset-0 z-0"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/qj7uohlcpyay3fmd11hb"
						}
						alt="image"
						fill
						priority={true}
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
						<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
							<h1 className="montserrat-bold text-5xl">Resoures</h1>
							<p>
								{
									"The resource page keeps you updated on ETM Foundation's latest activities, featuring diverse media formats to foster a vibrant, engaged, and empowered community."
								}
							</p>

							{/* Colored dots for design purposes */}
							<div className="flex justify-start items-center gap-8">
								{/* Hidden on smaller screens, visible on larger screens */}
								<div className="hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
								{/* Visible colored dots */}
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
								<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-20 pb-20 w-full h-auto justify-center items-center">
					{resourcesData.map((resource: ResourcesTypes, index: number) => {
						return <ResourcesContent key={index} resource={resource} />;
					})}
				</div>
			</main>
		</>
	);
}
