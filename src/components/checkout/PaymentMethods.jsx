import { useLanguage } from "../../context/LanguageContext";
import { MdCreditCard, MdAccountBalance, MdPayments } from "react-icons/md";

function PaymentMethods({ paymentMethod, setPaymentMethod }) {
	const { t } = useLanguage();
	const methods = [
		{
			id: "card",
			label: t("checkout","card"),
			icon: <MdCreditCard size={22} />
		},
		{
			id: "paypal",
			label: t("checkout","paypal"),
			icon: <MdPayments size={22} />
		},
		{
			id: "",
			label: t("checkout","bank"),
			icon: <MdAccountBalance size={22} />
		}
	];

	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold dark:text-white">{t("checkout","paymentMethod")}</h2>
			{methods.map((method) => (
				<label key={method.id} className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${paymentMethod === method.id
					? "border-blue-600 bg-blue-50 dark:bg-gray-800"
					: "border-gray-300 dark:border-gray-700"
				}`} >
					<input type="radio" name="paymentMethod" value={method.id} checked={paymentMethod === method.id}
						onChange={() => setPaymentMethod(method.id)} />

						<div className="text-blue-600">{method.icon}</div>
						<span className="dark:text-white">{method.label}</span>
				</label>
			))}
		</div>
	);
}

export default PaymentMethods;