import React from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";

function Container({ divisions }) {
	console.log("divisions de container==>", divisions);

	const columns = [
		{
			title: "Division",
			dataIndex: "name",
			id: "name",
		},
		{
			title: "Division Superior",
			dataIndex: "superior_name",
			id: "superior_name",
		},
		{
			title: "Colaboradores",
			dataIndex: "coworkers",
			id: "coworkers",
		},
		{
			title: "Nivel",
			dataIndex: "level",
			id: "level",
		},
		{
			title: "Subdivisiones",
			dataIndex: "subdivisions",
			id: "subdivisions",
		},
		{
			title: "Embajador",
			dataIndex: "ambassador",
			id: "ambassador",
		},
	];

	const dataDivisions = divisions;
	return (
		<div>
			<Table columns={columns} dataSource={dataDivisions} />
		</div>
	);
}

export default Container;

