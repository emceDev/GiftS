import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Card } from "../components/Card";
import "../styles.css/Viewer.css";
import cardData from "../data/Card.json";
export const Viewer = () => {
	return (
		<div>
			<div className="CardContainer">
				{cardData.map((data) => {
					return <Card data={data}></Card>;
				})}
			</div>
		</div>
	);
};
