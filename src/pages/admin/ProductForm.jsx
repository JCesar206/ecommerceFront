import { useState } from "react";
import productService from "../../services/productService.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

function ProductForm({ product = null, onSuccess, onCancel }) {
	const [name, setName] = useState(product?.name || "");
	const [description, setDescription] = useState(product?.description || "");
	const [price, setPrice] = useState(product?.price);
	const [stock, setStock] = useState(product?.stock || "");
	const [image, setImage] = useState(null);
	const { language, toggleLanguage, t} = useLanguage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("name", name);
			formData.append("description", description);
			formData.append("price", price);
			formData.append("stock", stock);

			if (image) {
				formData.append("image", image);
			}
			if (product) {
				await productService.updateProduct(product.id, formData);
			} else {
				await productService.createProduct(formData);
			}
			onSuccess();
		} catch (error) {
			console.error(error);
			alert("Ocurrió un error al guardar el producto.");
		}
	};

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
			<h2 className="text-2xl font-bold mb-6 gap-8">{product ? t("products","editProduct") : t("products","newProduct")}</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input type="text" placeholder={t("admin","name")} value={name}
				onChange={(e)=>setName(e.target.value)}
				className="w-full border rounded p-2" required />
				<textarea placeholder={t("admin","description")} value={description}
				onChange={(e)=>setDescription(e.target.value)}
				className="w-full border rounded p-2" required />

				<input type="number" step="0.01" placeholder={t("admin","price")} value={price}
				onChange={(e)=>setPrice(e.target.value)} className="w-full border rounded p-2" required />
				<input type="number" placeholder="Stock" value={stock} onChange={(e)=>setStock(e.target.value)}
				className="w-full border rounded p-2" required />

				<input type="file" accept="image/*" placeholder={t("admin","selectFile")}
				onChange={(e)=>setImage(e.target.value)}
				className="w-full hover:font-semibold cursor-pointer" />

				{product?.image && (
					<div className="mt-4">
						<p className="text-sm text-gray-600 mb-2">{t("products","currentImage")}
							<img src={product.image.startsWith("http") ? product.image :
								`${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${product.image}`
							} alt={product.name} className="w-40 h-40 object-cover rounded-lg border" />
						</p>
					</div>
				)}

				<div className="flex gap-4">
					<button type="submit"
					className="flex items-center gap-2 bg-green-600 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded cursor-pointer">
						<FaRegSave size={18} />
						<span>{t("products","save")}</span>
					</button>

					<button type="button" onClick={onCancel}
					className="flex items-center gap-2 bg-gray-500 hover:bg-gray-700 text-white font-semibold px-5 py-2 rounded cursor-pointer">
						<MdOutlineCancel size={18} />
						<span>{t("products","cancel")}</span>
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProductForm;