"use client";

import GeminiAPI from "@/app/api/geminiAPI";
import { Content } from "@google/generative-ai";
import Image from "next/image";
import React, {
	ChangeEvent,
	MouseEventHandler,
	useEffect,
	useState,
} from "react";
import ReactMarkdown from "react-markdown";

// interface HistoryType {
// 	role: string;
// 	parts: { text: string }[];
// }

export default function AIComponent({
	handleOpenAIAssistant,
}: {
	handleOpenAIAssistant: MouseEventHandler<HTMLButtonElement>;
}) {
	const { AIChatbotSystem, historyResp } = GeminiAPI();

	const [prompt, setPrompt] = useState<string>("");
	const [closePrePrompts, setClosePrePrompts] = useState<boolean>(false);
	const [saveConversation, setSaveConversation] = useState<boolean>(false);
	const [showInfo, setShowInfo] = useState<boolean>(false);

	const questionsList = [
		{ text: "What is the ETMF about?" },
		{ text: "How can I donate to ETMF?" },
		{ text: "Can you tell me about ETMF's mission and vision" },
		{ text: "Who are the key leaders at ETMF?" },
		{ text: "" },
	];

	const handlePromptChange = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		setPrompt(e.target.value);
	};

	const handlePrePrompts = (text: string) => {
		setPrompt(text);
	};

	const handleClosePrePrompts = () => {
		setClosePrePrompts(!closePrePrompts);
	};

	const handleSaveConversations = () => {
		setSaveConversation(!saveConversation);
	};

	const handleShowInfo = () => {
		setShowInfo(!showInfo);
	};

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".show-info")) {
				setShowInfo(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, []);

	const handlePrompt = async () => {
		if (prompt) {
			await AIChatbotSystem(prompt);
			setPrompt("");
		}
	};

	return (
		<>
			<div className="fixed bottom-0 right-0 w-full border-t-4 h-[90%] mt-auto bg-gradient-to-tr bg-[rgba(255,255,255,0.9)] backdrop-blur-xl z-50 flex flex-col justify-center items-center">
				<button
					onClick={handleOpenAIAssistant}
					className="ai-assistant-modal no-style-btn absolute top-2 right-2"
				>
					<Image
						className="w-auto h-[25px]"
						src={"/icons/close.svg"}
						alt="icon"
						width={25}
						height={25}
					/>
				</button>

				<div className="ai-assistant-modal w-[90%] lg:w-[700px] h-full px-10 py-5 flex flex-col justify-start items-start gap-1 md:hover:bg-gray-100 transition-colors">
					<h1 className="lato-bold">AI Assistant: Search</h1>

					<div className="flex flex-col w-full h-full justify-start items-start gap-5 default-overflow overflow-x-hidden overflow-y-scroll relative">
						{historyResp &&
							historyResp?.map((value: Content) => value.role).length <= 1 && (
								<div className="flex flex-col justify-center items-center text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
									<p className="text-gray-400">
										Looking for something? Ask anything related to the ETM
										Foundation.
									</p>
								</div>
							)}

						{historyResp
							?.filter(
								(value: Content) =>
									!value.parts
										.map((part) => part.text)
										.toString()
										.includes("9jd&3vd%")
							)
							?.map((conversation: Content) => (
								<React.Fragment
									key={conversation.parts.map((part) => part.text).toString()}
								>
									<div className="flex flex-col">
										<div className="flex flex-row gap-1 justify-start items-center">
											{conversation.role === "model" ? (
												<>
													<Image
														className="object-cover w-auto h-[20px]"
														src={"/etm_foundation_logo.png"}
														alt="logo"
														width={25}
														height={25}
													/>
												</>
											) : (
												<>
													<div className="w-4 h-4 bg-green-1 rounded-full" />
												</>
											)}

											<p className="lato-bold">
												{conversation.role === "user" ? "You" : "Zhyra (AI)"}
											</p>
										</div>

										{conversation.parts.map((part, index2) => (
											<React.Fragment key={index2}>
												<ReactMarkdown
													components={{
														ul: ({ children }) => (
															<ul
																style={{
																	listStyleType: "disc",
																	paddingLeft: "20px",
																}}
															>
																{children}
															</ul>
														),
														li: ({ children }) => (
															<li
																style={{ color: "black", fontWeight: "medium" }}
															>
																{children}
															</li>
														),
													}}
												>
													{part.text}
												</ReactMarkdown>
											</React.Fragment>
										))}
									</div>
								</React.Fragment>
							))}
					</div>

					<div className="flex flex-col w-full h-auto gap-2 pt-3 text-sm">
						<button
							onClick={handleClosePrePrompts}
							className="outlined-styled-btn"
						>
							{closePrePrompts ? "Show Pre-Prompts" : "Hide Pre-Prompts"}
						</button>

						{closePrePrompts === false && (
							<div className="default-overflow overflow-y-scroll overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full max-h-[100px] py-2">
								{questionsList.map(
									(question: { text: string }, index: number) => {
										return (
											<React.Fragment key={index}>
												{question.text && (
													<button
														onClick={() => handlePrePrompts(question.text)}
														className="no-style-btn !bg-white border rounded-xl p-2"
													>
														{question.text}
													</button>
												)}
											</React.Fragment>
										);
									}
								)}
							</div>
						)}
					</div>

					<div className="flex flex-row gap-1 w-full h-auto mt-auto py-1">
						<textarea
							className="input-field-style block md:hidden border min-h-[45px] h-[45px] max-h-[150px] overflow-y-auto"
							placeholder="Chat..."
							onChange={(e) => handlePromptChange(e)}
							value={prompt}
						/>

						<input
							className="input-field-style hidden md:block border overflow-y-auto"
							placeholder="Chat..."
							onKeyDown={(e) => e.key === "Enter" && handlePrompt()}
							onChange={(e) => handlePromptChange(e)}
							value={prompt}
						/>

						<button
							onClick={handlePrompt}
							className="styled-btn w-fit text-center h-fit"
						>
							Send
						</button>
					</div>

					<div className="flex flex-row gap-1 px-3 rounded-lg justify-center items-center text-gray-500 w-full text-sm">
						<div className="relative w-fit h-fit">
							<button
								onClick={handleShowInfo}
								className="no-style-btn show-info flex flex-row gap-1 text-center justify-center items-center"
							>
								<Image
									className="w-auto h-[19px]"
									src={"/icons/info.svg"}
									alt="icon"
									width={25}
									height={25}
								/>
							</button>

							{showInfo && (
								<div className="show-info absolute bottom-6 left-0 bg-white border shadow-xl px-4 py-2 rounded-xl w-[250px] h-fit">
									<p>
										Saving conversations helps the AI assistant become more
										accurate, efficient, and helpful by learning to interact
										with users more effectively over time. AI is not always
										accurate.
									</p>
								</div>
							)}
						</div>

						<button
							disabled
							onClick={handleSaveConversations}
							className="no-style-btn flex flex-row gap-1 text-center justify-center items-center !cursor-not-allowed"
						>
							<p>Save Conversation</p>

							<Image
								className="w-auto h-[22px] mt-auto"
								src={
									saveConversation
										? "/icons/toggle_on.svg"
										: "/icons/toggle_off.svg"
								}
								alt="icon"
								width={25}
								height={25}
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
