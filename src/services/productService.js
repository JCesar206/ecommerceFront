import api from "../api/axios.js";
const getProducts = async () => {
	const response = await api.get("/products");
	return response.data;
};
const getProductById = async (id) => {
	const response = await api.get(`/products/${id}`);
	return response.data;
};
const createProduct = async (formData) => {
	const response = await api.post("/products", formData, {headers: { "Content-Type": "multipart/form-data"}});
	return response.data;
}
const updateProduct = async (id, formData) => {
	const response = await api.put(`/products/${id}`, formData, {headers: { "Content-Type": "multipart/form-data"}});
	return response.data;
};
const deleteProduct = async (id) => {
	const response = await api.delete(`/products/${id}`);
	return response.data;
};

export default {getProducts, getProductById, createProduct, updateProduct, deleteProduct};