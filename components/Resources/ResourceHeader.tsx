"use client";

import React, { useEffect, useRef } from "react";

export const ResourceHeader = () => {
	const gradientRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const getAnimatedGradient = () => {
			return `linear-gradient(-270deg, ${"#0B7955"}, ${"#07f49e"}, ${"#0B7955"})`;
		};

		const gradientInterval: NodeJS.Timeout = setInterval(() => {
			const animatedGradient = `background: ${getAnimatedGradient()}; background-size: 200% 200%; animation: gradientAnimation 15s ease infinite;`;

			const element = gradientRef.current;
			if (element) {
				element.setAttribute("style", animatedGradient);
			}
		}, 1);

		return () => clearInterval(gradientInterval);
	}, []);

	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = `
				@keyframes gradientAnimation {
					0% { background-position: 100% 50%; }
					50% { background-position: 0% 0%; }
					100% { background-position: 100% 50%; }
				}
			`;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<>
			<div
				ref={gradientRef}
				className="flex justify-center items-start w-full h-fit"
				style={{
					background: "linear-gradient(circle, #07f49e, #104030, #0B7955)",
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
