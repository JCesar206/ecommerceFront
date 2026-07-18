import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function CTA() {
	const { t } = useLanguage();

	return (
		<section className="py-20 px-4">
			<div className="max-w-5xl mx-auto rounded-2xl bg-blue-600 text-white p-10 text-center shadow-xl">
				<h2 className="text-4xl font-bold mb-4">{t("home","ctaTitle")}</h2>
				<p className="text-lg opacity-90 mb-8">{t("home","ctaDescription")}</p>
				<Link to="/products" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
					{t("home","ctaButton")}
				</Link>
			</div>
		</section>
	);
}

export default CTA;