import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { GrOverview } from "react-icons/gr";

function Hero() {
	const { language, toggleLanguage, t} = useLanguage();

	return (
		<section className="bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-6 py-24">
				<h1 className="text-5xl font-bold leading-tight">Ecommerce FullStack</h1>
				<p className="mt-6 text-lg text-slate-300 max-w-2xl">{t("home","title")}</p>
				<Link to="/products"
					className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
						{t("home","viewProducts")}
				</Link>
			</div>
		</section>
	);
}

export default Hero;