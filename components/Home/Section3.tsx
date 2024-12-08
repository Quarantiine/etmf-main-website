"use client";

import Link from "next/link";
import React from "react";

export default function Section3(): React.ReactElement {
	// TODO: Finish Section 3

	return (
		<>
			<div className="bg-[#222] w-full ml-auto h-fit flex flex-col justify-center items-start text-white relative px-10 py-16 overflow-hidden">
				<div className="flex flex-col justify-center items-start default-width mx-auto gap-10 z-10">
					<h1 className="montserrat-bold text-4xl sm:text-5xl text-start">
						Student Empowerment
					</h1>

					<div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-start items-center">
						<video
							className="w-[300px] h-[450px]"
							// controls
							// poster="/poster-image.jpg"
						>
							<source
								src="https://res.cloudinary.com/dnmdoncxt/video/upload/f_auto:video,q_auto/v1/Podcast/Shorts/zktfzrifc1sqs3expnxv"
								type="video/mp4"
							/>
							{/* <source src="/video-file.webm" type="video/webm" />
							<source src="/video-file.ogg" type="video/ogg" /> */}
							Your browser does not support the video tag.
						</video>
					</div>

					<Link
						className="w-full sm:w-[200px] text-center styled-btn"
						href={"https://youtube.com/@ETMFoundation/shorts"}
					>
						View More
					</Link>
				</div>
			</div>
		</>
	);
}
