import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
export const Login = (props) => {
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);

	return (
		<form
			noValidate
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
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<TextField
				id="standard"
				label="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<Button label="xd" onClick={() => props.logInUser(email, password)}>
				LogIn
			</Button>
		</form>
	);
};
