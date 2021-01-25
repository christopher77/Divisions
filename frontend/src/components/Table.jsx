import React from "react";

function Table({ divisions }) {
	return (
		<div className="container">
			<h3>Información</h3>
			<hr />

			<table className="tabledivision">
				<thead>
					<tr>
						<th>Division</th>
						<th>Division Superior</th>
						<th>Colaboradores</th>
						<th>Nivel</th>
						<th>Subdivisiones</th>
						<th>Embajadores</th>
					</tr>
				</thead>
				<tbody id="bodytable">
					{divisions.map((division, index) => {
						return (
							<tr key={index}>
								<td>{division.name}</td>
								<td>{division.superior_name}</td>
								<td>{division.coworkers}</td>
								<td>{division.subdivisions}</td>
								<td>{division.level}</td>
								<td>{division.ambassador}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
