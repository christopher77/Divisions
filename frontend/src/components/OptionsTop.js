import React, { useEffect } from "react";
import "antd/dist/antd.css";
import RadioButton from "./RadioButton";
import SelectorColumnas from "./SelectorColumnas";
import SearchBar from "./SearchBar";

function OptionsTop() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<RadioButton />
			<div style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}>
				<SelectorColumnas />
				<SearchBar />
			</div>
		</div>
	);
}

export default OptionsTop;
