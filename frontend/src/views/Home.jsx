import React from "react";
import { navigate } from "@reach/router";
import Header from "../components/Header";

const baseUrl = "http://127.0.0.1:8000/divisions";

function Home() {
	// const Principal = [
	// 	{ division: 1, name: "locro", price: 100 },
	// 	{ division: 2, name: "lomazo", price: 100 },
	// 	{ division: 3, name: "chuleta", price: 90 },
	// 	{ division: 4, name: "estofado", price: 100 },
	// 	{ division: 5, name: "cevichon", price: 100 },
	// ];
	const [divisions, setDivisions] = React.useState([]);

	React.useEffect(() => {
		async function getDivisions() {
			const dataDivisions = await fetch(baseUrl).then((response) =>
				response.json()
			);
			const datafinal = Object.values(dataDivisions);
			setDivisions(datafinal);
			console.log("data", datafinal);
		}
		getDivisions();
	}, []);

	return (
		<div className="container">
			<h3>Laravel y React APIRest</h3>
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

export default Home;
