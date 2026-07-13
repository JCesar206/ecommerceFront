import { useCart } from "../context/CartContext.jsx";

function Cart() {
	const {cartItems, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice} = useCart();
	if (cartItems.length === 0) {
		return (
			<div className="max-w-5xl mx-auto py-16 text-center">
				<h1 className="text-3xl font-bold">Tu carrito está vacío</h1>
			</div>
		);
	}

	return (
		<div className="max-w-5xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-8">Carrito</h1>
			{cartItems.map(item => (
				<div key={item.id} className="flex justify-between items-center border-b py-5">
					<div>
						<h2 className="font-semibold">{item.name}</h2>
						<p>${Number(item.price).toFixed(2)}</p>
					</div>
					<div className="flex items-center gap-3">
						<button onClick={() => decreaseQuantity(item.id)}
							className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-500 text-black cursor-pointer">-</button>
							<span>{item.quantity}</span>
							<button onClick={() => increaseQuantity(item.id)}
								className="px-3 py-1 bg-gray-200 hover:bg-gray-500 text-black rounded cursor-pointer">+</button>
					</div>
					<button onClick={() => removeFromCart(item.id)}
						className="text-red-600 font-semibold cursor-pointer">Eliminar</button>
				</div>
			))}
			<div className="mt-8 flex justify-between items-center">
				<h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
				<button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-bue-700 cursor-pointer">Checkout</button>
			</div>
		</div>
	);
}

export default Cart;