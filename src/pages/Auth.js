import { Login } from "../components/Login";
import { Register } from "../components/Register";
import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { app } from "../firebase/config";

export const Auth = () => {
	const [register, setRegister] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function createUser(email, password) {
		console.log(email, password);
		app
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((x) => {
				setErrorMessage("succesfully registered as" + x.user.id);
				console.log("then");
				console.log(x.user.uid);
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
				console.log(x.user.email);
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
