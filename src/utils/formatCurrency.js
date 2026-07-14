const formatCurrency = (value) => {
	return new Intl.NumberFormat("es-MX", {
		style: "currency",
		currency: "MXN"
	}).format(Number(value));
};

export default formatCurrency;