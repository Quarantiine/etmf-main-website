"use client";

import Image from "next/image";
import React, { RefObject } from "react";

export default function CarouselArrows({
	carouselArrowsRef,
}: {
	carouselArrowsRef: RefObject<HTMLDivElement>;
}) {
	const handleCarouselArrows = (id: number) => {
		if (id === 1) {
			carouselArrowsRef.current?.scrollBy({
				top: 0,
				left: -150,
				behavior: "smooth",
			});
		} else {
			carouselArrowsRef.current?.scrollBy({
				top: 0,
				left: 150,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<button
				onClick={() => {
					handleCarouselArrows(1);
				}}
				className="no-style-btn bg-green-1 w-16 h-16 absolute top-1/2 -translate-y-1/2 -left-6 z-10 rounded-full hidden sm:flex flex-col justify-center items-center -rotate-90"
			>
				<Image
					className="w-auto h-[30px]"
					src={"/icons/arrow_drop_up.png"}
					alt="icon"
					width={35}
					height={35}
				/>
			</button>

			<button
				onClick={() => {
					handleCarouselArrows(2);
				}}
				className="no-style-btn bg-green-1 w-16 h-16 absolute top-1/2 -translate-y-1/2 -right-6 z-10 rounded-full hidden sm:flex flex-col justify-center items-center rotate-90"
			>
				<Image
					className="w-auto h-[30px]"
					src={"/icons/arrow_drop_up.png"}
					alt="icon"
					width={35}
					height={35}
				/>
			</button>
		</>
	);
}
