import React from "react";
import privacypolicy from "@/data/privacyPolicy.json";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import TableOfContents from "@/components/Legal/TableOfContents";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Your data is important to us. Discover how we handle your information and the measures we’re taking to ensure its protection.",
};

interface PolicyTypes {
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

export default function PrivacyPolicy(): React.ReactElement {
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
							Privacy Policy
						</h1>

						<div className="flex flex-col w-full">
							<p>
								<span className="lato-bold">Effective Date:</span> Feb 7, 2025
							</p>
							<p>
								<span className="lato-bold">Last Updated:</span> Feb 7, 2025
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

				<TableOfContents legalDocuments={privacypolicy} />

				<div className="flex flex-col gap-10 w-full">
					{privacypolicy.map((policy: PolicyTypes, index: number) => {
						return <PolicyComponent key={index} policy={policy} />;
					})}
				</div>

				<div className="flex flex-col gap-1">
					<h3 className="montserrat-bold">For more legal information:</h3>
					<Link href={"/terms"} className="text-green-3 w-fit no-style-btn">
						Terms & Conditions
					</Link>
				</div>
			</main>
		</>
	);
}

const PolicyComponent = ({ policy }: { policy: PolicyTypes }) => {
	const sanitizedTitle = policy.title?.replace(/\s+/g, "-").toLowerCase();

	return (
		<>
			<div className="w-full h-auto flex flex-col gap-3" id={sanitizedTitle}>
				<h2 className="text-3xl montserrat-bold text-gray-600">
					{policy.title}
				</h2>

				{policy.description?.map(
					(description: DescriptionType, index: number) => {
						return (
							<React.Fragment key={index}>
								<p>{description.text}</p>
							</React.Fragment>
						);
					}
				)}

				{policy.points?.map((point: PointType, index: number) => {
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
