import { useEffect, useState } from "react";
import productService from "../../services/productService.js";
import formatCurrency from "../../utils/formatCurrency.js";
import ProductForm from "./ProductForm.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

function AdminProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setloading] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const { language, toggleLanguage, t} = useLanguage();

	const loadProducts = async () => {
		try {
			const response = await productService.getProducts();
			setProducts(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setloading(false);
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm("¿Eliminar este producto?");
		if (!confirmDelete) return;
		try {
			await productService.deleteProduct(id);
			setProducts(prev => prev.filter(product => product.id !== id));
		} catch (error) {
			console.error(error);
		}
	};

	const handleCreate = () => {
		setSelectedProduct(null);
		setShowForm(true);
	};

	const handleEdit = (product) => {
		setSelectedProduct(product);
		setShowForm(true);
	};

	const handleSuccess = async () => {
		setShowForm(false);
		setSelectedProduct(null);
		await loadProducts();
	};

	const handleCancel = () => {
		setShowForm(false);
		setSelectedProduct(null);
	};

	if (loading) {
		return (
			<div className="text-center py-10">{t("admin","loadingProducts")}</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto py-10 px-4">
			<div className="flex justify-between items-center mb-8">
				{showForm && (<ProductForm product={selectedProduct} onSuccess={handleSuccess} onCancel={handleCancel} />)}

				<h1 className="text-3xl font-bold">{t("admin","productManagment")}</h1>
				<button onClick={handleCreate} className="bg-green-600 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded cursor-pointer">{t("admin","newProduct")}</button>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				{products.map(product => (
					<div key={product.id} className="border rounded-lg p-5 shadow">

						<img src={product.image?.startsWith("http") ? product.image :
						`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${product.image}`}
						alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
						
						<h2 className="text-xl font-semibold">{product.name}</h2>
						<p className="text-gray-600 mt-2">{product.description}</p>
						<p className="font-bold mt-3">{formatCurrency(product.price)}</p>
						<p>Stock: {product.stock}</p>
						<div className="flex flex-col gap-3 mt-5">
							<button onClick={() => handleEdit(product)} className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded cursor-pointer">{t("admin","edit")}</button>
							<button onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded cursor-pointer">{t("admin","delete")}</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AdminProducts;