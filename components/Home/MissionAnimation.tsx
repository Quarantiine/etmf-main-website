"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MissionAnimationProps {
	children: React.ReactNode;
}

const MissionAnimation: React.FC<MissionAnimationProps> = ({ children }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		gsap.context(() => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						end: "bottom 20%",
						scrub: 0.5,
						toggleActions: "play none none reverse",
						// markers: true,
					},
				}
			);
		}, []);
	}, []);

	return (
		<div ref={containerRef} className="mission-animation-container">
			{children}
		</div>
	);
};

export default MissionAnimation;
