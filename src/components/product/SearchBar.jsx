import { useLanguage } from "../../context/LanguageContext.jsx";

function SearchBar({ value, onChange }) {
	const { language, toggleLanguage, t} = useLanguage();

	return (
		<div className="mb-8">
			<input type="text" placeholder={t("search","searchProducts")} value={value} onChange={onChange}
				className="w-full border text-gray-500 dark:text-white font-semibold rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
		</div>
	);
}

export default SearchBar;