import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { MdOutlineShoppingCart, MdMenu, MdOutlineClose } from "react-icons/md";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

function Navbar() {
	const [open, setOpen] = useState(false);
	const { totalItems } = useCart();
	const menuRef = useRef(null);
	const { user, logout } = useAuth();
	const { toggleTheme, darkMode} = useTheme();
	
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const closeMenu = () => {
		setOpen(false);
	};
	
	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold">
					<span className="text-blue-600">Dev</span>Shop
				</Link>
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					{open ? <MdOutlineClose/> : <MdMenu/>}
				</button>

				<div ref={menuRef} className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}>

				<button className="cursor-pointer"><IoLanguage size={18} /></button>
				<button onClick={toggleTheme} className="cursor-pointer">
					{darkMode ? <FaRegSun size={18}/> : <FaRegMoon size={18}/>}
				</button>

					<Link onClick={closeMenu} to="/">Inicio</Link>
					<Link onClick={closeMenu} to="/products">Productos</Link>
					{user ? (
						<> 
							<span className="font-medium dark:text-white">Hola, {user.name}</span>
							{user.role === "admin" && (
								<Link onClick={closeMenu} to="/admin/products">Admin Productos</Link>
							)}
							<button onClick={() => {logout(); closeMenu();}} className="text-red-600 hover:text-red-800 cursor-pointer">
								Cerrar sesión
							</button>
						</>
					) : (
						<>
						<Link onClick={closeMenu} to="/login">Login</Link>
						<Link onClick={closeMenu} to="/register">Registro</Link>
						</>
					)}
					
					<Link onClick={closeMenu} to="/cart" className="flex items-center gap-1">
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