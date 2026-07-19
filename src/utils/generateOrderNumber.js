function pad(number) {
	return number.toString().padStart(2, "0");
}

export default function generateOrderNumber() {
	const date = new Date();
	const year = date.getFullYear();
	const month = pad(date.getMonth() + 1);
	const day = pad(date.getDate());
	const random = Math.floor(1000 + Math.random() * 9000);
	return `DEV-${year}${month}${day}-${random}`;
}