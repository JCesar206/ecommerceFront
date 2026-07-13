import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout.jsx";
import Home from "../../pages/public/Home.jsx";
import Products from "../../pages/public/Products.jsx";
import Login from "../../pages/auth/Login.jsx";
import Register from "../../pages/auth/Register.jsx";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout/>}>
					<Route path="/" element={<Home/>} />
					<Route path="/products" element={<Products/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/register" element={<Register/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;