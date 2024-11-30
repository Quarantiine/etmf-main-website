import ProgramsTab from "@/components/Programs/ProgramsTab";
import Section1 from "@/components/Programs/Section1";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Programs",
	description:
		"ETMF's Department of Education offers innovative programs that foster a growth mindset and develop essential skills for student success and workforce readiness. Explore our transformative programs and empower the next generation.",
};

export default function Programs(): React.ReactElement {
	return (
		<>
			<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
				<Section1 />

				<ProgramsTab />
			</main>
		</>
	);
}
