"use client";

import React, { useEffect } from "react";
import Shorts from "./Shorts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

interface ShortsTypes {
	src: string;
	title: string;
}

export default function Section2B(): React.ReactElement {
	const shortsList: ShortsTypes[] = [
		{
			src: "https://res.cloudinary.com/dnmdoncxt/video/upload/f_auto:video,q_auto/v1/Podcast/Shorts/zktfzrifc1sqs3expnxv",
			title: "Find Your Why",
		},
		{
			src: "https://res.cloudinary.com/dnmdoncxt/video/upload/f_auto:video,q_auto/v1/Podcast/Shorts/tucpwpoggfc5mqtsycbi",
			title: "Delayed Gratification",
		},
		{
			src: "https://res.cloudinary.com/dnmdoncxt/video/upload/f_auto:video,q_auto/v1/Podcast/Shorts/wsazlh3ynaed9iaoz9oj",
			title: "Empowering Future Leaders",
		},
		{
			src: "https://res.cloudinary.com/dnmdoncxt/video/upload/f_auto:video,q_auto/v1/Podcast/Shorts/rczra6fqtmlxtvyzeg9z",
			title: "Humor in Anything",
		},
	];

	useEffect(() => {
		const animation = gsap.context(() => {
			gsap.to(".short-videos", {
				stagger: {
					each: 0.5,
				},
				opacity: 1,
				translateY: 0,
				scrollTrigger: {
					trigger: ".short-videos-container",
					start: "top 80%",
					end: "80% 70%",
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
			<div className="bg-[#222] w-full mx-auto h-fit flex flex-col justify-center items-center text-white relative px-10 py-16 overflow-hidden">
				<div className="flex flex-col justify-center items-center w-full mx-auto gap-10 z-10 text-center">
					<h1 className="montserrat-bold text-4xl sm:text-5xl text-center">
						Student Empowerment
					</h1>

					<p>{`By fostering critical thinking, creativity, and leadership, we enable students to unlock their potential and drive meaningful change in their communities`}</p>

					<div className="short-videos-container default-overflow-x overflow-x-auto overflow-y-hidden w-full xl:w-auto h-full grid grid-flow-col auto-cols-[minmax(254px,3fr)] gap-10">
						{shortsList.map((short: ShortsTypes, index: number) => {
							return (
								<div
									className="short-videos opacity-0 -translate-y-20"
									key={index}
								>
									<Shorts short={short} />
								</div>
							);
						})}
					</div>

					<Link
						className="w-full sm:w-[200px] text-center styled-btn"
						href={"https://youtube.com/@ETMFoundation/shorts"}
						target="_blank"
					>
						View More
					</Link>
				</div>
			</div>
		</>
	);
}
