import MeetingMinutes from "@/components/AboutUs/MeetingMinutes";
import OurTeam from "@/components/AboutUs/OurTeam";
import Section1 from "@/components/AboutUs/Section1";
import StatementsSection from "@/components/AboutUs/StatementsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | ETM Foundation",
	description:
		"Empowerment Through Mindset Foundation (ETMF) transforms lives through innovative, mindset-based learning. Led by a visionary board, we empower individuals and communities to build a brighter future. Learn more about our story, vision, and mission.",
};

interface StatementListTypes {
	title: string;
	paragraphs: {
		text: string;
	}[];
}

export default function AboutUs(): React.ReactElement {
	const statementsList: StatementListTypes[] = [
		{
			title: "Our Story",
			paragraphs: [
				{
					text: "ETMF’s story began with our Founder President and CEO Jared Manigault’s deep passion for business, education and a belief in the transformative power of mindset.",
				},
				{
					text: "Witnessing firsthand the need for student empowerment and knowing the impact that a growth mindset could have on students and by extension the future, he envisioned an organization that would equip students, employees, communities and individuals with the tools and resources needed to achieve their dreams.",
				},
				{
					text: "Today, ETMF is turning that vision into reality through our groundbreaking work in technology-driven learning platforms, curating innovative and empowering programs and initiatives.",
				},
			],
		},
		{
			title: "Our Values",
			paragraphs: [
				{
					text: "Education: At the heart of the Empowerment Through Mindset Foundation (ETMF) lies a profound belief in the transformative power of education. We see education not merely as a means to an end, but as the very foundation upon which individuals and communities can build brighter futures. It is the cornerstone of personal growth, the key to unlocking potential, and the catalyst for positive change in society.",
				},
				{
					text: "Innovation: Innovation drives everything we do. We embrace creativity, pursue new ideas, and harness technology to deliver transformative learning experiences. This commitment shines through in our AI-powered learning management system, our development of virtual and augmented reality learning tools, and our exploration of emerging technologies. By continually advancing our approach, we aim to push the boundaries of education and empower individuals in ways never before possible.",
				},
				{
					text: "Inspiration: We believe in the transformative power of inspiration to ignite action and foster positive change. Our goal is to empower individuals to believe in themselves, embrace their potential, and pursue their dreams. Through our programs, content, and community engagement, we aim to cultivate a culture of hope, resilience, and possibility.",
				},
				{
					text: "Empowerment: Empowerment is the cornerstone of ETMF's mission. We are dedicated to providing individuals with the resources, opportunities, and support necessary to take control of their lives and create a meaningful impact. This commitment is exemplified through initiatives such as the Student Activity Program and the Access to Education Program, which aim to remove barriers to success for student leaders and financially marginalized individuals. Through all our initiatives, we strive to empower individuals to become confident, self-reliant, and capable agents of change in their own lives and within their communities.",
				},
			],
		},
		{
			title: "Our Mission",
			paragraphs: [
				{
					text: "Empowering students, employees, communities and individuals to transform their lives through carefully curated innovative mindset based learning experiences designed to equip them to build a better tomorrow.",
				},
			],
		},
	];

	return (
		<>
			<main className="flex flex-col w-full h-auto justify-center items-center">
				<Section1 />

				<div className="default-width flex flex-col gap-20 pt-10">
					<div className="flex flex-col gap-5">
						<OurTeam />
					</div>

					<MeetingMinutes />

					<div className="flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-center relative pb-20 gap-20">
							<div className="check-point-line" />

							{statementsList.map(
								(statement: StatementListTypes, index: number) => {
									return (
										<StatementsSection key={index} statement={statement} />
									);
								}
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
