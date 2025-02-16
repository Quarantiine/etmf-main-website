// import MeetingMinutes from "@/components/AboutUs/MeetingMinutes";
import OurTeam from "@/components/AboutUs/OurTeam";
import Section1 from "@/components/AboutUs/Section1";
import StatementsSection from "@/components/AboutUs/StatementsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
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
					text: "ETMF's story began with our Founder President and CEO Jared Manigault's deep passion for business, education, and a belief in the transformative power of mindset.",
				},
				{
					text: "Witnessing firsthand the need for student empowerment and understanding the impact of a growth mindset on students and society, he envisioned an organization that would revolutionize education through innovation and technology.",
				},
				{
					text: "Today, ETMF is turning that vision into reality through groundbreaking work in technology-driven learning platforms and transformative educational initiatives.",
				},
			],
		},
		{
			title: "Our Core Values",
			paragraphs: [
				{
					text: "Education: Education is the ultimate form of empowerment, providing the tools and knowledge necessary to build the future. We believe in making high-quality education accessible to all, creating pathways for extraordinary success.",
				},
				{
					text: "Empowerment: An empowered mindset is among the most powerful agents of positive change. We foster environments where individuals can discover and harness their full potential.",
				},
				{
					text: "Innovation: We leverage emerging technology and forward-thinking solutions to revolutionize education and transform communities. Our commitment to innovation drives everything we do.",
				},
				{
					text: "Inspiration: We inspire learners to stand in their excellence and contribute to a more equitable society, fostering a culture of continuous growth and positive change.",
				},
			],
		},
		{
			title: "Our Vision",
			paragraphs: [
				{
					text: "To provide access across education and community to high-quality, innovative education that empowers them to reach their full potential and contributes to a more equitable society.",
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

					{/* <MeetingMinutes /> */}

					<div className="flex flex-col justify-center items-center">
						<div className="statement-sections flex flex-col justify-center items-center relative pb-20 gap-20">
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
