import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService.js";

function Register() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({name: "", email: "", password: ""});
	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await authService.register(form);
			alert("Usuario registrado correctamente");
			navigate("/login");
		} catch (error) {
			alert(error.response?.data?.message || "Error al registrar usuario");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-16">
			<h1 className="text-3xl font-bold mb-8">Crear cuenta</h1>
			<form onSubmit={handleSubmit} className="space-y-5">
				<input type="text" name="name" placeholder="Nombre" value={form.name}
				onChange={handleChange} className="w-full border rounded-lg p-3" required />
				<input type="email" name="email" placeholder="Correo electrónico" value={form.email}
				onChange={handleChange} className="w-full border rounded-lg p-3" required />
				<input type="password" name="password" placeholder="Contraseña" value={form.password}
				onChange={handleChange} className="w-full border rounded-lg p-3" required />
				<button disabled={loading} className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded-ls cursor-pointer">
					{loadin ? "Registrando..." : "Crear cuenta"}
				</button>
			</form>
		</div>
	);
}

export default Register;