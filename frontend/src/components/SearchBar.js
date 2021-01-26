import React, { useEffect } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

function SearchBar() {
	const [busqueda, setBusqueda] = React.useState("");

	function handleChange(e) {
		setBusqueda(e.target.value);
		console.log(busqueda);
	}

	React.useEffect(() => {}, []);

	return (
		<div>
			<Search
				placeholder="Buscar"
				value={busqueda}
				style={{ width: 200 }}
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBar;
