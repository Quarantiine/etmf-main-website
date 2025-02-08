"use client";

import { Content, Part } from "@google/generative-ai";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AIRoles({ conversation }: { conversation: Content }) {
	return (
		<>
			{conversation.role === "model" ? (
				<div className="flex flex-col w-full">
					<div className="flex flex-row gap-1 justify-start items-center">
						<Image
							className="object-cover w-auto h-[20px]"
							src={"/etm_foundation_logo.png"}
							alt="logo"
							width={25}
							height={25}
						/>

						<p className="lato-bold">AI Assistant</p>
					</div>

					{conversation.parts.map((part, index2) => (
						<AIAssistant key={index2} part={part} />
					))}
				</div>
			) : (
				<div className="flex flex-col">
					<div className="flex flex-row gap-1 justify-start items-center">
						<div className="w-4 h-4 bg-green-1 rounded-full" />
						<p className="lato-bold">You</p>
					</div>

					{conversation.parts.map((part: Part, index2: number) => (
						<React.Fragment key={index2}>
							<ReactMarkdown
								components={{
									ul: ({ children }) => (
										<ul className="list-disc pl-5">{children}</ul>
									),
									li: ({ children }) => (
										<li className="text-black font-medium">{children}</li>
									),
									a: ({ href }) => (
										<a
											href={href}
											className="text-[#007bff] decoration-0 font-medium transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											{`Page`}
										</a>
									),
								}}
							>
								{part.text}
							</ReactMarkdown>
						</React.Fragment>
					))}
				</div>
			)}
		</>
	);
}

const AIAssistant = ({ part }: { part: Part }) => {
	const [thumbsType, setThumbsType] = useState<string>("N/A");

	const [copyLoading, setCopyLoading] = useState<boolean>(false);
	const [copiedIndicator, setCopiedIndicator] = useState<boolean>(false);

	const setCopiedIndicatorRef = useRef<NodeJS.Timeout | null>(null);

	const copyToClipboard = (text: string | undefined) => {
		if (text) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					setCopyLoading(true);

					setCopiedIndicator(true);
					setCopiedIndicatorRef.current = setTimeout(() => {
						setCopiedIndicator(false);
					}, 2000);
				})
				.catch((error) => {
					console.error(error as Error);
					setCopiedIndicator(false);
				})
				.finally(() => {
					setCopyLoading(false);
				});
		}
	};

	return (
		<div className="ai-overflow-x overflow-x-scroll overflow-y-hidden w-fit flex flex-col gap-2">
			<ReactMarkdown
				components={{
					ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
					li: ({ children }) => (
						<li className="text-black font-medium">{children}</li>
					),
					a: ({ href }) => (
						<a
							href={href}
							className="text-[#007bff] decoration-0 font-medium transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							{"Page"}
						</a>
					),
				}}
			>
				{part.text}
			</ReactMarkdown>

			<div className="flex flex-row gap-4 w-full justify-start items-center">
				{thumbsType === "N/A" ? (
					<>
						<button
							onClick={() => {
								setThumbsType("liked");
							}}
							className="no-style-btn flex justify-center items-center"
						>
							<Image
								className="h-auto min-w-[15px] max-w-[15px]"
								src={"/icons/thumbs.svg"}
								alt="icon"
								width={20}
								height={20}
							/>
						</button>
						<button
							onClick={() => {
								setThumbsType("disliked");
							}}
							className="no-style-btn flex justify-center items-center rotate-180"
						>
							<Image
								className="h-auto min-w-[15px] max-w-[15px]"
								src={"/icons/thumbs.svg"}
								alt="icon"
								width={20}
								height={20}
							/>
						</button>
					</>
				) : (
					<>
						{thumbsType === "liked" && (
							<button
								onClick={() => {
									setThumbsType("liked");
								}}
								className="no-style-btn flex justify-center items-center"
							>
								<Image
									className="h-auto min-w-[15px] max-w-[15px]"
									src={
										thumbsType === "liked"
											? "/icons/thumbs_filled.svg"
											: "/icons/thumbs.svg"
									}
									alt="icon"
									width={20}
									height={20}
								/>
							</button>
						)}

						{thumbsType === "disliked" && (
							<button
								onClick={() => {
									setThumbsType("disliked");
								}}
								className="no-style-btn flex justify-center items-center rotate-180"
							>
								<Image
									className="h-auto min-w-[15px] max-w-[15px]"
									src={
										thumbsType === "disliked"
											? "/icons/thumbs_filled.svg"
											: "/icons/thumbs.svg"
									}
									alt="icon"
									width={20}
									height={20}
								/>
							</button>
						)}
					</>
				)}

				{copyLoading ? (
					<button
						disabled
						onClick={() => copyToClipboard(part.text)}
						className="no-style-btn flex justify-center items-center opacity-50"
					>
						<Image
							className="h-auto min-w-[15px] max-w-[15px]"
							src={"/icons/copy.svg"}
							alt="icon"
							width={20}
							height={20}
						/>
					</button>
				) : copiedIndicator ? (
					<button
						disabled
						onClick={() => copyToClipboard(part.text)}
						className="flex justify-center items-center gap-1 text-sm"
					>
						<Image
							className="h-auto min-w-[15px] max-w-[15px]"
							src={"/icons/copied.svg"}
							alt="icon"
							width={20}
							height={20}
						/>

						<p className="text-gray-500">copied</p>
					</button>
				) : (
					<button
						onClick={() => copyToClipboard(part.text)}
						className="no-style-btn flex justify-center items-center"
					>
						<Image
							className="h-auto min-w-[15px] max-w-[15px]"
							src={"/icons/copy.svg"}
							alt="icon"
							width={20}
							height={20}
						/>
					</button>
				)}
			</div>
		</div>
	);
};
