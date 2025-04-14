import ActionSection from "@/components/Home/ActionSection";
import FeaturingSection from "@/components/Home/FeaturingSection";
import Section2 from "@/components/Home/Section2";
import Section4 from "@/components/Home/Section4";
import type { Metadata } from "next/types";
import React from "react";
import HeaderBanner from "@/components/Home/HeaderBanner";
import Link from "next/link";
import WelcomeSectionAnimation from "@/components/Home/WelcomeSectionAnimation";

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

				<WelcomeSectionAnimation>
					{/* Welcome section */}
					<div className="default-width mx-auto flex flex-col justify-center items-center text-center pb-10 relative h-fit bg-white gap-5 px-0">
						<div className="flex flex-col justify-center items-center pt-10">
							<h3 className="text-base lato-bold text-gray-500">WELCOME TO</h3>
							<h1 className="text-4xl sm:text-6xl lato-bold text-[#222]">
								Empowerment Through Mindset Foundation
							</h1>
						</div>

						<div className="flex flex-col justify-center items-center gap-5">
							<p className="text-lg lg:text-xl text-[#222]">
								We are committed to curating learning experiences programs and
								initiatives designed to empower students, educators, educational
								institutions and communities to reach their full potential.
							</p>
						</div>

						<Link className="styled-btn" href={"/aboutus"}>
							Who Are We?
						</Link>
					</div>
				</WelcomeSectionAnimation>

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
