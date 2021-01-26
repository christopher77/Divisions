import React from "react";
import { useAddDivisions } from "../redux/action-hooks";

const baseUrl = "http://127.0.0.1:8000/divisions";

// function getDivisions() {
// 	const addDivisions = useAddDivisions();
// 	async function getData() {
// 		const dataDivisions = await fetch(baseUrl).then((response) =>
// 			response.json()
// 		);
// 		const datafinal = Object.values(dataDivisions);
// 		addDivisions(datafinal);
// 	}
// 	return console.log("");
// }
// export default getDivisions;
