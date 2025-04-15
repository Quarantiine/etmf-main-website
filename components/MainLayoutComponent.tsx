"use client";

import ActionSection from "@/components/Home/ActionSection";
import FeaturingSection from "@/components/Home/FeaturingSection";
import Section2 from "@/components/Home/Section2";
import Section4 from "@/components/Home/Section4";
import React, { useEffect, useRef } from "react";
import HeaderBanner from "@/components/Home/HeaderBanner";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const MainLayoutComponent = () => {
	const headerRef = useRef(null);
	const welcomeRef = useRef(null);
	const featuringRef = useRef(null);
	const section2Ref = useRef(null);
	const section4Ref = useRef(null);
	const actionRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headerRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: welcomeRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: featuringRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: section2Ref.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		const tl5 = gsap.timeline({
			scrollTrigger: {
				trigger: section4Ref.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		const tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: actionRef.current,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl.fromTo(
			headerRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);

		tl2.fromTo(
			welcomeRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);

		tl3.fromTo(
			featuringRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);

		tl4.fromTo(
			section2Ref.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);

		tl5.fromTo(
			section4Ref.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);

		tl6.fromTo(
			actionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 }
		);
	}, []);

	return (
		<div className="flex flex-col gap-20 h-auto w-full justify-center items-center">
			<div className="w-full mx-auto" ref={headerRef}>
				{/* Header banner section */}
				<HeaderBanner />
			</div>

			{/* Welcome section */}
			<div
				ref={welcomeRef}
				className="default-width mx-auto flex flex-col justify-center items-center text-center pb-10 relative h-fit bg-white gap-5 px-0"
			>
				<div className="flex flex-col justify-center items-center pt-10">
					<h3 className="text-base lato-bold text-gray-500">WELCOME TO</h3>
					<h1 className="text-4xl sm:text-6xl lato-bold text-[#222]">
						Empowerment Through Mindset Foundation
					</h1>
				</div>

				<div className="flex zflex-col justify-center items-center gap-5">
					<p className="text-lg lg:text-xl text-[#222]">
						We are committed to curating learning experiences programs and
						initiatives designed to empower students, educators, educational
						institutions and communities to reach their full potential.
					</p>
				</div>

				<Link className="styled-btn" href={"/aboutus"}>
					Who Are We?
				</Link>
			</div>

			<div
				className="w-full mx-auto flex justify-center items-center"
				ref={featuringRef}
			>
				{/* Featuring section */}
				<FeaturingSection />
			</div>

			<div ref={section2Ref} className="flex flex-row gap-5 w-full mx-auto">
				{/* Section 2 */}
				<Section2 />
			</div>

			<div
				ref={section4Ref}
				className="flex flex-col gap-10 default-width mx-auto"
			>
				{/* Section 4 */}
				<Section4 />
			</div>

			<div className="w-full mx-auto" ref={actionRef}>
				{/* Action section */}
				<ActionSection />
			</div>
		</div>
	);
};
