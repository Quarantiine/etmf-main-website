// components/AIAssistant/GeminiAPI.tsx

"use client";

import { useState, useRef } from "react";
import GeminiSystemInstruction from "@/components/AIAssistant/GeminiSystemInstruction";
import { Content } from "@google/generative-ai";

export default function GeminiAPI() {
	const { systemInstruction } = GeminiSystemInstruction();

	const [historyResp, setHistoryResp] = useState<Content[]>([]);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [systemLanguage, setSystemLanguage] = useState<string>("English");

	const errorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	async function AIChatbotSystem(userPrompt: string) {
		if (errorRef.current !== null) {
			clearTimeout(errorRef.current);
		}

		setLoading(true);

		try {
			setHistoryResp((prevHistory) => [
				...prevHistory,
				{ role: "user", parts: [{ text: userPrompt }] },
			]);

			// Send the request to the server-side API route
			const response = await fetch("/api/geminiAPI", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userPrompt,
					systemInstruction,
					systemLanguage,
					historyResp,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				setHistoryResp((prevHistory) => [
					...prevHistory,
					{ role: "model", parts: [{ text: data.text }] },
				]);
			} else {
				setError(data.error);
			}
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

	return {
		AIChatbotSystem,
		historyResp,
		error,
		loading,
		setSystemLanguage,
		systemLanguage,
	};
}
