import Hero from "../components/common/Hero.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import Features from "../components/home/Features.jsx";
import Categories from "../components/home/Categories.jsx";
import CTA from "../components/home/CTA.jsx";

function Home() {
	return (
		<>
			<Hero/>
			<FeaturedProducts/>
			<Features/>
			<Categories/>
			<CTA/>
		</>
	);
}

export default Home;