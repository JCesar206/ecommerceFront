import Categories from "../components/home/Categories";
import NotFound from "../pages/NotFound";

const texts = {
	es: {
		home: {
			title: "Proyecto desarrollado con React, Tailwind CSS, Node.js, Express, MySQL y JWT Refresh Token.",
			viewProducts: "Ver productos",
			loading: "Cargando productos...",
			featured: "Productos destacados",
			viewAll: "Ver todos",
			ctatitle: "¿Listo para encontrar tu próximo equipo?",
			ctaDescription: "Explora nuestro catálogo y descubre productos de calidad al mejor precio.",
			ctaButton: "Ver productos",
			whyChooseUs: "¿Por qué elegir DevShoop?",
			shippingtitle: "Envió rápido",
			securitytitle: "Compra segura",
			supporttitle: "Supporte 24/7",
			shippingDescription: "Recibe tus productos de forma rápida y segura hasta la puerta de tu hogar.",
			securityDescription: "Tus pagos están protegidos mediante conexiones seguras y cifrado de datos.",
			supportDescription: "Nuestro equipo está disponible para ayudarte en cualquier momento.",
			categories: "Categorías",
			laptops: "Laptops",
			keyboard: "Teclados",
			mice: "Mouse",
			audio: "Audio"
		},
		navbar: {
			home: "Inicio",
			products: "Productos",
			login: "Iniciar sesión",
			register: "Registro",
			cart: "Carrito",
			logout: "Cerrar sesión",
			admin: "Admin Productos",
			welcome: "Hola",
			theme: "Tema",
			language: "Idioma"
		},
		login: {
			title: "Iniciar sesión",
			email: "Correo electrónico",
			password: "Contraseña",
			login: "Iniciar sesión",
			loggingIn: "Iniciando sesión..."
		},
		products: {
			title: "Productos",
			addToCart: "Agregar al carrito",
			loadingProducts: "Cargando productos..."
		},
		search: {
			searchProducts: "Buscar productos..."
		},
		cart: {
			title: "Carrito",
			delete: "Eliminar",
			checkout: "Verificar",
			cartEmpty: "Carrito vacío"
		},
		notFound: {
			title: "Página no encontrada",
			description: "La página que buscas no existe o fue movida.",
			button: "Volver al inicio"
		},
		order: {
			title: "¡Compra realizada!",
			description: "Tu pedido fue procesado correctamente.",
			number: "Número de orden:",
			continue: "Seguir comprando"
		},
		register: {
			createAccount: "Crear cuenta",
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
			registering: "Registrando"
		},
		checkout: {
			name: "Nombre completo",
			email: "Correo electrónico",
			phone: "Teléfono",
			address: "Dirección",
			city: "Ciudad",
			zipCode: "Código Postal",
			confirm: "Confirmar compra",
			card: "Tarjeta de crédito o débito",
			paypal: "PayPal",
			bank: "Transferencia bancaria",
			paymentMethod: "Método de pago",
			summary: "Resumen del pedido",
			securePayment: "Pago 100% seguro",
			fastShipping: "Envío rápido",
			warranty: "Garantía de calidad",
			clear: "Limpiar",
			title: "Verificar"
		},
		admin: {
			title: "Productos",
			adminPanel: "Panel administrados",
			newProduct: "Producto nuevo",
			createProduct: "Crear producto",
			users: "Usuarios",
			managerUser: "Administrar usuario",
			productManager: "Administrador de productos",
			edit: "Editar",
			delete: "Eliminar"
		},
		footer: {
			title: "DevShop Comercio Electrónico FullStack",
			rights: "Todos los derechos reservados."
		}
	},
	en: {
		home: {
			title: "Project developed using React, Tailwind CSS, Node.js, Express, MySQL, and JWT Refresh Token.",
			viewProducts: "View products",
			loading: "Loading products",
			featured: "Featured products",
			viewAll: "View all",
			ctatitle: "Ready to find your next device?",
			ctaDescription: "Browse our catalog and discover quality products at the best price.",
			ctaButton: "Browse products",
			whyChooseUs: "Why choose DevShop?",
			shippingtitle: "Fast shipping",
			securitytitle: "Secure shopping",
			supporttitle: "24/7 Support",
			shippingDescription: "Receive your products quickly and safely right at your doorstep.",
			securityDescription: "Your payments are protected with secure connections and encrypted data.",
			supportDescription: "Our support team is available to help you anytime.",
			categories: "Categories",
			laptops: "Laptops",
			keyboard: "Keyboards",
			mice: "Mice",
			audio: "Audio"
		},
		navbar: {
			home: "Home",
			products: "Products",
			login: "Login",
			register: "Register",
			cart: "Cart",
			logout: "Logout",
			admin: "Admin products",
			welcome: "Hello",
			theme: "Theme",
			language: "Language"
		},
		login: {
			title: "Login",
			email: "Email",
			password: "Password",
			login: "Login",
			loggingIn: "Logging in"
		},
		products: {
			title: "Products",
			addToCart: "Add to cart",
			loadingProducts: "Loading products..."
		},
		search: {
			searchProducts: "Search products..."
		},
		cart: {
			title: "Cart",
			delete: "Delete",
			checkout: "Checkout",
			cartEmpty: "Cart empty",
		},
		notFound: {
			title: "Page not found",
			description: "The page you're looking for doesn't exist or has been moved.",
			button: "Back to home"
		},
		order: {
			title: "Purcharse completed!",
			description: "Your order has been processed successfully.",
			number: "Order number:",
			continue: "Continue shopping"
		},
		register: {
			createAccount: "Create account",
			name: "Name",
			email: "Email",
			password: "Password",
			registering: "Registering"
		},
		checkout: {
			name: "Full name",
			email: "Email",
			phone: "Phone",
			address: "Address",
			city: "City",
			zipCode: "ZIP Code",
			confirm: "Confirm purcharse",
			card: "Card",
			paypal: "Paypal",
			bank: "Bank transfer",
			paymentMethod: "Payment method",
			summary: "Order summary",
			securePayment: "100% Secure payment",
			fastShipping: "Fast shipping",
			warranty: "Quality warranty",
			clear: "Clear",
			checkout: "Checkout"
		},
		admin: {
			title: "Products",
			adminPanel: "Admin panel",
			newProduct: "New product",
			createProduct: "Create product",
			users: "Users",
			managerUser: "Manager user",
			productManager: "Product manager",
			edit: "Edit",
			delete: "Delete"
		},
		footer: {
			title: "DevShop Ecommerce FullStack",
			rights: "All rights reserved."
		}
	}
};

export default texts;