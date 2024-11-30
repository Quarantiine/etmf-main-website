"use client";

import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";

export default function AIAssistant(): React.ReactElement {
	const [openAIAssistant, setOpenAIAssistant] = useState<boolean>(false);
	const [heightIncrease, setHeightIncrease] = useState(false);

	const handleOpenAIAssistant: MouseEventHandler<HTMLButtonElement> = () => {
		setOpenAIAssistant(!openAIAssistant);
	};

	const handleCloseAIAssistant: MouseEventHandler<HTMLButtonElement> = () => {
		setOpenAIAssistant(false);
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

	const handleIncreaseHeight: MouseEventHandler<HTMLButtonElement> = () => {
		setHeightIncrease(!heightIncrease);
	};

	return (
		<>
			<button
				onClick={handleOpenAIAssistant}
				className="fixed bottom-5 right-5 no-style-btn z-50 ai-assistant-modal"
			>
				<>
					<div className="rounded-full w-16 h-16 bg-green-3 flex justify-center items-center z-50 shadow-xl">
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
				<>
					<div className="ai-assistant-modal hidden fixed bottom-16 right-16 w-80 h-96 bg-white rounded-2xl shadow-xl p-5 z-50 sm:flex flex-col justify-start items-start gap-1">
						<h3 className="lato-bold">AI Assistant</h3>

						<div className="flex flex-col w-full h-full justify-start items-start gap-5 default-overflow overflow-x-hidden overflow-y-scroll relative border">
							<p>AI CODE</p>
						</div>

						<div className="flex flex-row gap-1 w-full h-auto mt-auto">
							<textarea
								className="input-field-style border min-h-[50px] h-[50px] max-h-[100px] overflow-y-auto"
								placeholder="Ask Anything..."
							/>

							<button className="styled-btn w-fit text-center h-fit">
								Send
							</button>
						</div>
					</div>

					<div
						className={`border-t-4 border-[#4BF2C7] ai-assistant-modal flex sm:hidden fixed bottom-0 right-0 w-full bg-white flex-col justify-center items-center p-5 z-50 transition-all ${
							heightIncrease ? "h-[90%]" : "h-80"
						}`}
					>
						<div
							className={`absolute left-1/2 -translate-x-1/2 z-50 ${
								heightIncrease ? "top-1" : "-top-5"
							}`}
						>
							<button
								onClick={handleIncreaseHeight}
								className="no-style-btn flex px-2 py-1 border border-[#4BF2C7] justify-center items-center bg-white rounded-xl"
							>
								<Image
									className={`w-auto h-[25px] transition-all ${
										heightIncrease && "rotate-180"
									}`}
									src={"/icons/arrow_drop_up.png"}
									alt="icon"
									width={35}
									height={35}
								/>
							</button>
						</div>
						<button
							onClick={handleCloseAIAssistant}
							className="no-style-btn absolute top-2 right-2"
						>
							<Image
								className="w-auto h-[25px]"
								src={"/icons/close.svg"}
								alt="icon"
								width={25}
								height={25}
							/>
						</button>

						<div className="w-[93%] h-[93%] flex flex-col justify-start items-start gap-5 default-overflow overflow-x-hidden overflow-y-scroll">
							<p>AI Assistant</p>
							<>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Cupiditate eaque perspiciatis temporibus, corporis obcaecati
									debitis quis quae omnis soluta, similique, quo saepe aliquam
									nobis? Eaque perspiciatis reprehenderit magni nemo architecto!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
									voluptatibus cum quia aspernatur vitae, aliquid dolores
									commodi non iste nostrum. Provident voluptates maxime quisquam
									cumque doloremque magni pariatur perferendis esse!
								</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Cupiditate eaque perspiciatis temporibus, corporis obcaecati
									debitis quis quae omnis soluta, similique, quo saepe aliquam
									nobis? Eaque perspiciatis reprehenderit magni nemo architecto!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
									voluptatibus cum quia aspernatur vitae, aliquid dolores
									commodi non iste nostrum. Provident voluptates maxime quisquam
									cumque doloremque magni pariatur perferendis esse!
								</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Cupiditate eaque perspiciatis temporibus, corporis obcaecati
									debitis quis quae omnis soluta, similique, quo saepe aliquam
									nobis? Eaque perspiciatis reprehenderit magni nemo architecto!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
									voluptatibus cum quia aspernatur vitae, aliquid dolores
									commodi non iste nostrum. Provident voluptates maxime quisquam
									cumque doloremque magni pariatur perferendis esse!
								</p>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Cupiditate eaque perspiciatis temporibus, corporis obcaecati
									debitis quis quae omnis soluta, similique, quo saepe aliquam
									nobis? Eaque perspiciatis reprehenderit magni nemo architecto!
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
									voluptatibus cum quia aspernatur vitae, aliquid dolores
									commodi non iste nostrum. Provident voluptates maxime quisquam
									cumque doloremque magni pariatur perferendis esse!
								</p>
							</>
						</div>
					</div>
				</>
			)}
		</>
	);
}
