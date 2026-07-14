import { useEffect, useState } from "react";
import productService from "../../services/productService";
import formatCurrency from "../../utils/formatCurrency";

function AdminProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const loadProducts = async () => {
		try {
			const response = await productService.getProducts();
			setProducts(response.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
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

	if (loading) {
		return (
			<div className="text-center py-10">Cargando productos...</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto py-10 px-4">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Administración de productos</h1>
				<button className="bg-green-600 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-lg">Producto nuevo</button>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				{products.map(product => (
					<div key={product.id} className="border rounded-lg p-5 shadow">
						<h2 className="text-xl font-semibold">{product.name}</h2>
						<p className="text-gray-600 mt-2">{product.description}</p>
						<p className="font-bold mt-3">{formatCurrency(product.price)}</p>
						<p>Stock: {product.stock}</p>
						<div className="flex gap-3 mt-5">
							<button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded cursor-pointer">Editar</button>
							<button onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded cursor-pointer">Eliminar</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AdminProducts;