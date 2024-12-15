"use client";

import GeminiSystemInstruction from "@/components/AIAssistant/geminiSystemInstruction";
import {
	Content,
	GenerateContentResult,
	GoogleGenerativeAI,
} from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
// import { NextApiRequest, NextApiResponse } from "next";

// interface ErrorResponse {
// 	error: string;
// }

// interface GeminiData {
// 	someKey: string[] | number[];
// }

// async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<GeminiData | ErrorResponse>
// ) {
// 	const apiKey = process.env.GEMINI_API_KEY;

// 	if (!apiKey) {
// 		return res.status(500).json({ error: "API key missing" });
// 	}

// 	try {
// 		const response = await fetch("https://api.gemini.com/v1/some_endpoint", {
// 			headers: {
// 				Authorization: `Bearer ${apiKey}`,
// 			},
// 		});

// 		if (!response.ok) {
// 			return res
// 				.status(response.status)
// 				.json({ error: "Failed to fetch data" });
// 		}

// 		const data: GeminiData = await response.json();

// 		return res.status(200).json(data);
// 	} catch {
// 		return res.status(500).json({ error: "An unexpected error occurred" });
// 	}
// }

export default function GeminiAPI() {
	const { systemInstruction } = GeminiSystemInstruction();

	const [historyResp, setHistoryResp] = useState<Content[]>([]);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [systemLanguage, setSystemLanguage] = useState<string>("English");

	const errorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const apiKey = process.env.NEXT_PUBLIC_GEMINI_API!;
	const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(apiKey);

	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-flash-8b",
		systemInstruction: systemInstruction,
	});

	const generationConfig = {
		temperature: 1.5,
		topP: 0.95,
		topK: 40,
		maxOutputTokens: 8192,
		responseMimeType: "text/plain",
	};

	const chatSession = model.startChat({
		generationConfig,
		history: [
			...historyResp,

			{
				role: "user",
				parts: [
					{
						text: `[IMPORTANT: Speak the language the user wants you to speak to maximize engagement. ONLY speak in ${systemLanguage} for the me even if I speak another language. (Ignore this: 9jd&3vd%)]`,
					},
				],
			},
		],
	});

	async function AIChatbotSystem(userPrompt: string) {
		if (errorRef.current !== null) {
			clearTimeout(errorRef.current);
		}

		setLoading(true);

		try {
			setHistoryResp((prevHistory) => [
				...prevHistory,
				{
					role: "user",
					parts: [{ text: userPrompt }],
				},
			]);

			const result: GenerateContentResult = await chatSession.sendMessage(
				userPrompt
			);

			setHistoryResp((prevHistory) => [
				...prevHistory,
				{
					role: "model",
					parts: [{ text: result.response.text() }],
				},
			]);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred.");
			}

			errorRef.current = setTimeout(() => {
				setError("");
			}, 3000);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const getConvoHistory = async () => {
			const history: Content[] = await chatSession.getHistory();
			setHistoryResp(history);
		};

		getConvoHistory();
	}, []);

	return {
		AIChatbotSystem,
		historyResp,
		error,
		loading,
		setSystemLanguage,
		systemLanguage,
	};
}
