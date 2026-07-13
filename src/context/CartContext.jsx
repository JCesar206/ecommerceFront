import { createContext, useContext, useMemo, useState } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const addToCart = product => {
		const exists = cartItems.find(item => item.id === product.id);
		if (exists) {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id ? {...item, quantity: item.quantity + 1} : item
				)
			);
			return;
		}
		setCartItems([...cartItems,{...product, quantity: 1}]);
	};

	const removeFromCart = (id) => {
		setCartItems(cartItems.filter(item => item.id !== id));
	};

	const increaseQuantity = (id) => {
		setCartItems(
			cartItems.map(item =>
				item.id === id ? {...item, quantity: item.quantity + 1} : item
			)
		);
	};

	const decreaseQuantity = (id) => {
		setCartItems(
			cartItems.map(item =>
				item.id === id ? {...item, quantity: item.quantity - 1} : item
			)
			.filter(item => item.quantity > 0)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const totalItems = useMemo(() => {
		return cartItems.reduce((total, item) => total + item.quantity, 0);
	}, [cartItems]);

	const totalPrice = useMemo(() => {
		return cartItems.reduce((total, item) => total + item.quantity * Number(item.price), 0);
	}, [cartItems]);

	return (
		<CartContext.Provider value={{cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalItems, totalPrice}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() { return useContext(CartContext); }