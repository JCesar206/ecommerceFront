import { Component } from "react";
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false, error: null};
	}
	static getDerivedStateFromError(error) {
		return {hasError: true, error};
	}
	componentDidCatch(error, errorInfo) {
		console.error("==== ERROR BOUNDARY ====");
		console.error(error);
		console.error(errorInfo);
	}
	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-100">
					<div className="bg-white shadow-lg rounded-x1 p-8 max-w-lg text-center">
						<h1 className="text-3xl font-bold text-red-600 mb-4">Ocurrió un error</h1>
						<p className="text-gray-600 mb-6">La aplicación encontró un problema inesperado.</p>
						<pre className="text-left bg-gray-100 p-4 rounded text-sm overflow-auto">
							{this.state.error?.message}
						</pre>
						<button onClick={()=>window.location.reload()}
							className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 cursor-pointer">
								Recargar aplicación
							</button>
					</div>
				</div>
			)
		}
		return this.props.children;
	}
}

export default ErrorBoundary;