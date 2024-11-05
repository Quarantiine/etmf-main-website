"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActionSection(): React.ReactElement {
	return (
		<>
			<div className="flex flex-row gap-5 w-full h-full mx-auto">
				<div className="bg-green-3 w-full h-full sm:h-screen flex flex-col sm:flex-row justify-center items-start text-white relative overflow-hidden text-center">
					<div className="w-full h-full flex flex-col justify-center items-center relative border-b sm:border-r sm:border-b-0 border-[#4bf2c8]">
						<Image
							className="object-cover inset-0 z-0"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/blgmklh6wixyk8hhnxrn"
							}
							alt="image"
							fill
							sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex flex-col gap-5 z-10 p-10 justify-center items-center">
							<h1 className="text-3xl sm:text-4xl montserrat-bold">
								Become a Partner
							</h1>

							<p>
								Partner with us to build the future of education and harness the
								full power of mindset to empower students to reach their
								potential.
							</p>

							<Link href={"/getinvolved"} className="styled-btn">
								Learn More
							</Link>
						</div>
					</div>

					<div className="w-full h-full flex flex-col justify-center items-center relative">
						<Image
							className="object-cover inset-0 z-0"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/wqblsmher3ai8heykkvf"
							}
							alt="image"
							fill
							sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex flex-col gap-5 z-10 p-10 justify-center items-center">
							<h1 className="text-3xl sm:text-4xl montserrat-bold">
								Become a Sponsor
							</h1>
							<p>
								Partner with us to invest in the future, making tomorrow a
								better place by empowering students, employees, communities and
								individuals to make meaningful contributions to society.
							</p>

							<Link href={"/getinvolved"} className="styled-btn">
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
