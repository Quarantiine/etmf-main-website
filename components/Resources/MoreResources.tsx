"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import resourceData from "@/data/resourceData.json";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const MoreResources = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [openCategoriesDropdown, setOpenCategoriesDropdown] =
		useState<boolean>(false);

	useEffect(() => {
		const closeModal = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".resource-categories")) {
				setOpenCategoriesDropdown(false);
			}
		};

		document.addEventListener("mousedown", closeModal);
		return () => document.removeEventListener("mousedown", closeModal);
	}, []);

	const handleOpenCategories = () => {
		setOpenCategoriesDropdown(!openCategoriesDropdown);
	};

	const handleCategoryClicked = (category: string) => {
		setSearchQuery(category);
		setOpenCategoriesDropdown(false);
	};

	useEffect(() => {
		const animation = gsap.context(() => {
			gsap.to(".more-resources-child", {
				opacity: 1,
				translateY: 0,
				stagger: {
					each: 0.2,
				},
				scrollTrigger: {
					trigger: ".more-resources-container",
					start: "top 70%",
					end: "bottom bottom",
					scrub: true,
					toggleActions: "play none none reverse",
					// markers: true,
				},
			});
		});

		return () => {
			animation.revert();
		};
	}, []);

	return (
		<>
			<div className="flex flex-col justify-center items-start text-start w-full gap-5 more-resources-container">
				<div className="flex flex-col justify-center items-start gap-5 w-full">
					<div className="flex flex-col justify-center items-start">
						<h1 className="title-2 font-bold">More Resources</h1>
						<p className="text-gray-500">
							Explore carefully curated resources designed to empower
						</p>
					</div>

					<div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
						<div className="w-full h-fit rounded-xl flex justify-center items-center gap-1 relative bg-gray-100 pl-7">
							<Image
								className="object-cover h-auto w-[25px] absolute top-1/2 -translate-y-1/2 left-3"
								src={"/icons/search.svg"}
								alt="image"
								width={30}
								height={30}
							/>

							<input
								className="input-field-style bg-transparent"
								type="search"
								name="search"
								id="search"
								placeholder="Search Article"
								onChange={(e) => setSearchQuery(e.target.value)}
								value={searchQuery}
							/>
						</div>

						<div className="flex flex-col relative justify-center items-center w-full sm:w-auto">
							<button
								onClick={handleOpenCategories}
								className="resource-categories styled-btn w-full sm:w-auto"
							>
								Categories
							</button>

							{openCategoriesDropdown && (
								<div className="resource-categories absolute top-12 right-0 bg-white rounded-xl shadow-md flex flex-col justify-start items-start gap-3 w-[250px] h-[350px] default-overflow overflow-x-hidden overflow-y-scroll list-disc py-5 px-5 z-10">
									{[
										...new Set(resourceData.map((value) => value.category)),
									].map((category, index) => {
										return (
											<React.Fragment key={index}>
												<button
													onClick={() => handleCategoryClicked(category)}
													className="no-style-btn text-start hover:text-green-500"
												>
													{category}
												</button>
											</React.Fragment>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-10">
					{resourceData.map((data, index) => {
						if (
							data.title
								.normalize("NFD")
								.replace(/\p{Diacritic}/gu, "")
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							data.category
								.normalize("NFD")
								.replace(/\p{Diacritic}/gu, "")
								.toLowerCase()
								.includes(searchQuery.toLowerCase())
						) {
							return (
								<div
									key={index}
									className="more-resources-child w-fit h-fit translate-y-20 opacity-0"
								>
									<div className="flex flex-col justify-center items-start gap-3 bg-white border border-[#eee] rounded-xl p-5 text-start h-fit">
										<p className="text-sm text-gray-500">{data.category}</p>
										<h1 className="title-2">{data.title}</h1>
										<p className="line-clamp-4">{data.description}</p>

										<div className="flex flex-col justify-center items-start w-full">
											{data.link.map((href, index) => {
												return (
													<React.Fragment key={index}>
														<Link
															href={href.url}
															className="no-style-btn text-green-3 w-full"
															target="_blank"
														>
															{href.urlName} (Link)
														</Link>
													</React.Fragment>
												);
											})}
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};
