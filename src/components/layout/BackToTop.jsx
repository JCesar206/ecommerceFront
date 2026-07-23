import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button onClick={handleClick} aria-label="Back to top"
		className="fixed bottom-34 right-4 z-50 h-12 rounded-full bg-indigo-500 text-white items-center justify-center shadow-lg hover:bg-indigo-700 transition cursor-pointer">
			<FaArrowUp size={20} />
		</button>
	);
}