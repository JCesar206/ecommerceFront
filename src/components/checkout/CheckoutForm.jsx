import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import PaymentMethods from "./PaymentMethods.jsx";
import { useLanguage } from "../../context/LanguageContext";

function CheckoutForm() {
	const navigate = useNavigate();
	const { clearCart } = useCart();
	const { t } = useLanguage();
	const [paymentMethod, setPaymentMethod] = useState("card");
	const [form, setForm] = useState({name: "", email: "", phone: "", address: "", city: "", zipCode: ""});
	const nameInputRef = useRef(null);

	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearCart();
		navigate("/order-success");
	};

	const handleClear = () => {
		setForm({name: "", email: "", phone: "", address: "", city: "", zipCode: ""});
		setPaymentMethod("card");
		nameInputRef.current?.focus();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-gray-900 rounded-xl shadow p-6">
			<input ref={nameInputRef} type="text" name="name" placeholder={t("checkout","name")} value={form.name}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
			<input type="email" name="email" placeholder={t("checkout","email")} value={form.email}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
			<input type="tel" name="phone" placeholder={t("checkout","phone")} value={form.phone}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
			<input type="text" name="address" placeholder={t("checkout","address")} value={form.address}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
			<input type="text" name="city" placeholder={t("checkout","city")} value={form.city}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
			<input type="text" name="zipCode" placeholder={t("checkout","zipCode")} value={form.zipCode}
				onChange={handleChange} className="w-full border rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />

			<PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

			<div className="flex flex-col sm:flex-row gap-4">
				<button type="button" onClick={handleClear}
					className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer">
					{t("checkout", "clear")}
				</button>
				<button type="submit"
					className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 transition cursor-pointer">
					{t("checkout", "confirm")}
				</button>
			</div>
		</form>
	);
}

export default CheckoutForm;