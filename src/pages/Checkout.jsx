import CheckoutFrom from "../components/checkout/CheckoutForm.jsx";
import OrderSummary from "../components/checkout/OrderSummary.jsx";

function Checkout() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-10">
			<h1 className="text-4xl font-bold mb-10 dark:text-white">Checkout</h1>
			<div className="grid lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2">
					<CheckoutForm />
				</div>
				<div>
					<OrderSummary />
				</div>
			</div>
		</div>
	);
}

export default Checkout;