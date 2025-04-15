import { MainLayoutComponent } from "@/components/MainLayoutComponent";
import type { Metadata } from "next/types";

// Metadata object for the page, includes title and description for SEO and display purposes
export const metadata: Metadata = {
	title: "Home | Empowerment Through Mindset Foundation | Nonprofit",
	description:
		"Explore the ETM Foundation ecosystem to discover our offerings and learn more about our mission, impact, programs, and much more.",
};

// Home component which renders the main sections of the homepage
export default function Home(): React.ReactElement {
	return <MainLayoutComponent />;
}
