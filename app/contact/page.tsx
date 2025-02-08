import { ContactUsForm } from "@/components/ContactUs/ContactUsForm";
import { Section1 } from "@/components/ContactUs/Section1";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"We're here to support you on your journey towards personal growth, empowerment, and community development. Whether you have questions about our programs, wish to volunteer, propose a partnership, or need assistance, we're eager to hear from you.",
};

export default function ContactUs(): React.ReactElement {
	return (
		<>
			<main className="flex flex-col gap-20 w-full h-auto justify-center items-center">
				<Section1 />

				<div className="default-width gap-4 pt-5 pb-20 flex flex-col justify-center items-start">
					<h1 className="montserrat-bold text-4xl">Your Voice Matters</h1>

					<div className="grid grid-cols-[auto] lg:grid-cols-[65%_35%] justify-center items-start gap-5 relative h-full w-full">
						<ContactUsForm />
					</div>
				</div>
			</main>
		</>
	);
}
