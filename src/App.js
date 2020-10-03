import React from "react";
import "./App.css";
import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { Viewer } from "./pages/Viewer";
function App() {
	return (
		<div className="App">
			{/* <Admin /> */}
			<Auth />
			{/* <Viewer /> */}
		</div>
	);
}

export default App;
