import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

function Container({ divisions }) {
	console.log("divisions de container==>", divisions);

	const columns = [
		{
			title: "Division",
			dataIndex: "name",
			id: "name",
			// sorter: {
			// 	compare: (a, b) => a.name - b.name,
			// 	multiple: 5,
			// },
		},
		{
			title: "Division Superior",
			dataIndex: "superior_name",
			id: "superior_name",
			filters: [
				{
					text: "Producto",
					value: "Producto",
				},
				{
					text: "Direccion general",
					value: "Direccion general",
				},
			],
			// filterMultiple: false,
			// filteredValue: filteredInfo.name || null,
			onFilter: (value, record) => record.superior_name.indexOf(value),

			// sorter: {
			// 	compare: (a, b) => a.superior_name - b.nsuperior_nameame,
			// 	multiple: 4,
			// },
		},
		{
			title: "Colaboradores",
			dataIndex: "coworkers",
			id: "coworkers",
			sorter: {
				compare: (a, b) => a.coworkers - b.coworkers,
				multiple: 3,
			},
		},
		{
			title: "Nivel",
			dataIndex: "level",
			id: "level",
			sorter: {
				compare: (a, b) => a.level - b.level,
				multiple: 2,
			},
		},
		{
			title: "Subdivisiones",
			dataIndex: "subdivisions",
			id: "subdivisions",
			sorter: {
				compare: (a, b) => a.subdivisions - b.subdivisions,
				multiple: 1,
			},
		},
		{
			title: "Embajadores",
			dataIndex: "ambassador",
			id: "ambassador",
		},
	];

	const dataDivisions = divisions;

	function onChange(pagination, filters, sorter, extra) {
		console.log("params", pagination, filters, sorter, extra);
	}
	return (
		<div>
			<Table columns={columns} dataSource={dataDivisions} onChange={onChange} />
		</div>
	);
}

export default Container;
