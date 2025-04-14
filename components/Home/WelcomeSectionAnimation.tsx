"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WelcomeSectionAnimationProps {
	children: React.ReactNode;
}

const WelcomeSectionAnimation: React.FC<WelcomeSectionAnimationProps> = ({
	children,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = containerRef.current; // Store the current value in a variable
		if (!el) return; // Exit if el is null

		gsap.context(() => {
			gsap.fromTo(
				el, // Use the stored variable
				{
					opacity: 0,
					y: 50,
					scale: 0.8,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.5,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el, // Use the stored variable
						start: "top 80%",
						end: "bottom 20%",
						scrub: 0.5,
						toggleActions: "play none none reverse",
					},
				}
			);
		}, []);
	}, []);

	return (
		<div className="gsap-animation-container" ref={containerRef}>
			{children}
		</div>
	);
};

export default WelcomeSectionAnimation;
