import "./App.scss";
import { Wizard } from "./components";
import { createContext, useState } from "react";

function App() {
	return (
		<div className="App">
			<Wizard style={{ margin: "100px 50px" }} />
		</div>
	);
}

export default App;
