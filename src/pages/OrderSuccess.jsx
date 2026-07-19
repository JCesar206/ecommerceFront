import { Link } from "react-router-dom";
import { MdCheckCircleOutline } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

function OrderSuccess() {
	const { t } = useLanguage();
	const orderNumber = `DEV-${Date.now().toString().slice(-6)}`;

	return (
		<div className="max-w-3xl mx-auto py-20 px-4 text-center">
			<MdCheckCircleOutline size={100} className="mx-auto text-green-600" />
			<h1 className="text-4xl font-bold mt-6 dark:text-white">{t("order","title")}</h1>
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t("order","description")}</p>

			<div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
				<p className="text-lg font-semibold dark:text-white">{t("order","number")}</p>
				<p className="text-2xl font-bold text-blue-600 mt-2">{orderNumber}</p>
			</div>

			<Link to="/products" className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
				{t("order","continue")}
			</Link>
		</div>
	);
}

export default OrderSuccess;