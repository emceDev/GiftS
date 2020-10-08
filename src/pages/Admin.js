import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NewCard } from "../components/NewCard";
import { cloudinary } from "cloudinary-react";

export const Admin = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "50vw",
				marginLeft: "25vw",
			}}
		>
			Its Admin Panel
			<TextField label="Short description here"></TextField>
			<NewCard />
		</div>
	);
};
