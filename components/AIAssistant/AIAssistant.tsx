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
			<div
				className={`ai-assistant-modal fixed top-1/2 -translate-y-1/2 right-0 z-40`}
			>
				{showPopUpMessage && (
					<div className="flex flex-row justify-start items-center gap-2 w-[175px] h-fit absolute bottom-0 right-14 text-sm !bg-white shadow-lg rounded-xl px-3 py-2">
						<button
							onClick={handleOpenAIAssistant}
							className="no-style-btn text-start"
						>
							Use AI to find what you need
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

			{openAIAssistant && (
				<AIComponent handleOpenAIAssistant={handleOpenAIAssistant} />
			)}
		</>
	);
}
