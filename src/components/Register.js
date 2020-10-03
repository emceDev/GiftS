import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase";

export const Register = (props) => {
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [password1, setPassword1] = useState(undefined);

	function handleSubmit() {
		if (email.includes("@") === false) {
			console.log("invalid email");
		} else if (password !== password1 && password.length < 2) {
			console.log("password dont match or is too short");
		} else props.createUser(email, password);
	}

	return (
		<form
			autoComplete="off"
			style={{
				display: "flex",
				flexDirection: "column",
				width: "40vw",
				marginLeft: "30vw",
			}}
		>
			<TextField
				id="standard"
				label="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				id="standard-basic"
				label="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				id="standard-basic"
				label="RepeatPassword"
				onChange={(e) => setPassword1(e.target.value)}
			/>
			<Button
				label="xd"
				onClick={() => {
					handleSubmit();
				}}
			>
				RegisterMe
			</Button>
		</form>
	);
};
