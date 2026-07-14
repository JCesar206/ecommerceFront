function AdminDashboard() {
	return (
		<div className="max-w-6xl mx-auto py-10">
			<h1 className="text-3xl font-bold mb-8">Panel Administrador</h1>
			<div className="grid md:grid-cols-3 gap-6">
				<h2 className="text-xl font-semibold">Productos</h2>
				<p className="mt-2 text-gray-600">Administrar catálogo</p>
			</div>
			<div className="border rounded-lg p-6 shadow">
				<h2 className="text-xl font-semibold">Nuevo producto</h2>
				<p className="mt-2 text-gray-600">Crear productos</p>
			</div>
			<div className="border rounded-lg p-6 shadow">
				<h2 className="text-xl font-semibold">Usuarios</h2>
				<p className="mt-2 text-gray-600">Gestionar usuarios</p>
			</div>
		</div>
	);
}

export default AdminDashboard;