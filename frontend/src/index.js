import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "../src/redux/serviceWorker";
import { Provider } from "react-redux";

import store from "../src/redux/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.register();
