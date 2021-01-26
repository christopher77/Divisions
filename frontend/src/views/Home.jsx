import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import SelectorColumnas from "../components/SelectorColumnas";
import Search from "antd/lib/transfer/search";

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
		}
		getDivisions();

		console.log("divisions", divisions);
	}, []);

	return (
		<div>
			<Header />
			<Search />
			<SelectorColumnas />
			<Container divisions={divisions} />;
		</div>
	);
}

export default Home;
