import React from "react";
import { navigate } from "@reach/router";
import Header from "../components/Header";
import Table from "../components/Table";

const baseUrl = "http://127.0.0.1:8000/divisions";

function Home() {
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

	return <Table divisions={divisions} />;
}

export default Home;
