import React from "react";
import { Metadata } from "next";
import letterData from "@/data/letterData.json";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Letter",
	description:
		"We are committed to protecting educational rights and supporting our community through these challenging times",
};

export default function SafetyNRights(): React.ReactElement {
	return (
		<>
			<div className="default-width flex flex-col justify-center items-start gap-10 mx-auto py-16">
				<div className="flex justify-center items-center gap-2 w-full">
					<Image
						className="object-cover rounded-full h-auto w-[85px]"
						src={
							"https://res.cloudinary.com/dnmdoncxt/image/upload/c_fill,ar_1:1,g_auto/v1738564489/Untitled_2_wr6vfe.png"
						}
						alt="image"
						width={90}
						height={90}
					/>

					<div className="flex flex-col justify-center items-start gap-1">
						<p>Jared Manigault</p>
						<p className="text-sm text-gray-500">5 to 7 minute Read</p>
						<p className="text-sm text-gray-500">Feb 3, 2025</p>
					</div>

					<Image
						className="object-cover h-auto w-[85px] ml-auto"
						src={"/etm_foundation_logo.png"}
						alt="logo"
						width={90}
						height={90}
					/>
				</div>

				<div className="flex justify-start items-center gap-10 w-full">
					<div className="flex flex-col justify-center items-start gap-3">
						<h1 className="font-bold text-3xl">
							Message from the ETMF{" "}
							<span className="italic">President & CEO</span>
						</h1>

						<p>
							Dear Students, Educational Institutions, Families, and Community
							Members,
						</p>

						<p>
							As President and CEO of the Empowerment Through Mindset Foundation
							(ETMF), I am writing on{" "}
							<span className="font-semibold">
								behalf of the board of directors
							</span>{" "}
							to address the serious reality we face following the
							implementation of Senate Bill 4 (SB 4) in Texas and recent
							executive orders that have significantly impacted our community.
						</p>

						<p>
							We must acknowledge the painful truth that some of our community
							members have been deported, and many families have been separated.
							While we cannot reverse these actions, we can focus on empowering
							education and community by providing clear information about
							safety and rights.
						</p>
					</div>
				</div>

				<div className="flex flex-col justify-center items-start gap-10 py-5 w-full">
					{letterData.map((data, index) => {
						return (
							<div
								className="flex flex-col justify-center items-start gap-5"
								key={index}
							>
								<div className="flex flex-col gap-3 w-full">
									<h1 className="title-2 font-bold text-green-3">
										{data.mainTitle}
									</h1>
									{data.description.map((description, index2) => {
										return (
											<React.Fragment key={index2}>
												<p>{description.text}</p>
											</React.Fragment>
										);
									})}
								</div>

								<div className="flex flex-col justify-center items-start gap-5">
									{data.points.map((point, index3) => {
										return (
											<React.Fragment key={index3}>
												{data.pointMap ? (
													<div className="flex flex-col justify-center items-start">
														<p className="font-bold underline text-green-3">
															{point.textHeader}
														</p>
														<ul className="list-disc pl-5">
															{point.textList.map((list, index4) => {
																return (
																	<React.Fragment key={index4}>
																		<li>{list.text}</li>
																	</React.Fragment>
																);
															})}
														</ul>
													</div>
												) : (
													<div className="flex flex-col justify-center items-start">
														<p className="font-bold underline text-green-3">
															{point.textHeader}:{" "}
														</p>
														<p className="font-normal">{point.text}</p>
													</div>
												)}
											</React.Fragment>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>

				<div className="flex flex-col justify-center items-start italic gap-10">
					<p>With determination and solidarity,</p>

					<div className="flex flex-col justify-center items-start gap-0">
						<p className="font-bold">ETMF President and CEO</p>
						<p>Empowerment Through Mindset Foundation</p>{" "}
						<Link className="text-green-3 no-style-btn" href={"/resources"}>
							View Resources
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
