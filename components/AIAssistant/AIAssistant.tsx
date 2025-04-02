"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AIComponent from "./AIComponent";
import { AnimatePresence, motion } from "framer-motion";

export default function AIAssistant(): React.ReactElement {
	const [openAIAssistant, setOpenAIAssistant] = useState<boolean>(false);
	const [showPopUpMessage, setShowPopUpMessage] = useState<boolean>(false);

	const handleOpenAIAssistant = () => {
		setOpenAIAssistant(!openAIAssistant);
		setShowPopUpMessage(false);
	};

	const handleClosePopUpMessage = () => {
		setShowPopUpMessage(false);
	};

	const handleOpenPopUpMessage = () => {
		setShowPopUpMessage(true);
	};

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			if (
				e.target instanceof HTMLElement &&
				!e.target.closest(".ai-assistant-modal")
			) {
				setOpenAIAssistant(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, []);

	return (
		<>
			<div
				className={`ai-assistant-modal fixed top-1/2 -translate-y-1/2 right-0 z-40`}
			>
				<AnimatePresence>
					{showPopUpMessage && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.1 }}
							className="absolute bottom-0 right-14"
						>
							<div className="flex flex-row justify-start items-center gap-2 w-[130px] h-fit !bg-white shadow-lg rounded-xl px-3 py-2">
								<p className="text-start">Quick Search</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<button
					onMouseLeave={handleClosePopUpMessage}
					onMouseEnter={handleOpenPopUpMessage}
					className="no-style-btn"
					onClick={handleOpenAIAssistant}
				>
					<div className="rounded-l-3xl w-12 h-12 bg-green-3 flex justify-center items-center z-50 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)]">
						{openAIAssistant ? (
							<>
								<Image
									className="w-auto h-[25px]"
									src={"/icons/ai-assistant.png"}
									alt="icon"
									width={25}
									height={25}
								/>
							</>
						) : (
							<>
								<Image
									className="w-auto h-[25px]"
									src={"/icons/ai-assistant.png"}
									alt="icon"
									width={25}
									height={25}
								/>
							</>
						)}
					</div>
				</button>
			</div>

			<AnimatePresence>
				{openAIAssistant && (
					<AIComponent handleOpenAIAssistant={handleOpenAIAssistant} />
				)}
			</AnimatePresence>
		</>
	);
}
