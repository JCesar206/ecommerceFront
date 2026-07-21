import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CartContext.jsx";
import formatCurrency from "../../utils/formatCurrency.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

function ProductCard({ product }) {
	const { addToCart } = useCart();
	const { language, toggleLanguage, t} = useLanguage();
	const imageUrl = product.image ? ( product.image.startsWith("http") ? product.image :
	`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${product.image}`) : "/no-image.png";

	return (
		<article
		className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
			<img src={imageUrl} alt={product.name}
				className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105" onError={(e) => {e.target.src = "http://placehold.co/600x400?text=Sin+Imagen"; }}/>

			<div className="p-4 flex flex-col flex-1">
				<h2 className="text-lg font-semibold dark:text-white">{product.name}</h2>
				<p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{product.description}</p>
					<div className="flex justify-between items-center mt-4">
						<span className="text-2xl font-bold text-blue-600">
							{formatCurrency(product.price)}
						</span>
						<span className="text-sm text-gray-500 dark:text-gray-400">{product.stock}</span>
					</div>

					<div className="mt-auto pt-5">
						<button onClick={() => addToCart(product)}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center gap-2 transition cursor-pointer">
							<MdOutlineShoppingCart size={18}/>{t("products","addToCart")}
						</button>
					</div>
			</div>
		</article>
	);
}

export default ProductCard;