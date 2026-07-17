import { useEffect, useMemo, useState } from "react";
import productService from "../services/productService.js";
import ProductCard from "../components/product/ProductCard.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import SearchBar from "../components/product/SearchBar.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
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
		loadProducts();
	}, []);
	const filteredProducts = useMemo(() => {
		return products.filter(product => 
			product.name.toLowerCase().includes(search.toLowerCase())
		);
	}, [products, search]);
	if (loading) {
		return (
			<div className="text-center mt-20 text-xl">Cargando productos...</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-6">Productos</h1>
			<SearchBar value={search} onChange={(e)=>setSearch(e.target.value)}/>
				<ProductGrid>
					{filteredProducts.map(product => (
						<ProductCard key={product.id} product={product}/>
					))}
				</ProductGrid>
		</div>
	);
}

export default Products;