"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React, { useEffect } from "react";

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
				"The ETMF Academy revolutionizes learning through emerging technologies, creating personalized, engaging, and accessible educational experiences",
		},
		{
			id: "2",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/j7eeazsk5lupdobivmf8",
			title: "Student Activity Program",
			description:
				"The Student Activity Program empowers student government leaders to create transformative change on their campuses.",
		},
		{
			id: "3",
			image:
				"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/uufwd8beiqsceq411qe8",
			title: "Access to Education Program",
			description:
				"Supporting undocumented and international students through comprehensive resources and support.",
		},
	];

	useEffect(() => {
		const animation = gsap.context(() => {
			gsap.to(".programs-child", {
				stagger: {
					each: 0.5,
				},
				opacity: 1,
				translateY: 0,
				scrollTrigger: {
					trigger: ".programs-container",
					start: "top 80%",
					end: "bottom bottom",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			});
		});

		return () => {
			animation.revert();
		};
	}, []);

	return (
		<>
			<h1 className="montserrat-bold text-5xl mr-auto">Our Programs</h1>

			<div className="w-full h-fit programs-container flex flex-col justify-center items-center gap-10">
				{programList.map((program: ProgramListTypes) => {
					return (
						<React.Fragment key={program.id}>
							<div className="programs-child opacity-0 -translate-y-20 flex w-full h-fit gap-10 bg-green-3 text-white rounded-xl">
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
										<h1 className="text-3xl montserrat-bold">
											{program.title}
										</h1>
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
			</div>
		</>
	);
}
