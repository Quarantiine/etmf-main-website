"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProgramListTypes {
	id: string;
	title: string;
	image: string;
	description: string;
}

export default function Section4(): React.ReactElement {
	const programList: ProgramListTypes[] = [
		{
			id: "1",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/skvvhvujsv6srilfyg2o",
			title: "ETMF Academy",
			description:
				"ETMF Academy: Our technology-driven learning platform utilizes AI, VR, and personalized learning pathways. Programs include: Entrepreneurship & Innovation Student Government Leadership Professional Development Academic Excellence Empowerment for Historically Marginalized Communities",
		},
		{
			id: "2",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/j7eeazsk5lupdobivmf8",
			title: "Student Activity Program",
			description:
				"The Student Activity Program empowers student governments to effectively govern student activity through funding, data analytics training and education on how to design and implement engaging, student-led initiatives that provides value and drives student engagement.",
		},
		{
			id: "3",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/uufwd8beiqsceq411qe8",
			title: "Access to Education Program",
			description:
				"The Access to Education Program removes financial and systematic barriers to education for international, undocumented, underrepresented and under resourced students allowing them to maintain access to education.",
		},
	];

	return (
		<>
			<h1 className="montserrat-bold text-5xl mr-auto">Our Programs</h1>

			{programList.map((program: ProgramListTypes) => {
				return (
					<React.Fragment key={program.id}>
						<div className="flex w-full h-fit gap-10 bg-green-3 text-white rounded-xl">
							<div className="w-full h-auto rounded-xl relative overflow-hidden flex flex-row">
								<div className="w-full h-full relative hidden sm:flex">
									<div className="placeholder-bg w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
										<div className="spinner" />
									</div>

									<Image
										className="w-auto object-cover"
										src={program.image}
										alt="image"
										fill
										sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>

								<div className="w-full h-full flex flex-col gap-5 z-10 justify-start items-start p-10">
									<h1 className="text-3xl montserrat-bold">{program.title}</h1>
									<p className="">{program.description}</p>

									<div className="flex flex-col gap-2 w-full h-fit mt-auto text-center">
										<Link
											href={`/programs/${program.id}`}
											className="styled-btn w-full"
										>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
				);
			})}
		</>
	);
}
