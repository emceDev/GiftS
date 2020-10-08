import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem("loggedIn") === "true" ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/Viewer",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};
