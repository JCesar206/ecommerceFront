import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import BackToTop from "../components/layout/BackToTop.jsx";

function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col font-semibold bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
			<Navbar/>
			<main className="flex-1">
				<Outlet/>
				<BackToTop/>
			</main>
			<Footer/>
		</div>
	);
}

export default MainLayout;