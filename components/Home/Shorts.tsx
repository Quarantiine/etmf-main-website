"use client";

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
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlay = (): void => {
		if (isPlaying) {
			videoRef.current?.pause();
		} else {
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

	return (
		<>
			<div className="default-overflow-x-child relative w-full h-fit mx-auto rounded-2xl">
				<div className="placeholder-bg rounded-2xl" />

				<div className="relative w-fit">
					<video
						ref={videoRef}
						className="w-full h-[450px] rounded-2xl"
						onMouseOver={handleShowPauseButton}
						onMouseLeave={handleHidePauseButton}
					>
						<source src={short.src} type="video/mp4" />
						{/* <source src="/video-file.webm" type="video/webm" />
							<source src="/video-file.ogg" type="video/ogg" /> */}
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
					<button
						onMouseLeave={handleHidePauseButton}
						onMouseOver={handleShowPauseButton}
						onClick={togglePlay}
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
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
			</div>
		</>
	);
}
