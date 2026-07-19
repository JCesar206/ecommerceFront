import { useEffect, useState } from "react";
import productService from "../../services/productService.js";
import ProductGrid from "../../components/product/ProductGrid.jsx";
import ProductCard from "../../components/product/ProductCard.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, loading] = useState(true);
	const { language, toggleLanguage, t} = useLanguage();

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const response = await productService.getAll();
				setProducts(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				loading(false);
			}
		};
		loadProducts();
	}, []);
	if (loading) {
		return (
			<div className="text-center mt-20 text-xl">
				{t("products","loadingProducts")}
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">{t("products","title")}</h1>
			<ProductGrid>
				{
					products.map(product => (
						<ProductCard key={product.id} product={product} />
					))
				}
			</ProductGrid>
		</div>
	);
}

export default Products;