"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface ShortsTypes {
	src: string;
	title: string;
}

export default function Shorts({
	short,
}: {
	short: ShortsTypes;
}): React.ReactElement {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [showPauseButton, setShowPauseButton] = useState<boolean>(false);
	const [hasEnded, setHasEnded] = useState<boolean>(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const togglePlay = (): void => {
		if (isPlaying) {
			videoRef.current?.pause();
		} else {
			setHasEnded(false);
			videoRef.current?.play();
		}

		setIsPlaying(!isPlaying);
	};

	const handleShowPauseButton = () => {
		setShowPauseButton(true);
	};

	const handleHidePauseButton = () => {
		setShowPauseButton(false);
	};

	const handleVideoEnded = () => {
		setIsPlaying(false);
		setHasEnded(true);
	};

	const handleRestartVideo = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
			setIsPlaying(true);
			setHasEnded(false);
		}
	};

	return (
		<>
			<div className="default-overflow-x-child relative w-full h-fit mx-auto rounded-2xl overflow-hidden">
				<div className="bg-gray-700 absolute top-0 left-0 w-full h-full rounded-2xl flex flex-col gap-2 justify-center items-center">
					<Image
						className="object-cover w-auto h-[40px] no-style-btn grayscale opacity-50"
						src="/etm_foundation_logo.png"
						alt="logo"
						width={50}
						height={50}
						priority={true}
					/>
					<p className="text-gray-400">Play Video</p>
				</div>

				<div className="relative w-full h-full rounded-2xl flex flex-col justify-center">
					<video
						className="w-full h-full"
						ref={videoRef}
						onMouseOver={handleShowPauseButton}
						onMouseLeave={handleHidePauseButton}
						onEnded={handleVideoEnded}
					>
						<source src={short.src} type="video/mp4" />
						<source src={short.src} type="video/webm" />
						<source src={short.src} type="video/ogg" />
						Your browser does not support the video tag.
					</video>

					<div
						onMouseOver={handleShowPauseButton}
						onMouseLeave={handleHidePauseButton}
						className="absolute bottom-0 right-0 w-full h-fit bg-gradient-to-t from-[rgba(0,0,0,1)] to-transparent flex flex-col justify-end items-start px-4 pt-10 pb-4 rounded-2xl text-start"
					>
						<h1 className="text-xl lato-bold text-white">{short.title}</h1>
					</div>
				</div>

				{showPauseButton && (
					<div
						onMouseLeave={handleHidePauseButton}
						onMouseOver={handleShowPauseButton}
						className="flex flex-row gap-2 justify-center items-center w-full h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					>
						{hasEnded === false && (
							<button
								onClick={togglePlay}
								className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
							>
								{isPlaying ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										className="w-8 h-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.75 6.75v10.5m4.5-10.5v10.5"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										className="w-8 h-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7.5 5.75v12.5l10.5-6.25L7.5 5.75z"
										/>
									</svg>
								)}
							</button>
						)}

						<button
							onClick={handleRestartVideo}
							className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all p-3"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="48px"
								viewBox="0 -960 960 960"
								width="48px"
								fill="#fff"
							>
								<path d="M480.11-55Q401-55 331.03-85.1q-69.98-30.1-121.81-81.56-51.83-51.45-81.53-120.54Q98-356.28 98-437h91q0 121.99 84.8 205.99Q358.6-147 480-147q120.99 0 205.49-84.56Q770-316.12 770-437.18q0-121.81-81.92-205.81Q606.15-727 484-727h-24l68 67-48 48-163-164 163-162 48 48-73 71h24q79.38 0 149.44 30.02 70.07 30.01 121.8 81.74 51.73 51.73 81.74 121.43Q862-516.1 862-437.14q0 78.97-29.8 148.7-29.79 69.73-81.8 121.77-52 52.04-121.68 81.85Q559.05-55 480.11-55Z" />
							</svg>
						</button>
					</div>
				)}
			</div>
		</>
	);
}
