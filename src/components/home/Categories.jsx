import { FaLaptop, FaKeyboard, FaMouse, FaHeadphones } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Categories() {
	const { t } = useLanguage();
	const categories = [
		{
			icon: <FaLaptop size={40} />,
			title: t("home","laptops"),
		},
		{
			icon: <FaKeyboard size={40} />,
			title: t("home","keyboard"),
		},
		{
			icon: <FaMouse size={40} />,
			title: t("home","mice"),
		},
		{
			icon: <FaHeadphones size={40} />,
			title: t("home","audio"),
		},
	];

	return (
		<section className="max-w-7xl mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t("home","categories")}</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{categories.map((category, index) => (
					<div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
						<div className="text-blue-600 mb-4">{category.icon}</div>
						<h3 className="font-semibold dark:text-white">{category.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default Categories;