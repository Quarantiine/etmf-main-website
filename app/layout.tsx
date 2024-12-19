import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import WidgetComponent from "@/components/Widgets/WidgetComponent";
import AIAssistant from "@/components/AIAssistant/AIAssistant";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/etm_foundation_logo.png" />
				<link rel="apple-touch-icon" href="/etm_foundation_logo.png" />
				<link rel="canonical" href="URL" />

				<meta
					name="google-site-verification"
					content="jiUymk0Qjg-JYxEM7_e6LQ6exNFW0TbDnjNMsbcITqk"
				/>

				<meta name="robots" content="index, follow" />
			</head>

			<body className="h-auto w-full lato-regular text-lg">
				<main className="min-h-[50vw] w-full relative">
					<NavigationBar />
					<WidgetComponent />

					<AIAssistant />

					<div className="w-full mx-auto">
						{children}

						<SpeedInsights />
						<Analytics />
					</div>
				</main>

				<Footer />
			</body>
		</html>
	);
}
