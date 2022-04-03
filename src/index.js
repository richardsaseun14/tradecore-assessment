import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { WizardProvider } from "./context/WizardContext.js";

ReactDOM.render(
	<React.StrictMode>
		<WizardProvider>
			<App />
		</WizardProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
