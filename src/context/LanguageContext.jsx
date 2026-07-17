import { createContext, useContext, useState } from "react";
import texts from "../translations/texts.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(localStorage.getItem("language") || "es");
	const toggleLanguage = () => {
		const newLanguage = language === "es" ? "en" : "es";
		setLanguage(newLanguage);
		localStorage.setItem("language", newLanguage);
	};
	const t = (section, key) => {
		return texts[language][section][key];
	};

	return (
		<LanguageContext.Provider value={{language, toggleLanguage, t}}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);