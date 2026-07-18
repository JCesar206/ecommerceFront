import { useEffect, useState } from "react";
import { Link, UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router-dom";
import productService from "../../services/productService.js";
import ProductCard from "../products/ProductCard.jsx";
import { useLanguage } from "../../context/LanguageContext";

function FeaturedProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { t } = useLanguage();

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		try {
			const response = await productService.getProductById();
			setProducts(response.data.slice(0, 4));
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<section className="max-w-7xl mx-auto px-4 py-16">
				<p className="text-center dark:text-white">{t("home","loading")}</p>
			</section>
		);
	}

	return (
		<section className="max-w-7xl mx-auto px-4 py-16">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-3xl font-bold dark:text-white">{t("home","featured")}</h2>

				<Link to="/products" className="text-blue-600 hover:underline">
					{t("home","viewAll")}
				</Link>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

export default FeaturedProducts;