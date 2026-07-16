function SearchBar({ value, onChange }) {
	return (
		<div className="mb-8">
			<input type="text" placeholder="Buscar productos..." value={value} onChange={onChange}
				className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
		</div>
	);
}

export default SearchBar;