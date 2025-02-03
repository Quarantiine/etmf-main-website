import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LetterURL = () => {
	return (
		<>
			<nav className="backdrop-blur-3xl h-full w-full text-black shadow-sm bg-yellow p-5 flex justify-center items-center">
				<div className="flex justify-start items-start gap-3">
					<div className="w-fit bg-white h-fit p-.5 rounded-full z-10 lato-bold text-black shadow-xl border-2 border-[#4bf2c7]">
						<Image
							className="object-cover object-center min-w-[30px] max-w-[30px]"
							src={"/icons/star.svg"}
							title="Important"
							alt="image"
							width={33}
							height={33}
						/>
					</div>

					<p>
						Message from the President and CEO concerning, ICE.{" "}
						<span className="italic">
							{" "}
							{'"Staying Safe and Knowing Your Rights."'}
						</span>
						<Link
							className="w-fit no-styled-btn font-semibold pl-2"
							href={"/letter"}
						>
							View Letter
						</Link>
					</p>
				</div>
			</nav>
		</>
	);
};
