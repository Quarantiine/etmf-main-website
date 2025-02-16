"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export default function Section1(): JSX.Element {
	useEffect(() => {
		gsap.to(".colored-dots", {
			opacity: 1,
			stagger: {
				each: 0.1,
			},
		});
	}, []);

	return (
		<>
			<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
				<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
					<h1 className="montserrat-bold text-5xl">
						Ways to Support Our Mission
					</h1>
					<p>
						{
							"ETMF offers multiple ways to get involved, including donations, sponsorships, partnerships, volunteering, and spreading awareness through social media or testimonials."
						}
					</p>

					{/* Colored dots for design purposes */}
					<div className="flex justify-start items-center gap-8">
						{/* Hidden on smaller screens, visible on larger screens */}
						<div className="colored-dots opacity-0 hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
						{/* Visible colored dots */}
						<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
						<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
						<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
						<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
					</div>
				</div>
			</div>
		</>
	);
}
