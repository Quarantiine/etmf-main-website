"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define an interface for the social media links data
interface SocialListTypes {
	name: string; // Name of the social media platform
	href: string; // URL of the social media profile
	img: string; // Path to the social media icon image
}

export default function Footer(): React.ReactElement {
	// Array of social media link object

	const socialList: SocialListTypes[] = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/etm.foundation/",
			img: "/icons/instagram.svg",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/the-etm-foundation",
			img: "/icons/linkedin.svg",
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/@ETMFoundation",
			img: "/icons/youtube.svg",
		},
	];

	return (
		<>
			<footer className="bg-gray-100 h-full w-full border-t-[20px] border-[#4BF2C7]">
				<div className="flex flex-col md:grid md:grid-cols-[50%_50%] justify-center items-center w-full h-full z-50">
					{/* Left Column - Background Image with Overlay */}
					<div className="w-full h-[400px] md:h-full bg-gray-500 relative">
						<Image
							className="object-cover w-auto h-auto"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/footer-img"
							}
							alt="image"
							fill
							priority={true}
							sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="absolute top-0 left-0 bg-[rgba(6,64,48,0.7)] w-full h-full flex flex-col justify-center items-center gap-1">
							{/* Social Links Container (Hidden on Mobile) */}
							<div className="hidden md:flex flex-row justify-center items-center gap-3 absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
								{socialList?.map((social: SocialListTypes, index: number) => {
									return (
										<React.Fragment key={index}>
											<Link
												className="no-style-btn"
												href={social.href}
												target="_blank"
											>
												<Image
													className="w-auto h-[25px]"
													src={social.img}
													alt={`Social Img ${index + 1}`}
													width={30}
													height={30}
												/>
											</Link>
										</React.Fragment>
									);
								})}
							</div>

							<Image
								className="w-auto h-auto object-cover"
								src={"/etm_foundation_text_white.png"}
								alt="logo"
								width={300}
								height={300}
							/>
						</div>
					</div>

					{/* Right Column - Text Content and Social Links (Mobile) */}
					<div className="w-full h-full bg-[#104030] p-5 sm:p-10 flex flex-col gap-5">
						<div className="flex md:hidden flex-row justify-center items-center gap-3">
							{/* Map through the socialList array to render social links */}
							{socialList?.map((social: SocialListTypes, index: number) => {
								return (
									<React.Fragment key={index}>
										<Link
											className="no-style-btn"
											href={social.href}
											target="_blank"
										>
											<Image
												className="w-auto h-[40px]"
												src={social.img}
												alt={`Social Img ${index + 1}`}
												width={50}
												height={50}
											/>
										</Link>
									</React.Fragment>
								);
							})}
						</div>

						<div className="flex flex-col justify-center items-center gap-10 text-white w-full lg:w-[400px] md:m-auto">
							<div className="flex flex-col gap-2 text-center md:text-start md:w-full">
								<h1 className="montserrat-bold text-3xl">Contact Us</h1>

								<div className="flex flex-col">
									<p className="text-[14px] sm:text-[18px]">
										customersupport@etmfoundatiom.com
									</p>
									<p className="text-[14px] sm:text-[18px]">
										techsupport@etmfoundatiom.com
									</p>
								</div>
							</div>

							<div className="flex flex-col gap-2 text-center md:text-start md:w-full">
								<h1 className="montserrat-bold text-3xl">Take Action</h1>

								<div className="flex flex-col w-fit">
									<Link
										href={"https://m06w1sq48mn.typeform.com/to/egR2Hgce"}
										className="no-style-btn text-green-1"
										target="_blank"
									>
										Meet a Person
									</Link>

									<Link
										href={"https://m06w1sq48mn.typeform.com/to/Mpuj7LyK"}
										className="no-style-btn text-green-1"
										target="_blank"
									>
										Get Involved
									</Link>

									<Link
										href={"https://m06w1sq48mn.typeform.com/to/ULvIvS58"}
										className="no-style-btn text-green-1"
										target="_blank"
									>
										Give Website Feedback
									</Link>
								</div>
							</div>

							<>
								<div className="flex flex-col gap-2 text-center md:text-start w-full">
									<h1 className="montserrat-bold text-3xl">Pages</h1>

									<div className="flex flex-col w-fit mx-auto md:mx-0">
										<Link
											className="no-style-btn text-green-1"
											href={"/aboutus"}
										>
											About Us
										</Link>

										<Link
											className="no-style-btn text-green-1"
											href={"/programs"}
										>
											Programs
										</Link>

										<Link
											className="no-style-btn text-green-1"
											href={"/getinvolved"}
										>
											Get Involved
										</Link>

										{/* <Link
											className="no-style-btn text-green-1"
											href={"/resources"}
										>
											Resources
										</Link> */}
									</div>
								</div>

								<div className="text-center md:text-start opacity-30 text-sm text-white flex flex-col justify-center items-center md:items-start pt-10 relative mx-auto md:mr-auto md:mx-0">
									<p>Copyright © 2024</p>
									<p>Empowerment Through Mindset Foundation</p>

									<div className="flex flex-wrap gap-1 w-full justify-center md:justify-start items-center">
										<Link
											className="underline no-style-btn"
											href={"/terms"}
											target="_blank"
										>
											Terms & Conditions
										</Link>
										|
										<Link
											className="underline no-style-btn"
											href={"/privacypolicy"}
											target="_blank"
										>
											Privacy Policy
										</Link>
										|
										<Link
											className="underline no-style-btn"
											href={"/sitemap.xml"}
											target="_blank"
										>
											Sitemap
										</Link>
									</div>
								</div>
							</>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
