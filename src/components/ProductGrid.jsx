function ProductGrid({ children }) {
	return (
		<section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{children}
		</section>
	);
}

export default ProductGrid;