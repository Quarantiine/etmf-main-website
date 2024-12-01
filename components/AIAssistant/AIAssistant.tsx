"use client";

import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import AIComponent from "./AIComponent";

export default function AIAssistant(): React.ReactElement {
	const [openAIAssistant, setOpenAIAssistant] = useState<boolean>(false);

	const handleOpenAIAssistant: MouseEventHandler<HTMLButtonElement> = () => {
		setOpenAIAssistant(!openAIAssistant);
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
			<button
				onClick={handleOpenAIAssistant}
				className="fixed bottom-5 right-5 no-style-btn z-50 ai-assistant-modal"
			>
				<>
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
				</>
			</button>

			{openAIAssistant && (
				<AIComponent handleOpenAIAssistant={handleOpenAIAssistant} />
			)}
		</>
	);
}
