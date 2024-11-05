import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { SetStateAction } from "react";

// Define the types for the URL list below
interface urlListTypes {
	text: string;
	urlPath: string;
}

// Define the URL's component
export const URLs = ({
	item,
	setOpenMobileNavbar,
}: {
	item: urlListTypes;
	setOpenMobileNavbar: React.Dispatch<SetStateAction<boolean>>;
}): React.ReactElement => {
	const router: AppRouterInstance = useRouter();

	const handleHref = () => {
		setOpenMobileNavbar(false);
		router.push(item.urlPath);
	};

	return (
		<>
			{/* Display the text for the navigation item */}

			<button onClick={handleHref} className={`relative w-fit no-style-btn`}>
				<p>{item.text}</p>
			</button>
		</>
	);
};
