import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import TitlePage from "../components/TitlePage";
import Tabulator from "../components/Tabulator";

import { useAddDivisions } from "../redux/action-hooks";
import OptionsTop from "../components/OptionsTop";

const baseUrl = "http://127.0.0.1:8000/divisions";

function Home() {
	const addDivisions = useAddDivisions();

	React.useEffect(() => {
		async function getDivisions() {
			const dataDivisions = await fetch(baseUrl).then((response) =>
				response.json()
			);
			const datafinal = Object.values(dataDivisions);
			addDivisions(datafinal);
		}
		getDivisions();
	}, []);

	return (
		<div style={{ margin: 20 }}>
			<Header />
			<TitlePage />
			<Tabulator />
			<OptionsTop />
			<Container />
		</div>
	);
}

export default Home;
