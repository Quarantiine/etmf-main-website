"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialListTypes {
	name: string; // Name of the social media platform
	href: string; // URL of the social media profile
	img: string; // Path to the social media icon image
}

interface LinkTypes {
	href: string;
	text: string;
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
		{
			name: "Facebook",
			href: "https://www.facebook.com/profile.php?id=61568531660269",
			img: "/icons/facebook.svg",
		},
	];

	const actionLinks: LinkTypes[] = [
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSeZb_o8MS1tGORx56L9JOsjj1TWx7uR3ocbGzOpUEF7eNFXJQ/viewform",
			text: "Meet a Person",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSc1uTdhwkn5m2Vql5A0_igyTEzXYVbuwOrFOntBcWod1CGR1g/viewform",
			text: "Give Website Feedback",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSdmyR3SyzFKZDhVvlXV_nod6kYtVbZqWv5Wa56QBzQBLvlGjg/viewform",
			text: "Donating/Sponsoring",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLScBPx1_dTcoS5zOytGE9Igk1O4NGqSU_GCMPwjHBAyK7ZSqTw/viewform",
			text: "Collaborate/Partnership",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSdI6mWco1NYVzBi8OUO3Rc0ESXMpAkhUuX5GspylArg64Ublw/viewform",
			text: "Volunteering",
		},
	];

	const pagesLinks: LinkTypes[] = [
		{
			href: "https://etmfoundation.com/aboutus",
			text: "About Us",
		},
		{
			href: "https://etmfoundation.com/programs",
			text: "Programs",
		},
		{
			href: "https://etmfoundation.com/getinvolved",
			text: "Get Involved",
		},
		{
			href: "https://etmfoundation.com/blog",
			text: "Blog",
		},
	];

	const etmfInitiatives: LinkTypes[] = [
		{
			href: "https://www.remind.com/join/etmfaca",
			text: "Academy Register",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSf1N0zcn6oanoTVBccynQ_D7fQFiy6gCMn5L2uaasIDKqEB2w/viewform",
			text: "Speaker Series",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSeppcqUqBh7XKueA8Ja41ubohozXr25fsxJt5VUcS5u5PbVVg/viewform",
			text: "Monthly Lectures",
		},
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSc8uEPraHb8ETMuPgcN6MEkcl3VPvGeFl0gw6PA-nmsIAZWag/viewform",
			text: "Weekly Workshops",
		},
	];

	return (
		<>
			<footer className="bg-gray-100 h-full w-full border-t-[20px] border-[#4BF2C7]">
				<div className="flex flex-col md:grid md:grid-cols-[50%_50%] justify-center items-center w-full h-full z-50 text-sm">
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
													alt={`icon`}
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
											className="no-style-btn pt-5"
											href={social.href}
											target="_blank"
										>
											<Image
												className="w-auto h-[30px]"
												src={social.img}
												alt={`icon`}
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
								<h1 className="montserrat-bold text-xl">Contact Us</h1>

								<div className="flex flex-col gap-1 w-full">
									<p>
										<span className="lato-bold">Phone:</span> (682)-436-2165
									</p>
									<div className="flex flex-col justify-center items-center md:items-start">
										<p className="lato-bold">Mailing Address:</p>
										<p>400 N Ervay St, Unit # 132940 Dallas, TX 75313</p>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-start gap-10 w-full h-auto">
								<div className="flex flex-col gap-x-5 justify-center sm:justify-start items-center sm:items-start w-fit mx-auto md:mx-0">
									<h1 className="montserrat-bold text-xl pb-2">Take Action</h1>

									{actionLinks.map((actionlink: LinkTypes, index: number) => {
										return (
											<React.Fragment key={index}>
												<Link
													href={actionlink.href}
													className="no-style-btn text-green-1"
													target="_blank"
												>
													{actionlink.text}
												</Link>
											</React.Fragment>
										);
									})}
								</div>

								<div className="flex flex-col w-fit mx-auto md:mx-0 justify-center sm:justify-start items-center sm:items-start">
									<h1 className="montserrat-bold text-xl pb-2">Pages</h1>

									{pagesLinks.map((pageLink: LinkTypes, index: number) => {
										return (
											<React.Fragment key={index}>
												<Link
													className="no-style-btn text-green-1"
													href={pageLink.href}
													target="_blank"
												>
													{pageLink.text}
												</Link>
											</React.Fragment>
										);
									})}
								</div>

								<div className="flex flex-col w-fit mx-auto md:mx-0 justify-center sm:justify-start items-center sm:items-start">
									<h1 className="montserrat-bold text-xl pb-2">
										ETMF Initiatives
									</h1>

									{etmfInitiatives.map((pageLink: LinkTypes, index: number) => {
										return (
											<React.Fragment key={index}>
												<Link
													className="no-style-btn text-green-1"
													href={pageLink.href}
													target="_blank"
												>
													{pageLink.text}
												</Link>
											</React.Fragment>
										);
									})}
								</div>
							</div>

							<div className="text-center md:text-start opacity-30 text-sm text-white flex flex-col justify-center items-center md:items-start pt-10 relative mx-auto md:mr-auto md:mx-0">
								<p>© 2024 - 2025</p>
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
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
