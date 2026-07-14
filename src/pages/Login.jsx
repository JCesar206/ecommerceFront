import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";
import logger from "../utils/logger.js";

function Login() {
	const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value});};
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login(form);
      login(response.data);
			logger.success("Login correcto");
      navigate("/");
      } catch (error) {
      logger.error("Error al iniciar sesión", error);
      alert(error.response?.data?.message || "Error al iniciar sesión");
      } finally {
      setLoading(false);
      }
    };

    return (
    	<div className="max-w-md mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-8">Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="email" name="email" placeholder="Correo electrónico" value={form.email}
              onChange={handleChange} className="w-full border rounded-lg p-3" required />
            <input type="password" name="password" placeholder="Contraseña" value={form.password} 
							onChange={handleChange} className="w-full border rounded-lg p-3" required />
            <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg cursor-pointer">
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
            </form>
        </div>
    );
}

export default Login;