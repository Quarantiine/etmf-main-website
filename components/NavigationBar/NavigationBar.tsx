// "Use Client" allows this component to be client side, not server side (server side is by default).
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { URLs } from "./URLs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
				className={`flex flex-col w-full justify-center items-end fixed top-0 left-0 z-50 ${
					openMobileNavbar ? "h-screen lg:h-fit" : "h-fit"
				}`}
			>
				<nav className="h-full w-full text-white font-bold">
					{/* Tablet/Desktop Navigation Bar */}
					<div className="hidden lg:flex w-full h-fit flex-row justify-between items-center gap-4 px-5 sm:px-10 py-3">
						<button onClick={handleHomeBtn}>
							<Image
								className="object-cover w-auto h-[40px] no-style-btn"
								src="/etm_foundation_text_white.png"
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
						<div className="flex flex-row justify-between items-end gap-4 w-full">
							<button
								onClick={handleHomeBtn}
								className={openMobileNavbar ? "hidden" : ""}
							>
								<Image
									className="object-cover w-auto h-[40px] no-style-btn"
									src="/etm_foundation_logo.png"
									alt="logo"
									width={40}
									height={40}
									priority={true}
								/>
							</button>

							{!openMobileNavbar && (
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
												src="/icons/menu_white.svg"
												alt="icon"
												width={30}
												height={30}
											/>
										</button>
									)}
								</>
							)}
						</div>

						{openMobileNavbar && (
							<>
								<div className="bg-[rgba(0, 0, 0, 0.85)] backdrop-blur-lg flex flex-col gap-4 text-lg fixed w-full h-full justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
