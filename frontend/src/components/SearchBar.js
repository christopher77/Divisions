import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

function SearchBar() {
	return (
		<div>
			<Search placeholder="Buscar" style={{ width: 200 }} />
		</div>
	);
}

export default SearchBar;
