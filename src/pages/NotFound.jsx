import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
	const { t } = useLanguage();

	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-7xl font-bold text-blue-600">404</h1>
			<h2 className="mt-4 text-3xl font-bold dark:text-white">{t("notFound","title")}</h2>
			<p className="mt-3 text-gray-600 dark:text-gray-300 max-w-md">
				{t("notFound","description")}
			</p>
			<Link to="/" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
				{t("notFound","button")}
			</Link>
		</div>
	);
}

export default NotFound;