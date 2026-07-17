import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService.js";
import logger from "../utils/logger.js";

const AuthContext = createContext();
export function AuthProvider ({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const loadUser = async () => {
			try {
				const token = localStorage.getItem("accessToken");
				if (!token) {
					setLoading(false);
					return;
				}
				const response = await authService.me();
				setUser(response.data);
			} catch (error) {
				localStorage.removeItem("accessToken");
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		loadUser();
	}, []);

	const login = ({ user, accessToken }) => {
		localStorage.setItem("accessToken", accessToken);
		setUser(user);
		logger.success("Usuario autenticado", user);
	};

	const logout = async () => {
		try {
			await authService.logout();
		} catch (error) {
			logger.error(error);
		}
		localStorage.removeItem("accessToken");
		setUser(null);
		logger.info("Sesión cerrada");
	};

	return (
		<AuthContext.Provider value={{user, loading, login, logout}}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}