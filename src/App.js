import React from "react";
import "./App.css";
import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { Viewer } from "./pages/Viewer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/PrivateRoute";
export const App = () => {
	return (
		<div className="App">
			<Router>
				<Link to="/Admin">Admin</Link>
				<Link to="/Auth">Auth</Link>
				<Link to="/Viewer">Viewer</Link>
				<Route path="/Auth" component={Auth} />
				<ProtectedRoute exact path="/Admin" component={Admin} />
				<Route exact path="/Viewer" component={Viewer} />
			</Router>
		</div>
	);
};

export default App;
