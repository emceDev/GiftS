import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NewCard } from "../components/NewCard";
import { cloudinary } from "cloudinary-react";
import {app} from '../firebase/config'

export const Admin = (props) => {

	function signOut(){
		app.auth().signOut().then(function() {
			props.history.push("/Viewer");
		  }).catch(function(error) {
			console.log(error)
		  });
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "50vw",
				marginLeft: "25vw",
			}}
		>
			<button onClick={()=>{signOut()}}>SignOut</button>
			Its Admin Panel
			<TextField label="Short description here"></TextField>
			<NewCard />
		</div>
	);
};
