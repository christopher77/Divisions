import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { useDivisions } from "../redux/selectors";
import { useAddDivisions } from "../redux/action-hooks";

const { Search } = Input;

function SearchBar() {
	const [busqueda, setBusqueda] = React.useState("");

	const dataDivisiones = useDivisions();

	console.log("dataDivisiones=>", dataDivisiones);

	const [divisiones2, setDivisiones2] = React.useState([]);

	React.useEffect(() => {
		setDivisiones2(dataDivisiones);
		// console.log("ya cargo el useeffect", divisiones2);
	}, []);

	const addDivisions = useAddDivisions();

	function handleChange(e) {
		e.preventDefault();
		setBusqueda(e.target.value);
		console.log(busqueda);
		FilterElements();
	}

	function FilterElements() {
		console.log("divisiones2=>", divisiones2);

		let search2 = divisiones2.filter((division) => {
			if (division.name.toString().includes(busqueda)) {
				return division;
			}
		});
		setDivisiones2(search2);

		console.log("search2=>", search2);
	}

	return (
		<div>
			<Search
				placeholder="Buscar"
				value={busqueda}
				style={{ width: 200, marginLeft: "1rem" }}
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBar;
