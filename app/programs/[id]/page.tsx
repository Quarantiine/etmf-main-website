import ProgramPages from "@/components/Programs/ProgramPages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import programList from "@/data/programList.json";
import type { Metadata } from "next";
import Head from "next/head";

interface ProgramListTypes {
	id: string;
	title: string;
	subTitle: string;
	description: {
		text: string;
	}[];
	image: string;
	statementSection: {
		title: string;
		paragraphs: {
			textHeader: string;
			text: string;
		}[];
	}[];
}

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = (await params).id;

	const programTitle = programList
		.filter((value: ProgramListTypes) => value.id === id)
		.map((program: ProgramListTypes) => program.title)
		.toString();
	const programSubTitle = programList
		.filter((value: ProgramListTypes) => value.id === id)
		.map((program: ProgramListTypes) => program.subTitle)
		.toString();

	return {
		title: `${programTitle} | Programs`,
		description: `${programSubTitle}`,
	};
}

export default async function ProgramsPages({
	params,
}: Props): Promise<React.ReactElement> {
	const id = (await params).id;

	return (
		<>
			<Head>
				{programList
					.filter((value: ProgramListTypes) => value.id === id)
					.map((program: ProgramListTypes) => (
						<title key={program.id}>{program.title}</title>
					))}
			</Head>

			<div className="flex flex-col w-full h-auto justify-center items-center">
				<div className="default-width mx-auto pt-10 flex flex-col gap-10">
					<div className="w-full h-fit flex flex-col justify-center items-center">
						<div className="statement-sections-2 flex flex-col justify-center items-center gap-20 w-full">
							{programList
								.filter((value: ProgramListTypes) => value.id === id)
								.map((program: ProgramListTypes) => {
									return <ProgramPages key={program.id} program={program} />;
								})}
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full h-fit px-5 sm:px-10 py-10 bg-green-3 justify-center items-center text-white relative mt-auto">
					<Image
						className="object-cover inset-0 z-0 grayscale opacity-10"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/brjgvrkjyqpit2zn3hrg"
						}
						alt="image"
						fill
						sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="default-width flex flex-col gap-5 justify-center items-start z-10">
						<h1 className="montserrat-bold text-4xl sm:text-5xl">
							{"Curious about how we’ll bring our vision to life?"}
						</h1>

						<div className="flex flex-col gap-5 justify-center items-start">
							<p>
								Fill out the form below to connect with someone who can discuss
								how the ETM Foundation will achieve success in the initiatives
								we offer.
							</p>
						</div>

						<Link
							href={
								"https://docs.google.com/forms/d/e/1FAIpQLSeZb_o8MS1tGORx56L9JOsjj1TWx7uR3ocbGzOpUEF7eNFXJQ/viewform"
							}
							// href={"https://m06w1sq48mn.typeform.com/to/egR2Hgce"}
							className="styled-btn"
							target="_blank"
						>
							Meet a Person
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
