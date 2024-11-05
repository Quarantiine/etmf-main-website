import Image from "next/image";

// Section1 component that includes a title, description, and design elements
export default function Section1(): React.ReactElement {
	return (
		<>
			{/* Section container with padding and vertical gap */}
			<div className="w-full h-fit flex flex-col gap-7 pt-10 relative">
				<>
					{/* Main heading for larger screens */}
					<h1 className="hidden sm:block text-5xl montserrat-bold">
						Empowerment Through Mindset Foundation
					</h1>

					{/* Alternate heading for smaller screens */}
					<h1 className="block sm:hidden text-4xl montserrat-bold">
						Empower-ment Through Mindset Foundation
					</h1>
				</>

				{/* Section paragraph texts */}
				<div className="flex flex-col gap-3">
					<p className="text-lg">
						ETMF is building the future of education—a world where learning is
						infused with innovation, powered by technology, and made engaging
						through impactful content.
					</p>

					<p className="text-lg">
						We empower students, employees, communities and individuals to reach
						their full potential, and create pathways for extraordinary success.
					</p>
				</div>

				{/* Colored dots for design purposes */}
				<div className="flex justify-start items-center gap-8">
					{/* Hidden on smaller screens, visible on larger screens */}
					<div className="hidden sm:block rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-1" />
					{/* Visible colored dots */}
					<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-3" />
					<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-4" />
					<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-green-2" />
					<div className="rounded-full min-w-5 min-h-5 max-w-5 max-h-5 bg-yellow" />
				</div>
			</div>

			{/* Renders the HeaderImage component below the section */}
			<HeaderImage />
		</>
	);
}

// HeaderImage component that displays a background image and graphical elements
const HeaderImage = (): JSX.Element => {
	return (
		<>
			{/* Hidden on small screens, visible on medium and larger screens */}
			<div className="hidden md:flex rounded-b-full w-full h-[500px] border-8 border-[#FFD700] bg-green-3 relative justify-center items-center overflow-hidden">
				<Image
					className="z-10 object-cover"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/v1729461293/group_img.png"
					}
					alt="image"
					fill
					priority={true}
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					draggable={false}
				/>

				<Image
					className="z-0 object-cover -translate-y-3 opacity-20 grayscale animate-pulse"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/v1729461293/group_img.png"
					}
					alt="image"
					fill
					priority={true}
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
					draggable={false}
				/>

				{/* Yellow bar at the bottom */}
				<div className="w-full h-2.5 bg-yellow absolute bottom-0 left-0 z-20" />
			</div>

			{/* Visible on small screens only, background image with overlay */}
			<div className="flex md:hidden absolute top-0 right-0 w-full h-[600px] bg-green-2 grayscale opacity-20 justify-center items-center overflow-hidden z-[-1]">
				{/* Main image in smaller screens */}
				<Image
					className="z-10 w-auto h-auto object-cover"
					src={
						"https://res.cloudinary.com/dnmdoncxt/image/upload/v1729461293/group_img.png"
					}
					alt="image"
					fill
					priority={true}
					sizes="(max-width: 2000px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Gradient overlay */}
				<div className="bg-gradient-to-b to-white via-white from-transparent w-full h-64 z-30 absolute bottom-0 right-0" />
			</div>
		</>
	);
};
