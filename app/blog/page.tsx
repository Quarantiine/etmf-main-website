import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import blogData from "@/data/blogData.json";
import { ResourcesContent } from "@/components/Blog/ResourcesContent";
import Section1 from "@/components/Blog/Section1";
import { BlogResourcesTypes } from "../../lib/types";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Explore how the ETM Foundation is impacting students’ lives and enriching communities. Discover our latest advanced technology developments, initiatives, and much more.",
};

export default function Blog(): React.ReactElement {
	return (
		<>
			<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
				{/* Header section with background image and title */}
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

					<Section1 />
				</div>

				{/* Resources section */}
				<div className="flex flex-col gap-20 pb-20 w-full h-auto justify-center items-center">
					{blogData.map((resource: BlogResourcesTypes, index: number) => {
						return <ResourcesContent key={index} resource={resource} />;
					})}
				</div>
			</main>
		</>
	);
}
