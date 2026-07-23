import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import authService from "../services/authService.js";
import { FaUserPlus } from "react-icons/fa";

function Register() {
	const navigate = useNavigate();
	const [loading, setloading] = useState(false);
	const [form, setForm] = useState({name: "", email: "", password: ""});
	const { language, toggleLanguage, t} = useLanguage();
	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		loading(true);
		try {
			await authService.register(form);
			alert("Usuario registrado correctamente");
			navigate("/login");
		} catch (error) {
			alert(error.response?.data?.message || "Error al registrar usuario");
		} finally {
			loading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-16">
			<h1 className="text-3xl font-bold mb-8">{t("register","createAccount")}</h1>
			<form onSubmit={handleSubmit} className="space-y-5">
				<input type="text" name="name" placeholder={t("register","name")} value={form.name}
				onChange={handleChange} className="w-full border rounded-lg p-3 text-gray-500 dark:text-white" required />
				<input type="email" name="email" placeholder={t("register","email")} value={form.email}
				onChange={handleChange} className="w-full border rounded-lg p-3 text-gray-500 dark:text-white" required />
				<input type="password" name="password" placeholder={t("register","password")} value={form.password}
				onChange={handleChange} className="w-full border rounded-lg p-3 text-gray-500 dark:text-white" required />

				<button disabled={loading} className="flex items-center gap-2 justify-center w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded cursor-pointer">
					<FaUserPlus size={18}/>
					<span>{loading ? t("register","registering") : t("register","createAccount")}</span>
				</button>
			</form>
		</div>
	);
}

export default Register;