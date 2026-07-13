import { Link } from "react-router-dom";

function Hero() {
	return (
		<section className="bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-6 py-24">
				<h1 className="text-5xl font-bold leading-tight">Ecommerce FullStack</h1>
				<p className="mt-6 text-lg text-slate-300 max-w-2xl">Proyecto desarrollado con React, Tailwind CSS, Node.js, Express, MySQL y JWT Refresh Token.</p>
				<Link to="/products" className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">Ver productos</Link>
			</div>
		</section>
	);
}

export default Hero;