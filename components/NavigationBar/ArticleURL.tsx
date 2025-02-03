import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LetterURL = () => {
	return (
		<>
			<nav className="backdrop-blur-3xl h-full w-full text-black shadow-sm bg-yellow p-5 flex justify-center items-center">
				<div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3">
					<div className="w-fit bg-white h-fit p-.5 rounded-full z-10 lato-bold text-black shadow-xl border-2 border-[#4bf2c7]">
						<Image
							className="object-cover object-center w-auto h-[30px]"
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
					</p>

					<Link className="w-fit no-styled-btn font-semibold" href={"/article"}>
						View Letter
					</Link>
				</div>
			</nav>
		</>
	);
};
