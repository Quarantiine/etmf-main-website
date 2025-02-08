"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

export const Section1 = () => {
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
						"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/de3ardfsy5pcbijglqlg"
					}
					alt="image"
					fill
					priority={true}
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white z-10">
					<div className="default-width py-10 sm:py-16 h-auto flex flex-col justify-center items-start gap-4">
						<h1 className="montserrat-bold text-4xl md:text-5xl">Contact Us</h1>
						<p>
							{
								"We're here to support your journey towards personal growth, empowerment, and community development. Whether you have questions, want to volunteer, propose a partnership, or need assistance, we're eager to hear from you."
							}
						</p>

						<div className="flex justify-start items-center gap-8">
							<div className="colored-dots opacity-0 hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
							<div className="colored-dots opacity-0 rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
