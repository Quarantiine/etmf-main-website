import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ResourceFeaturedArticles = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-start gap-5 w-full">
				<div className="flex flex-col justify-center items-start">
					<h1 className="title-2 font-bold">Featured Resources</h1>
					<p className="text-gray-500">Rights of Undocumented Immigrants</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full justify-center items-center gap-5">
					<div className="w-full h-full flex justify-center items-center">
						<Link
							target="_blank"
							href={"https://www.ilrc.org/red-cards-tarjetas-rojas"}
							className="no-style-btn flex flex-col justify-center items-start gap-3 bg-white border border-[#eee] rounded-xl p-5 text-start w-full h-full"
						>
							<div className="w-full h-48 md:h-full rounded-xl bg-gray-200 relative overflow-hidden">
								<Image
									className="object-cover"
									src={
										"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/ICE/klqbbodxpoa6nfqlzgf4"
									}
									alt="image"
									fill
									sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>

							<h1 className="title-2 font-semibold">Know Your Rights</h1>

							<p>
								Understand your constitutional rights during interactions with
								immigration authorities.
							</p>
						</Link>
					</div>

					<div className="flex flex-col justify-center items-center gap-5 w-full">
						<Link
							target="_blank"
							href={"https://www.wehaverights.us/"}
							className="no-style-btn flex flex-col justify-center items-start gap-3 bg-white border border-[#eee] rounded-xl p-5 text-start w-full"
						>
							<div className="w-full h-48 rounded-xl bg-gray-200 relative overflow-hidden">
								<Image
									className="object-cover"
									src={
										"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/ICE/urjj7yhks8tnixtp5rtv"
									}
									alt="image"
									fill
									sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>

							<h1 className="title-2 font-semibold">
								Rights in Many Languages
							</h1>
							<p className="line-clamp-3">
								{'Visit "We Have Rights" for videos in multiple languages.'}
							</p>
						</Link>
						<Link
							target="_blank"
							href={
								"https://www.ilrc.org/resources/community/know-your-rights-toolkit"
							}
							className="no-style-btn flex flex-col justify-center items-start gap-3 bg-white border border-[#eee] rounded-xl p-5 text-start w-full"
						>
							<div className="w-full h-48 rounded-xl bg-gray-200 relative overflow-hidden">
								<Image
									className="object-cover"
									src={
										"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/v1/ICE/ug0gtpma8igy1ensfwmj"
									}
									alt="image"
									fill
									sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>

							<h1 className="title-2 font-semibold">Assert Your Rights</h1>
							<p className="line-clamp-3">
								Access detailed guides and resources on asserting your rights.
							</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
