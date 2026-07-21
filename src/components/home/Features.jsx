import { MdLocalShipping, MdSecurity, MdSupportAgent } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

function Features() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <MdLocalShipping size={45} />,
			title: t("home","shippingtitle"),
			description: t("home","shippingDescription"),
		},
		{
			icon: <MdSecurity size={45} />,
			title: t("home","securitytitle"),
			description: t("home","securityDescription"),
		},
		{
			icon: <MdSupportAgent size={45} />,
			title: t("home","supporttitle"),
			description: t("home","supportDescription"),
		},
	];

	return (
		<section className="max-w-7xl mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
				{t("home","whyChooseUs")}
			</h2>

			<div className="grid gap-8 md:grid-cols-3">
				{features.map((feature, index) => (
					<div key={index} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 text-center transition hover:shadow-xl">
						<div className="flex justify-center text-blue-600 mb-4">{feature.icon}</div>
						<h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
						<p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Features;