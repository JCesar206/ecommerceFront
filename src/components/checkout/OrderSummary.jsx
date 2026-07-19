import { useCart } from "../../context/CartContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import formatCurrency from "../../utils/formatCurrency.js"
import { MdVerified, MdLocalShipping, MdSecurity } from "react-icons/md";

function OrderSummary() {
	const { cartItems, totalPrice} = useCart();
	const { t } = useLanguage();

	return (
		<div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sticky top-6">
			<h2 className="text-2xl font-bold mb-6 dark:text-white">{t("checkout","summary")}</h2>
			<div className="space-y-4">
				{cartItems.map(item => (
					<div key={item.id} className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
						<div>
							<p className="font-semibold dark:text-white">{item.name}</p>
							<p className="text-sm text-gray-500">x {item.quantity}</p>
						</div>

						<p className="font-semibold dark:text-white">
							{formatCurrency(item.price * item.quantity)}
						</p>
					</div>
				))}
			</div>

			<div className="flex justify-between mt-6 text-xl font-bold dark:text-white">
				<span>Total: </span>
				<span>{formatCurrency(totalPrice)}</span>
			</div>

			<div className="mt-8 space-y-4 text-sm">
				<div className="flex items-center gap-3 dark:text-gray-300">
					<MdSecurity className="text-green-600" size={22} />
					<span>{t("checkout","securePayment")}</span>
				</div>
				<div className="flex items-center gap-3 dark:text-gray-300">
					<MdLocalShipping className="text-blue-600" size={22} />
					<span>{t("checkout","fastShipping")}</span>
				</div>
				<div className="flex items-center gap-3 dark:text-gray-300">
					<MdVerified className="text-purple-600" size={22} />
					<span>{t("checkout","warranty")}</span>
				</div>
			</div>
		</div>
	);
}

export default OrderSummary;