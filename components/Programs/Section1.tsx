"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Section1(): React.ReactElement {
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
			<div className="flex flex-col justify-center items-center gap-20 w-full h-fit border-b-[25px] border-[#4BF2C7] relative">
				<div className="placeholder-bg" />

				<Image
					className="object-cover inset-0 z-0"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/brjgvrkjyqpit2zn3hrg"
					}
					alt="image"
					fill
					priority={true}
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
					<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
						<h1 className="montserrat-bold text-4xl md:text-5xl">
							Department of Education
						</h1>

						<p>
							The Empowerment Through Mindset Foundation (ETMF) Department of
							Education is dedicated to empowering students, student leaders,
							staff, faculty, administration, and educational institutions
							through a varity of innovative programs. Each program is designed
							to address specific challenges within the educational ecosystem,
							harnessing cutting-edge approaches, resources, and community
							collaboration to foster transformative outcomes. Below is an
							overview of the five cornerstone programs that reflect ETMF’s
							commitment to education, innovation, empowerment, and inspiration.
						</p>

						{/* Colored dots for design purposes */}
						<div className="flex justify-start items-center gap-8">
							{/* Hidden on smaller screens, visible on larger screens */}
							<div className="colored-dots opacity-0 hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
							{/* Visible colored dots */}
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
