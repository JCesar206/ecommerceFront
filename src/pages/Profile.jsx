import { useAuth } from "../context/AuthContext.jsx";

function Profile() {
	const { user } = useAuth();
	return (
		<div className="max-w-5xl mx-auto py-10">
			<h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
			<div className="border rounded-lg p-6 space-y-3">
				<p><strong>Nombre:</strong> {user?.name}</p>
				<p><strong>Email:</strong> {user?.email}</p>
				<p><strong>Rol:</strong> {user?.role}</p>
			</div>
		</div>
	);
}

export default Profile;