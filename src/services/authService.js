import api from "../api/axios.js";

const login = async (credentials) => {
	const response = await api.post("/auth/login", credentials);
	return response.data;
};
const register = async (user) => {
	const response = await api.post("/auth/register", user);
	return response.data;
};
const me = async () => {
	const response = await api.get("/auth/me");
	return response.data;
};
const refresh = async () => {
	const response = await api.post("/auth/refresh");
	return response.data;
};
const logout = async () => {
	const response = await api.post("/auth/logout");
	return response.data;
};

export default {login, register, me, refresh, logout};