// Importing necessary components and types
import ActionSection from "@/components/Home/ActionSection";
import FeaturingSection from "@/components/Home/FeaturingSection";
// import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
// import { Section3 } from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import type { Metadata } from "next";
import React from "react";
import HeaderBanner from "@/components/Home/HeaderBanner";

// Metadata object for the page, includes title and description for SEO and display purposes
export const metadata: Metadata = {
	title: "Home | Empowerment Through Mindset Foundation | Nonprofit",
	description:
		"Explore the ETM Foundation ecosystem to discover our offerings and learn more about our mission, impact, programs, and much more.",
};

// Home component which renders the main sections of the homepage
export default function Home(): React.ReactElement {
	return (
		<>
			{/* Main container for the homepage sections */}
			<div className="flex flex-col gap-20 h-auto w-full">
				{/* Header banner section */}
				<HeaderBanner />

				{/* Featuring section */}
				<div className="flex flex-row gap-5 default-width mx-auto">
					<FeaturingSection />
				</div>

				{/* Section 2 */}
				<div className="flex flex-row gap-5 w-full mx-auto">
					<Section2 />
				</div>

				{/* Section 3 */}
				{/* <div className="flex justify-center items-center gap-5 w-full mx-auto">
					<Section3 />
				</div> */}

				{/* Section 4 */}
				<div className="flex flex-col gap-10 default-width mx-auto">
					<Section4 />
				</div>

				{/* Action section */}
				<ActionSection />
			</div>
		</>
	);
}
