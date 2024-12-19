import React from "react";
import Link from "next/link";

interface LegalDocumentTypes {
	title?: string;
	description?: DescriptionType[];
	points?: PointType[];
}

interface DescriptionType {
	text?: string;
}

interface PointType {
	textHeader?: string;
	text?: string;
}

export default function TableOfContents({
	legalDocuments,
}: {
	legalDocuments: LegalDocumentTypes[];
}) {
	return (
		<>
			<div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-2 w-full">
				<h1 className="text-3xl montserrat-bold text-gray-600">
					Table of Contents
				</h1>

				<div className="flex flex-col justify-center items-center sm:justify-start sm:items-start w-full">
					{legalDocuments.map((terms: LegalDocumentTypes, index: number) => {
						const sanitizedTitle = terms.title
							?.replace(/\s+/g, "-")
							.toLowerCase();

						return (
							<React.Fragment key={index}>
								<Link
									href={`#${sanitizedTitle}`}
									className="text-green-500 no-style-btn underline"
								>
									{`${index + 1}. ${terms.title}`}
								</Link>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
}
