"use client";

import { Content } from "@google/generative-ai";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function AIRoles({ conversation }: { conversation: Content }) {
	return (
		<>
			{conversation.role === "model" ? (
				<div className="flex flex-col">
					<div className="flex flex-row gap-1 justify-start items-center">
						<Image
							className="object-cover w-auto h-[20px]"
							src={"/etm_foundation_logo.png"}
							alt="logo"
							width={25}
							height={25}
						/>

						<p className="lato-bold">Zhyra (AI)</p>
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
											style={{
												color: "black",
												fontWeight: "medium",
											}}
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
			) : (
				<div className="flex flex-col">
					<div className="flex flex-row gap-1 justify-start items-center">
						<div className="w-4 h-4 bg-green-1 rounded-full" />
						<p className="lato-bold">You</p>
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
											style={{
												color: "black",
												fontWeight: "medium",
											}}
										>
											{children}
										</li>
									),
									a: ({ href, children }) => (
										<a href={href} target="_blank" rel="noopener noreferrer">
											{children}
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
