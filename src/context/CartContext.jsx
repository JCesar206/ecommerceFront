import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
			const savedCart = localStorage.getItem("cart");
			return savedCart ? JSON.parse(savedCart) : [];
		});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

    const addToCart = (product) => {setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
        if (exists) {
          return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);}
          return [...prev,{...product, quantity: 1}]; });
				};

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id)); };

    const increaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
    		};

    const decreaseQuantity = (id) => {
        setCartItems(prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
        .filter(item => item.quantity > 0));
    		};

    const clearCart = () => {
        setCartItems([]);
				localStorage.removeItem("cart");
    		};
				
    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
    }, [cartItems]);

    return (

        <CartContext.Provider
            value={{cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart,totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() { return useContext(CartContext); }