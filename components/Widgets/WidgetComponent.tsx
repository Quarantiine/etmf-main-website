"use client";

import Image from "next/image";
import Link from "next/link";
// import { Sidetab } from "@typeform/embed-react";
import React from "react";

export default function WidgetComponent(): React.ReactElement {
	return (
		<>
			{/* <Sidetab autoClose keepSession id="ULvIvS58" buttonText="Feedback" /> */}

			<div className="fixed bottom-5 left-0 z-50 text-white">
				<Link
					href={
						"https://docs.google.com/forms/d/e/1FAIpQLSfgKKg44BaBRps6JjVtx_6jy68q1pxT1VJbnBWchvoX556Lqw/viewform?usp=sf_Link"
					}
					target="_blank"
					className="w-fit h-32 p-5 bg-green-3 rounded-r-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.4)] relative no-style-btn block"
				>
					<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 flex justify-center items-center gap-2">
						<Image src={"/icons/chat.svg"} alt="icon" width={20} height={20} />
						<p>Feedback</p>
					</div>
				</Link>
			</div>
		</>
	);
}
