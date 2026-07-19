import { useLanguage } from "../../context/LanguageContext.jsx";

function AdminDashboard() {
	const { language, toggleLanguage, t} = useLanguage();

	return (
		<div className="max-w-6xl mx-auto py-10">
			<h1 className="text-3xl font-bold mb-8"></h1>
			<div className="grid md:grid-cols-3 gap-6">
				<h2 className="text-xl font-semibold">{t("admin","title")}</h2>
				<p className="mt-2 text-gray-600">{t("admin","adminPanel")}</p>
			</div>
			<div className="border rounded-lg p-6 shadow">
				<h2 className="text-xl font-semibold">{t("admin","newProduct")}</h2>
				<p className="mt-2 text-gray-600">{t("admin","createProduct")}</p>
			</div>
			<div className="border rounded-lg p-6 shadow">
				<h2 className="text-xl font-semibold">{t("admin","users")}</h2>
				<p className="mt-2 text-gray-600">{t("admin","managerUser")}</p>
			</div>
		</div>
	);
}

export default AdminDashboard;