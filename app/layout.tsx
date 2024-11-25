import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import WidgetComponent from "@/components/Widgets/WidgetComponent";
import AIAssistant from "@/components/AIAssistant/AIAssistant";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/etm_foundation_logo.png" />
				<link rel="apple-touch-icon" href="/etm_foundation_logo.png" />

				<meta
					name="google-site-verification"
					content="Wqq0eG8Q-_ha081ePlpFcQf-mpGsCMTjcynBqsrbYNw"
				/>

				<meta name="robots" content="index, follow" />
			</head>

			<body className="h-auto w-full lato-regular text-lg">
				<main className="min-h-[50vw] w-full relative">
					<NavigationBar />
					<WidgetComponent />

					<AIAssistant />

					<div className="w-full mx-auto">{children}</div>
				</main>

				<Footer />
			</body>
		</html>
	);
}
