"use client";

import { AnimatePresence, motion } from "framer-motion";
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
			<AnimatePresence>
				{!openUpdateBanner && (
					<div
						className={`update-banner w-full bg-green-1 gap-1 fixed left-0 bottom-0 flex justify-between items-center text-sm z-50 rounded-t-3xl shadow-2xl`}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="bg-green-1 gap-1 fixed left-0 bottom-0 flex justify-between items-center w-full text-sm z-50 rounded-t-3xl shadow-[0px_10px_10px_0px_rgba(0,0,0,0.5)] px-7 py-5">
								<p>
									<span className="font-semibold">
										Terms & Conditions and Privacy Policy was recently updated!
									</span>{" "}
									By using this website, you agree to our{" "}
									<Link
										href={"/terms"}
										target="_blank"
										className="no-style-btn underline"
									>
										Terms & Conditions
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
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
