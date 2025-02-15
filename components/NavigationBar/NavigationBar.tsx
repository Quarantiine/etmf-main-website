// "Use Client" allows this component to be client side, not server side (server side is by default).
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { URLs } from "./URLs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { LetterURL } from "./LetterURL";
import { AnimatePresence } from "framer-motion";

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
		{ text: "Blog", urlPath: "/blog" },
		{ text: "Resources", urlPath: "/resources" },
		{ text: "Contact Us", urlPath: "/contact" },
	];

	// State to keep track of the current page
	const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);

	const handleOpenMobileNavbar = () => {
		setOpenMobileNavbar(!openMobileNavbar);
	};

	const handleHomeBtn = () => {
		router.push("/");
		setOpenMobileNavbar(false);
	};

	return (
		<>
			<div
				className={`flex flex-col w-full justify-center items-end sticky top-0 left-0 z-50 ${
					openMobileNavbar ? "h-screen lg:h-fit" : "h-fit"
				}`}
			>
				{!openMobileNavbar && <LetterURL />}

				<nav className="bg-[rgba(255,255,255,0.3)] backdrop-blur-3xl h-full w-full text-black shadow-sm">
					{/* Tablet/Desktop Navigation Bar */}
					<div className="hidden lg:flex w-full h-fit flex-row justify-between items-center gap-4 px-5 sm:px-10 py-4">
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
					<div className="flex lg:hidden w-full h-full flex-col justify-between items-center gap-4 px-5 sm:px-10 py-4 relative">
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
								<AnimatePresence>
									<div className="flex flex-col gap-4 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
								</AnimatePresence>
							</>
						)}
					</div>
				</nav>
			</div>
		</>
	);
}
