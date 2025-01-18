"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PopUp(): React.ReactElement {
	const [openUpdateBanner, setOpenUpdateBanner] = useState<boolean>(false);

	const handleCloseUpdateBanner = () => {
		setOpenUpdateBanner(!openUpdateBanner);
	};

	return (
		<>
			{!openUpdateBanner && (
				<div className="flex flex-row w-[90%] sm:w-[500px] bg-green-1 px-10 py-5 gap-1 fixed bottom-10 left-10 justify-center items-center text-sm z-50 rounded-xl">
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

					<button onClick={handleCloseUpdateBanner} className="no-style-btn">
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
		</>
	);
}
