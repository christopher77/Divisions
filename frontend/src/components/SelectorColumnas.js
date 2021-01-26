import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { useColumns } from "../redux/selectors";

const { Option } = Select;

function SelectorColumnas() {
	//dataColumns puede ser traido en el initialstate
	// const dataColumns = [
	// 	"Divisiones",
	// 	"Division superior",
	// 	"Colaboradores",
	// 	"Nivel",
	// 	"Subdivisiones",
	// 	"Embajadores",
	// ];

	const dataColumns = useColumns();

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
		>
			{dataColumns.map((division, index) => {
				return (
					<Option value={division} key={index}>
						{division}
					</Option>
				);
			})}
		</Select>
	);
}

export default SelectorColumnas;
