import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "https://ecommerceback-grlk.onrender.com/api",
	withCredentials: true
});

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default api;