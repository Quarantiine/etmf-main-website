"use client";

import { Content, Part } from "@google/generative-ai";
import Image from "next/image";
import React from "react";
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
	return (
		<div className="ai-overflow-x overflow-x-scroll overflow-y-hidden w-fit flex flex-col gap-4">
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

			{/* <div className="flex flex-row gap-4 w-full justify-start items-center">
				<button className="no-style-btn flex justify-center items-center">
					<Image
						className="h-auto min-w-[18px] max-w-[18px]"
						src={"/icons/thumb_up_filled.svg"}
						alt="icon"
						width={20}
						height={20}
					/>
				</button>

				<button className="no-style-btn flex justify-center items-center rotate-180">
					<Image
						className="h-auto min-w-[18px] max-w-[18px]"
						src={"/icons/thumb_up.svg"}
						alt="icon"
						width={20}
						height={20}
					/>
				</button>
			</div> */}
		</div>
	);
};
