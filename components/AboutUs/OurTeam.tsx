"use client";

import React from "react";
import PersonalModal from "./PersonalModal";
import teamData from "@/data/teamData.json";

interface TeamDataTypes {
	name: string;
	position: string;
	bio: string;
	socials: {
		linkedIn: string;
		img: string;
	}[];
	picture: string;
}

const OurTeam: React.FC = () => {
	return (
		<>
			<h1 className="montserrat-bold text-5xl">Board of Directors</h1>

			<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 text-white relative gap-10 justify-center sm:justify-start items-center w-full h-full">
				{teamData.slice(0, 6).map((team: TeamDataTypes, index: number) => {
					return <PersonalModal key={index} team={team} />;
				})}
			</div>
		</>
	);
};

export default OurTeam;
