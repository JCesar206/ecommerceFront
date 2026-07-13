import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CartContext.jsx";

function ProductCard({ product }) {
	const { addToCart } = useCart();
	const imageUrl = product.image.startWith("http") ? product.image : `${import.meta.env.VITE_API_URL.replace("/api", "")}/${product.image}`;

	return (
		<article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
			<img src={imageUrl} alt={product.name} className="w-full h-56 object-cover" onError={(e) => {
				e.target.src = "http://placehold.co/600x400?text=Sin+Imagen";
			}}/>

			<div className="p-4">
				<h2 className="text-lg font-semibold">{product.name}</h2>
				<p className="text-gray-500 text-sm mt-2">{product.description}</p>
					<div className="flex justify-between items-center mt-4">
						<span className="text-2xl font-bold text-blue-600">
							${Number(product.price).toFixed(2)}
						</span>
						<span className="text-sm text-gray-500">{product.stock}</span>
					</div>
					<button onClick={() => addToCart(product)}
					className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center gap-2 transition cursor-pointer">
						<MdOutlineShoppingCart size={18}/>Agregar al carrito
					</button>
			</div>
		</article>
	);
}

export default ProductCard;