import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { MdOutlineShoppingCart, MdMenu, MdOutlineClose } from "react-icons/md";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

function Navbar() {
	const [open, setOpen] = useState(false);
	const { totalItems } = useCart();
	const menuRef = useRef(null);
	const { user, logout } = useAuth();
	const { toggleTheme, darkMode} = useTheme();
	const { language, toggleLanguage, t} = useLanguage();
	
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
		<nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
			<div
			className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center transition-colors duration-300">
				<Link to="/"
				className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition">
					<span className="text-blue-600">Dev</span>Shop
				</Link>

				<button className="md:hidden dark:text-white cursor-pointer" onClick={() => setOpen(!open)}>
					{open ? <MdOutlineClose/> : <MdMenu/>}
				</button>

				<div ref={menuRef} className={`${open ? "flex" : "hidden"}
				md:flex flex-col md:flex-row md:items-center md:justify-between md:flex-1 
				gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 md:ml-10`}>

			<div className="flex items-center gap-3">
				<button onClick={toggleTheme}
				className="text-gray-600 dark:text-gray-200 hover:text-blue-600 transition cursor-pointer" title={t("navbar","theme")}>
					{darkMode ? <FaRegSun size={18}/> : <FaRegMoon size={18}/>}
				</button>

				<button onClick={toggleLanguage}
					className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer" title={t("navbar","language")}>
						{language.toUpperCase()}
				</button>
			</div>
			
				<div className="flex flex-col md:flex-row items-center gap-4">
					<Link onClick={closeMenu} to="/"
						className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
							{t("navbar","home")}
					</Link>

					<Link onClick={closeMenu} to="/products"
						className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
							{t("navbar","products")}
					</Link>
					{user ? (
						<> 
							<span className="font-medium dark:text-white hover:text-blue-600 transition">
								{t("navbar","welcome")}, {user.name}
							</span>

							{user.role === "admin" && (
								<Link onClick={closeMenu} to="/admin/products"
								className="dark:text-white hover:text-blue-600 transition">
									{t("navbar","admin")}
								</Link>
							)}
							<button onClick={() => {logout(); closeMenu();}}
							className="text-red-600 hover:text-red-800 cursor-pointer">
								{t("navbar","logout")}
							</button>
						</>
					) : (
						<>
						<Link onClick={closeMenu} to="/login"
							className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition">
								{t("navbar","login")}
						</Link>
						
						<Link onClick={closeMenu} to="/register"
							className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition">
								{t("navbar","register")}
						</Link>
						</>
					)}
				</div>	

					<Link onClick={closeMenu} to="/cart" 
						className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">

					<div className="relative flex items-center">
						<MdOutlineShoppingCart size={20}/>
						{totalItems > 0 && (
							<span className="absolute -top-2 -right-3 flex bg-red-500 text-white rounded-full w-5 h-5 items-center justify-center text-xs">
								{totalItems}
							</span>
						)}
					</div>
					<span>{t("navbar","cart")}</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;