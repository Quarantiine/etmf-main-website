"use client";

import React, { useEffect, useRef } from "react";

export const ResourceHeader = () => {
	const gradientRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let start = 0;
		const colors = ["#07f49e", "#104030", "#0B7955"];
		const speed = 0.005; // Adjust the speed for smoother animation

		const animateGradient = () => {
			start += speed;
			const gradient = `radial-gradient(circle, ${colors
				.map((color, index) => {
					const angle =
						(start + (index * (Math.PI * 2)) / colors.length) % (Math.PI * 2);
					const offset = Math.sin(angle) * 50 + 50;
					return `${color} ${offset}%`;
				})
				.join(", ")})`;

			if (gradientRef.current) {
				gradientRef.current.style.background = gradient;
			}

			requestAnimationFrame(animateGradient);
		};

		animateGradient();
	}, []);

	return (
		<>
			<div
				ref={gradientRef}
				className="flex justify-center items-start w-full h-fit"
				style={{
					background: "radial-gradient(circle, #07f49e, #104030, #0B7955)",
				}}
			>
				<div className="default-width flex flex-col justify-center items-center gap-5 w-full text-center bg-white rounded-xl p-12 relative top-12">
					<h1 className="title-1 font-bold">Resources That Empower</h1>

					<p>
						{
							"Welcome to our Resource Hub at the Empowerment Through Mindset Foundation (ETMF), where we believe in empowering individuals to achieve their fullest potential through knowledge and mindset transformation. Here, you'll find a curated collection of articles designed to enlighten, educate, and inspire."
						}
					</p>
				</div>
			</div>
		</>
	);
};
