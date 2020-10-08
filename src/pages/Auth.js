import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { dbSet, dbGet } from "../Queries/Authentication";
import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { app } from "../firebase/config";
import { useHistory } from "react-router-dom";

export const Auth = (props) => {
	const [register, setRegister] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [user, setUser] = useState({ id: false });

	function isLogged() {
		return user;
	}
	function log(x) {
		console.log(x);
	}
	function createUser(email, password) {
		app
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((x) => {
				setErrorMessage("Registered as: " + x.user.email);
				setRegister(!register);
				console.log(x);
				dbSet("/" + x.user.uid, password);
			})
			.catch((errorMessage) => {
				console.log("error catch");
				setErrorMessage(errorMessage.message);
			});
	}

	function logInUser(email, password) {
		console.log(email, password);
		app
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((x) => {
				localStorage.setItem("loggedIn", "true");
				let user = localStorage.getItem("user");
				props.history.push("/Admin");
				dbGet(x.user.uid, () => {
					log(x);
				});
			})
			.catch((errorMessage) => {
				setErrorMessage(errorMessage.message);
			});
	}

	return (
		<div>
			{errorMessage}
			{register === false ? (
				<Fragment>
					<Login logInUser={logInUser} />
				</Fragment>
			) : (
				<Register createUser={createUser} />
			)}
			<Button
				onClick={() => {
					setRegister(!register);
				}}
			>
				{register === true ? (
					<Fragment>Login</Fragment>
				) : (
					<Fragment>Register</Fragment>
				)}
			</Button>
		</div>
	);
};
