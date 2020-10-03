import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
export const Card = (props) => {
	const [pWidth, setpWidth] = useState("");
	const [margin, setmargin] = useState("");
	const [iWidth, setiWidth] = useState("");
	// const [mWidth, setmWidth] = useState("");

	useEffect(() => {
		setiWidth(props.data.width + "px");
		setpWidth(window.innerWidth - props.data.width);
		props.data.id % 2 === 0
			? setmargin("marginRight")
			: setmargin("marginLeft");
	}, []);

	return (
		<div className="card" style={{ display: "flex" }}>
			<Image
				cloudName="demo"
				publicId="sample"
				width={props.data.width}
				crop="scale"
			/>
			<p
				style={{
					position: "absolute",
					width: pWidth,
					[margin]: iWidth,
					textAlign: "center",
				}}
			>
				{props.data.desc}
			</p>
		</div>
	);
};
