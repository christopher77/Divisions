import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./views/Home";
// import { DatePicker } from "antd";
// import "antd/dist/antd.css";

function App() {
	return (
		<Router>
			<Home path="/" />
		</Router>
	);
}

export default App;
