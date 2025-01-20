"use client";

import Image from "next/image";
import React from "react";
import programList from "@/data/programList.json";
import Link from "next/link";

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

export default function ProgramsTab(): React.ReactElement {
	return (
		<>
			<div className="statement-sections-2 default-width flex flex-col gap-5 mx-auto">
				<div className="flex flex-col sm:grid sm:grid-cols-2 text-white relative gap-10 justify-center sm:justify-start items-center w-full pb-20">
					{programList.map((program: ProgramListTypes) => {
						return (
							<React.Fragment key={program.id}>
								<Link
									href={`/programs/${program.id}`}
									className="no-style-btn flex flex-col relative rounded-xl w-full h-72 sm:h-96 overflow-hidden"
								>
									<div className="placeholder-bg flex justify-center items-center">
										<div className="spinner" />
									</div>

									<Image
										className="object-cover inset-0 z-0"
										src={program.image}
										alt="image"
										fill
										sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>

									<div className="w-full h-full p-5 flex flex-col justify-end items-start text-start gap-4 bg-[rgba(0,0,0,0.4)] z-10 relative">
										<h1 className="montserrat-bold text-3xl">
											{program.title}
										</h1>
									</div>
								</Link>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
}
