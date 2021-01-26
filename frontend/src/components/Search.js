import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

function Search() {
	return (
		<div>
			<Input placeholder="Buscar" style={{ width: 200 }}></Input>
		</div>
	);
}

export default Search;
