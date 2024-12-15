// app/api/geminiChat/route.ts

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// This will handle the POST request
export async function POST(req: Request) {
	// Only allow POST requests
	const { userPrompt, systemInstruction, historyResp } = await req.json();

	try {
		// Securely access the API key
		const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

		if (!GEMINI_API_KEY) {
			return new NextResponse(
				JSON.stringify({ error: "API key not configured" }),
				{ status: 500 }
			);
		}

		// Set up the Gemini API client
		const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash-8b",
			systemInstruction,
		});

		const generationConfig = {
			temperature: 1.5,
			topP: 0.95,
			topK: 40,
			maxOutputTokens: 8192,
			responseMimeType: "text/plain",
		};

		// Start a chat session with the history
		const chatSession = model.startChat({
			generationConfig,
			history: historyResp,
		});
		const result = await chatSession.sendMessage(userPrompt);

		// Send the response text back to the client
		return new NextResponse(JSON.stringify({ text: result.response.text() }), {
			status: 200,
		});
	} catch (error) {
		console.error("Error with Gemini API:", error);
		return new NextResponse(
			JSON.stringify({
				error: "An error occurred while communicating with Gemini API.",
			}),
			{ status: 500 }
		);
	}
}
