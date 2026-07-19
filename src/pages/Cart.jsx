import { useCart } from "../context/CartContext.jsx";
import formatCurrency from "../utils/formatCurrency.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";

function Cart() {
	const {cartItems, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice} = useCart();
	const { language, toggleLanguage, t} = useLanguage();

	if (cartItems.length === 0) {
		return (
			<div className="max-w-5xl mx-auto py-16 text-center">
				<h1 className="text-3xl font-bold">{t("cart","cartEmpty")}</h1>
			</div>
		);
	}

	return (
		<div className="max-w-5xl mx-auto p-6 dark:text-white">
			<h1 className="text-3xl font-bold mb-8">{t("cart","title")}</h1>
			{cartItems.map(item => (
				<div key={item.id} className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 py-5">
					<div>
						<h2 className="font-semibold">{item.name}</h2>
						<p>{formatCurrency(item.price)}</p>
					</div>

					<div className="flex items-center gap-3">
						<button onClick={() => decreaseQuantity(item.id)}
							className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 cursor-pointer">-</button>
							<span>{item.quantity}</span>
							<button onClick={() => increaseQuantity(item.id)}
								className="px-3 py-1 bg-gray-200 hover:bg-gray-500 text-black rounded cursor-pointer">+</button>
					</div>
					<button onClick={() => removeFromCart(item.id)}
						className="text-red-600 font-semibold cursor-pointer">{t("cart","delete")}</button>
				</div>
			))}
			<div className="mt-8 flex justify-between items-center">
				<h2 className="text-3xl font-bold dark:text-white">Total: {formatCurrency(totalPrice)}</h2>
				<Link to="/checkout">
					<button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-bue-700 cursor-pointer">{t("cart","checkout")}</button>
				</Link>
			</div>
		</div>
	);
}

export default Cart;