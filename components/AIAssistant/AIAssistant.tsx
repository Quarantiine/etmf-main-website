"use client";

import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import AIComponent from "./AIComponent";

export default function AIAssistant(): React.ReactElement {
	const [openAIAssistant, setOpenAIAssistant] = useState<boolean>(false);
	const [showPopUpMessage, setShowPopUpMessage] = useState<boolean>(true);

	const handleOpenAIAssistant: MouseEventHandler<HTMLButtonElement> = () => {
		setOpenAIAssistant(!openAIAssistant);
		setShowPopUpMessage(false);
	};

	const handlePopUpMessage: MouseEventHandler<HTMLButtonElement> = () => {
		setShowPopUpMessage(false);
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
			<div className="fixed bottom-5 right-5 z-50 ai-assistant-modal">
				{showPopUpMessage && (
					<div className="flex flex-row justify-center items-center gap-2 w-[190px] h-fit absolute bottom-20 right-0 text-sm !bg-white shadow-lg rounded-xl px-3 py-2">
						<button onClick={handleOpenAIAssistant} className="no-style-btn">
							Need Help Finding Something Fast?
						</button>

						<button onClick={handlePopUpMessage} className="no-style-btn">
							<Image
								className="h-auto min-w-[25px] max-w-[25px]"
								src={"/icons/close.svg"}
								alt="icon"
								width={25}
								height={25}
							/>
						</button>
					</div>
				)}

				<button className="no-style-btn" onClick={handleOpenAIAssistant}>
					<div className="rounded-full w-16 h-16 bg-green-3 flex justify-center items-center z-50 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)]">
						{openAIAssistant ? (
							<>
								<Image
									className="w-auto h-[25px]"
									src={"/icons/search-white.svg"}
									alt="icon"
									width={25}
									height={25}
								/>
							</>
						) : (
							<>
								<Image
									className="w-auto h-[25px]"
									src={"/icons/search-white.svg"}
									alt="icon"
									width={25}
									height={25}
								/>
							</>
						)}
					</div>
				</button>
			</div>

			{openAIAssistant && (
				<AIComponent handleOpenAIAssistant={handleOpenAIAssistant} />
			)}
		</>
	);
}
