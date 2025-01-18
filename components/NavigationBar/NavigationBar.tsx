// "Use Client" allows this component to be client side, not server side (server side is by default).
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { URLs } from "./URLs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the types for the URL list below
interface urlListTypes {
	text: string;
	urlPath: string;
}

export default function NavigationBar(): React.ReactElement {
	const router: AppRouterInstance = useRouter();

	// Define the list of URLs for the navigation bar at the top
	const URLList: urlListTypes[] = [
		{ text: "Home", urlPath: "/" },
		{ text: "About Us", urlPath: "/aboutus" },
		{ text: "Programs", urlPath: "/programs" },
		{ text: "Get Involved", urlPath: "/getinvolved" },
		{ text: "Resources", urlPath: "/resources" },
	];

	// State to keep track of the current page
	const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);
	const [openUpdateBanner, setOpenUpdateBanner] = useState<boolean>(false);

	const handleOpenMobileNavbar = () => {
		setOpenMobileNavbar(!openMobileNavbar);
	};

	const handleHomeBtn = () => {
		router.push("/");
		setOpenMobileNavbar(false);
	};

	const handleCloseUpdateBanner = () => {
		setOpenUpdateBanner(!openUpdateBanner);
	};

	return (
		<>
			<div className="flex flex-col gap-2 w-full h-fit justify-center items-end sticky top-0 left-0 z-50">
				<nav className="bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl h-full w-full text-black">
					{!openUpdateBanner && (
						<div className="flex flex-row w-full bg-green-1 px-10 py-5 gap-1 sticky top-0 left-0 justify-start items-center text-sm z-50">
							<p>
								🎤 New event coming soon! Sign up here:{" "}
								<Link
									href={
										"https://docs.google.com/forms/d/e/1FAIpQLSf1N0zcn6oanoTVBccynQ_D7fQFiy6gCMn5L2uaasIDKqEB2w/viewform?pli=1"
									}
									target="_blank"
									className="no-style-btn underline"
								>
									Event Registration
								</Link>
								{". "}
								By using this website, you agree to our{" "}
								<Link
									href={"/terms"}
									target="_blank"
									className="no-style-btn underline"
								>
									Terms & Conditions{" "}
								</Link>{" "}
								and{" "}
								<Link
									href={"/privacypolicy"}
									target="_blank"
									className="no-style-btn underline"
								>
									Privacy Policy
								</Link>
								.
							</p>

							<button
								onClick={handleCloseUpdateBanner}
								className="no-style-btn"
							>
								<Image
									className="min-w-[19px] max-w-[19px] h-auto"
									src={"/icons/close.svg"}
									alt="icon"
									width={20}
									height={20}
								/>
							</button>
						</div>
					)}

					{/* {!openUpdateBanner &&
						createPortal(
							<div className="flex flex-row w-[50%] sm:w-[500px] bg-green-1 px-10 py-5 gap-1 fixed bottom-5 left-5 justify-center items-center text-sm z-50 rounded-xl">
								<p>
									🎤 New event coming soon! Sign up here:{" "}
									<Link
										href={
											"https://docs.google.com/forms/d/e/1FAIpQLSf1N0zcn6oanoTVBccynQ_D7fQFiy6gCMn5L2uaasIDKqEB2w/viewform?pli=1"
										}
										target="_blank"
										className="no-style-btn underline"
									>
										Event Registration
									</Link>
									{". "}
									By using this website, you agree to our{" "}
									<Link
										href={"/terms"}
										target="_blank"
										className="no-style-btn underline"
									>
										Terms & Conditions{" "}
									</Link>{" "}
									and{" "}
									<Link
										href={"/privacypolicy"}
										target="_blank"
										className="no-style-btn underline"
									>
										Privacy Policy
									</Link>
									.
								</p>

								<button
									onClick={handleCloseUpdateBanner}
									className="no-style-btn"
								>
									<Image
										className="min-w-[19px] max-w-[19px] h-auto"
										src={"/icons/close.svg"}
										alt="icon"
										width={20}
										height={20}
									/>
								</button>
							</div>,
							document.body
						)} */}

					{/* Tablet/Desktop Navigation Bar */}
					<div className="hidden md:flex w-full h-fit flex-row justify-between items-center gap-4 px-5 sm:px-10 py-4">
						<button onClick={handleHomeBtn}>
							<Image
								className="object-cover w-auto h-[40px] no-style-btn"
								src="/etm_foundation_text_black.png"
								alt="logo"
								width={50}
								height={50}
								priority={true}
							/>
						</button>

						<div className="flex flex-row gap-4 text-lg">
							{/* Map through URLList to create navigation buttons */}
							{URLList.map((item: urlListTypes, index: number) => {
								return (
									<URLs
										key={index}
										item={item}
										setOpenMobileNavbar={setOpenMobileNavbar}
									/>
								);
							})}
						</div>
					</div>

					{/* Mobile Navigation Bar */}
					<div className="flex md:hidden w-full h-fit flex-col justify-between items-center gap-4 px-5 sm:px-10 py-4">
						<div className="flex flex-row justify-between items-center gap-4 w-full">
							<button onClick={handleHomeBtn}>
								<Image
									className="object-cover w-auto h-[40px] no-style-btn"
									src="/etm_foundation_logo.png"
									alt="logo"
									width={40}
									height={40}
									priority={true}
								/>
							</button>

							<>
								{openMobileNavbar ? (
									<button
										onClick={handleOpenMobileNavbar}
										className="no-style-btn w-fit"
									>
										<Image
											src="/icons/close.svg"
											alt="icon"
											width={30}
											height={30}
										/>
									</button>
								) : (
									<button
										onClick={handleOpenMobileNavbar}
										className="no-style-btn w-fit"
									>
										<Image
											src="/icons/menu.svg"
											alt="icon"
											width={30}
											height={30}
										/>
									</button>
								)}
							</>
						</div>

						{openMobileNavbar && (
							<>
								<div className="flex flex-col gap-4 text-lg">
									{URLList.map((item: urlListTypes, index: number) => {
										return (
											<URLs
												key={index}
												item={item}
												setOpenMobileNavbar={setOpenMobileNavbar}
											/>
										);
									})}
								</div>
							</>
						)}
					</div>
				</nav>
			</div>
		</>
	);
}
