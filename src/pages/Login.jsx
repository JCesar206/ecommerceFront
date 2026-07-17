import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";
import logger from "../utils/logger.js";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function Login() {
	const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({email: "", password: ""});
  const [showPassword, setShowPassword] = useState(false);
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
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="email" name="email" placeholder="Correo electrónico" value={form.email}
            onChange={handleChange} className="w-full border rounded-lg p-3 pr-12 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />

            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Contraseña"
                value={form.password} onChange={handleChange} className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />

              <button type="button" onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                  {showPassword ? <MdVisibilityOff size={22}/> : <MdVisibility size={22}/>}
                </button>
            </div>

            <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg cursor-pointer">
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
              <div className="font-semibold mb-2">
                <p><strong>Admin:</strong> admin@test.com</p> 
                <p><strong>Contraseña:</strong> admin123</p>
              </div>
            </form>
        </div>
    );
}

export default Login;