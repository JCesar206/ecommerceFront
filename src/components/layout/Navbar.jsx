import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import {MdOutlineShoppingCart, MdMenu, MdOutlineClose} from "react-icons/md";

function Navbar() {
	const [open, setOpen] = useState(false);
	const { totalItems } = useCart();
	const { user, logout } = useAuth();

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold">
					<span className="text-blue-600">Dev</span>Shop
				</Link>
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					{open ? <MdOutlineClose/> : <MdMenu/>}
				</button>
				<div className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>
					<Link to="/">Inicio</Link>
					<Link to="/products">Productos</Link>
					{user ? (
						<> 
							<span className="font-medium">Hola, {user.name}</span>
							<button onClick={logout} className="text-red-600 hover:text-red-700 cursor-pointer">
								Cerrar sesión
							</button>
						</>
					) : (
						<>
						<Link to="/login">Login</Link>
						<Link to="/register">Registro</Link>
						</>
					)}
					
					<Link to="/cart" className="flex items-center gap-1">
					<div className="relative flex items-center">
						<MdOutlineShoppingCart size={20}/>
						{totalItems > 0 && (
							<span className="absolute -top-2 -right-3 flex bg-red-500 text-white rounded-full w-5 h-5 items-center justify-center text-xs">
								{totalItems}
							</span>
						)}
					</div>
					<span>Carrito</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;