"use client";
import Link from "next/link";
import React from "react";

interface ProgramListTypes {
	id: string;
	title: string;
	subTitle: string;
	description: {
		text: string;
	}[];
	image: string;
	statementSection: {
		title: string;
		paragraphs: {
			textHeader: string;
			text: string;
		}[];
	}[];
}

interface StatementTypes {
	title: string;
	paragraphs: {
		textHeader: string;
		text: string;
	}[];
}

interface TextTypes {
	textHeader: string;
	text: string;
}

export default function ProgramPages({
	program,
}: {
	program: ProgramListTypes;
}): React.ReactElement {
	// const handleGoToTop = () => {
	// 	scrollTo(0, 0);
	// };

	return (
		<div className="flex justify-start items-start flex-col w-full h-full gap-10">
			<div className="w-fit h-full flex flex-col gap-2">
				<p className="lato-bold text-lg">Programs / {program.title}</p>
				<Link href={"/programs"} className="styled-btn mr-auto">
					Back
				</Link>
			</div>

			{/* <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
				<button onClick={handleGoToTop} className="styled-btn">
					Go To Top
				</button>
			</div> */}

			<div className="flex flex-col gap-5 w-full h-full relative pb-20">
				<div className="check-point-line" />

				<div className="flex flex-col justify-center items-start gap-5 w-full">
					<div className="flex flex-row gap-4 justify-start items-start h-fit">
						<div className="check-point-circles" />

						<div className="flex flex-col justify-start items-start">
							<h1 className="lato-regular text-lg">{program.subTitle}</h1>
							<h1 className="montserrat-bold text-4xl sm:text-5xl text-green-3">
								{program.title}
							</h1>
						</div>
					</div>

					<div className="flex flex-col justify-center items-start gap-5 w-full pl-14">
						{program.description.map(
							(descr: { text: string }, index: number) => {
								return (
									<React.Fragment key={index}>
										<p className="list-decimal">{descr.text}</p>
									</React.Fragment>
								);
							}
						)}
					</div>
				</div>

				<div className="flex flex-col gap-5 justify-center items-start">
					{program.statementSection.map(
						(statement: StatementTypes, index: number) => {
							return (
								<React.Fragment key={index}>
									<div className="flex flex-col gap-5 justify-center items-start">
										<div className="flex flex-row gap-4 justify-start items-center h-fit">
											<div className="check-point-circles" />
											<h1 className="montserrat-bold text-3xl sm:text-4xl">
												{statement.title}
											</h1>
										</div>

										<ul
											className={`flex flex-col gap-5 justify-center items-start pl-[100px]`}
										>
											{statement.paragraphs.map(
												(paragraph: TextTypes, index: number) => {
													return (
														<React.Fragment key={index}>
															{statement.paragraphs.map((value) => value)
																.length > 1 ? (
																<li className="list-decimal">
																	{paragraph.textHeader && (
																		<p className="lato-bold text-xl">
																			{paragraph.textHeader}
																		</p>
																	)}
																	{paragraph.text && <p>{paragraph.text}</p>}
																</li>
															) : (
																<li className="list-disc">
																	{paragraph.textHeader && (
																		<p className="lato-bold text-xl">
																			{paragraph.textHeader}
																		</p>
																	)}
																	{paragraph.text && <p>{paragraph.text}</p>}
																</li>
															)}
														</React.Fragment>
													);
												}
											)}
										</ul>
									</div>
								</React.Fragment>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}
