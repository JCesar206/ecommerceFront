import api from "../api/axios.js";
const productService = {
	getAll: async () => {
		const response = await api.get("/products");
		return response.data;
	},
	getById: async (id) => {
		const response = await api.get(`/products${id}`);
		return response.data;
	},
	update: async (id, productData) => {
		const response = await api.put(`/products/${id}`, productData);
		return response.data;
	},
	remove: async (id) => {
		const response = await api.delete(`/products/${id}`);
		return response.data;
	}
};

export default productService;