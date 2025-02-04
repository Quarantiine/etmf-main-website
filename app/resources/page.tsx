import { ResourceFeaturedArticles } from "@/components/Resources/ResourceFeaturedArticles";
import { ResourceHeader } from "@/components/Resources/ResourceHeader";
import { Metadata } from "next";
import React from "react";
import { MoreResources } from "@/components/Resources/MoreResources";

export const metadata: Metadata = {
	title: "Resources",
	description: "",
};

export default function page(): React.ReactElement {
	return (
		<div className="w-full flex flex-col justify-center items-center pb-20 gap-12">
			<ResourceHeader />

			<div className="default-width mx-auto flex flex-col justify-center items-center gap-24 pt-16">
				<ResourceFeaturedArticles />
				<MoreResources />
			</div>
		</div>
	);
}
