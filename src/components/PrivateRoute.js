import React ,{ useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {app} from '../firebase/config'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	 const [logged, setlogged] = useState(false)
	 
	return (
		<Route
			{...rest}
			render={(props) =>
				app.auth().currentUser !== null ? (
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




// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export const ProtectedRoute = ({ component: Component, ...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				app.auth().onAuthStateChanged(function(user) {
// 					if (user) {
// 						return <Component {...props} />
// 					  }  
// 				else {<Redirect
// 					to={{
// 						pathname: "/Viewer",
// 						state: { from: props.location },
// 					}}/>} 
			
// 		}
// 	)
// }/>)}
