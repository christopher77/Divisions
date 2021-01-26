import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import SelectorColumnas from "../components/SelectorColumnas";
import RadioButton from "../components/RadioButton";
import TitlePage from "../components/TitlePage";
import Tabulator from "../components/Tabulator";
import SearchBar from "../components/SearchBar";
import { useAddDivisions } from "../redux/action-hooks";

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
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<RadioButton />
				<div
					style={{ display: "flex", justifyContent: "flex-end", margin: 20 }}
				>
					<SelectorColumnas />
					<SearchBar />
				</div>
			</div>
			<Container />
		</div>
	);
}

export default Home;
