import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;

function SelectorColumnas() {
	//hacer fetch para llenar las options********************
	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onBlur() {
		console.log("blur");
	}

	function onFocus() {
		console.log("focus");
	}

	function onSearch(val) {
		console.log("search:", val);
	}

	return (
		<Select
			showSearch
			style={{ width: 200 }}
			placeholder="Columnas"
			optionFilterProp="children"
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onSearch={onSearch}
			filterOption={(input, option) =>
				option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
		></Select>
	);
}

export default SelectorColumnas;
