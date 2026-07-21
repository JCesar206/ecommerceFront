import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Cart from "../pages/Cart.jsx";
import Profile from "../pages/Profile.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminProducts from "../pages/admin/AdminProducts.jsx";
import NotFound from "../pages/NotFound.jsx";
import Checkout from "../pages/Checkout.jsx";
import OrderSuccess from "../pages/OrderSuccess.jsx";

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout/>}>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} /> 
					<Route path="/products" element={<Products/>} />
					<Route path="/register" element={<Register/>} />
					<Route path="/cart" element={<Cart/>} />
					<Route path="/profile" element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					} />
					<Route path="/admin" element={
						<AdminRoute>
							<AdminDashboard />
						</AdminRoute>
					} />
					<Route path="/admin/products" element={
						<AdminRoute>
							<AdminProducts />
						</AdminRoute>
					} />
					<Route path="/checkout" element={
						<ProtectedRoute>
							<Checkout />
						</ProtectedRoute>
					}
					/>
					<Route path="/order-success" element={
						<ProtectedRoute>
							<OrderSuccess />
						</ProtectedRoute>
					} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;