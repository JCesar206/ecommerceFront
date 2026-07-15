import { FaLinkedin, FaGithub, FaEnvelope, FaLink } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext.jsx";

function Footer() {
	const { darkMode } = useTheme();

	return (
		<footer className={`py-8 transition-colors duration-300
			${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700"}`}>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col items-center gap-5">
						<h2 className="text-xl font-bold">DevShop Ecommerce FullStack</h2>

						<div className="flex gap-6 text-2xl">
							<a href="https://github.com/JCesar206" target="_blank" rel="noreferrer"
							className="hover:scale-110 transition-transform" aria-label="Github">
								<FaGithub size={18} />
							</a>
							<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noreferrer"
							className="hover:scale-110 transition-transform" aria-label="LinkedIn">
								<FaLinkedin size={18} />
							</a>
							<a href="mailto:jcesar206@hotmail.com" className="hover:scale-110 transition-transform" aria-label="Gmail"><FaEnvelope size={18} /></a>
						</div>
					</div>
				</div>
			<div className="text-center">
				<p className="text-sm text-center py-2">
					&copy; {new Date().getFullYear()} DevShop FullStack. | Juls | Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}

export default Footer;