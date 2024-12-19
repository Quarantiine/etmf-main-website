import React from "react";
import termsConditions from "@/data/termsConditions.json";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import TableOfContents from "@/components/Legal/TableOfContents";
export const metadata: Metadata = {
	title: "Terms & Conditions",
	description:
		"Explore how ETMF outlines the rules and regulations for using the ETMF website, including interacting with its features, content, and AI assistant.",
};

interface TermsTypes {
	title?: string;
	description?: DescriptionType[];
	points?: PointType[];
}

interface DescriptionType {
	text?: string;
}

interface PointType {
	textHeader?: string;
	text?: string;
}

export default function TermsNConditions(): React.ReactElement {
	return (
		<>
			<main className="default-width mx-auto py-20 flex flex-col gap-10">
				<div className="flex flex-col md:flex-row gap-2 w-full justify-center md:justify-between items-center text-center sm:text-start">
					<Image
						className="object-cover w-auto h-[90px] block md:hidden"
						src={"/etm_foundation_logo.png"}
						alt="logo"
						width={100}
						height={100}
					/>

					<div className="flex flex-col gap-3 w-full">
						<h1 className="montserrat-bold text-4xl sm:text-5xl">
							Terms & Conditions
						</h1>

						<div className="flex flex-col w-full">
							<p>
								<span className="lato-bold">Effective Date:</span> 11/2/2024
							</p>
							<p>
								<span className="lato-bold">Last Updated:</span> 12/19/2024
							</p>
						</div>
					</div>

					<Image
						className="object-cover w-auto h-[90px] hidden md:block"
						src={"/etm_foundation_logo.png"}
						alt="logo"
						width={100}
						height={100}
					/>
				</div>

				<TableOfContents legalDocuments={termsConditions} />

				<div className="flex flex-col gap-10 w-full">
					{termsConditions.map((terms: TermsTypes, index: number) => {
						return <TermsComponent key={index} terms={terms} />;
					})}
				</div>

				<div className="flex flex-col gap-1">
					<h3 className="montserrat-bold">For more legal information:</h3>
					<Link
						href={"/privacypolicy"}
						className="text-green-3 w-fit no-style-btn"
					>
						Privacy Policy
					</Link>
				</div>
			</main>
		</>
	);
}

const TermsComponent = ({ terms }: { terms: TermsTypes }) => {
	const sanitizedTitle = terms.title?.replace(/\s+/g, "-").toLowerCase();

	return (
		<>
			<div id={sanitizedTitle} className="w-full h-auto flex flex-col gap-3">
				<h2 className="text-3xl montserrat-bold text-gray-600">
					{terms.title}
				</h2>

				{terms.description?.map(
					(description: DescriptionType, index: number) => {
						return (
							<React.Fragment key={index}>
								<p>{description.text}</p>
							</React.Fragment>
						);
					}
				)}

				{terms.points?.map((point: PointType, index: number) => {
					return (
						point.text && (
							<ul
								key={index}
								className="flex flex-col w-full h-auto gap-3 pl-5"
							>
								<li className="list-disc gap-2">
									<h3 className="lato-bold">{point.textHeader}</h3>
									<p>{point.text}</p>
								</li>
							</ul>
						)
					);
				})}
			</div>
		</>
	);
};
