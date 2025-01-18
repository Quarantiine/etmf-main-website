"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeaderBanner(): React.ReactElement {
	useEffect(() => {
		gsap.to(".a", {
			x: 400,
			rotate: 360,
			duration: 3,
		});
	}, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full h-screen bg-green-800 pb-36 px-10 pt-10 shadow-2xl">
				<div className="a w-32 h-32 bg-white rounded-xl"></div>
			</div>
		</>
	);
}
