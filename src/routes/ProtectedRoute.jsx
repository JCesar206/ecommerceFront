import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

function ProtectedRoute({ children }) {
	const { language, toggleLanguage, t} = useLanguage();
	const { user, loading } = useAuth();
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen"><span>{t("products","loading")}</span></div>
		);
	}
	if (!user) {
		return <Navigate to="/login" replace />;
	}
	return children;
}

export default ProtectedRoute;