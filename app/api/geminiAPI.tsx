"use client";

import geminiSystemInstruction from "@/components/AIAssistant/geminiSystemInstruction";
import {
	Content,
	GenerateContentResult,
	GoogleGenerativeAI,
} from "@google/generative-ai";
import { useEffect, useState } from "react";

export default function GeminiAPI() {
	const [historyResp, setHistoryResp] = useState<Content[]>([]);

	const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
	const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(apiKey);

	const model = genAI.getGenerativeModel({
		model: "gemini-1.5-flash-8b",
		systemInstruction: geminiSystemInstruction(),
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
				parts: [{ text: "Hello [Ignore this | 9jd&3vd%]" }],
			},
		],
	});

	async function AIChatbotSystem(userPrompt: string) {
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
	}

	useEffect(() => {
		const getConvoHistory = async () => {
			const history: Content[] = await chatSession.getHistory();
			setHistoryResp(history);
		};

		getConvoHistory();
	}, []);

	return { AIChatbotSystem, historyResp };
}
