import { FaHome, FaLinkedin, FaGithub, FaEnvelope, FaLink } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { VscDeveloperTools } from "react-icons/vsc";

function Footer() {
	const { darkMode } = useTheme();
	const { language, toggleLanguage, t} = useLanguage();
	return (
		<footer className={`py-8 transition-colors duration-300
			${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700"}`}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col items-center gap-5">
						<h2 className="text-xl font-bold">DevShop Ecommerce FullStack</h2>

						<div className="flex gap-6 text-2xl">
							<a href="http://julioym.asteroi.dev/" target="_blank" rel="noopener noreferrer"
        			className="hover:scale-110 transition-transform hover:text-blue-600" aria-label="Home Page">
        				<FaHome size={18} title={t("home")}/>
      				</a>
							<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer"
							className="hover:scale-110 transition-transform hover:text-blue-600" aria-label="Github">
								<FaGithub size={18} />
							</a>
							<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer"
							className="hover:scale-110 transition-transform hover:text-blue-600" aria-label="LinkedIn">
								<FaLinkedin size={18} />
							</a>
							<a href="mailto:jcesary06@gmail.com" className="hover:scale-110 transition-transform hover:text-blue-600" aria-label="Gmail"><FaEnvelope size={18} /></a>
						</div>
					</div>
				</div>
			<div className="text-center">
				<p className="flex items-center justify-center gap-2 text-sm text-center py-2">
					&copy; {new Date().getFullYear()} <span>{t("footer","title")}</span> | 
					<VscDeveloperTools size={18}/> Juls | <span>{t("footer","rights")}</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;