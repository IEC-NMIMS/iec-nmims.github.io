import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

interface Props {
	color: string;
	position: string;
	index: number;
}

const BackgroundBox = (props: Props) => {
	const { color, position, index } = props;
	const colorGradient =
		color.toLowerCase() === "blue"
			? "linear-gradient(to bottom right,rgba(0, 80, 217,1)40%, rgba(0,212,255,1)80%,rgba(0, 232, 255)10%,#000 )"
			: "linear-gradient(to bottom right,rgba(241, 227, 180)5%,rgba(251, 130, 59)30%,rgba(255, 92, 0)100%,#000 )";

	let FadedBox = styled(Box)({});
	const top = index * 500 + "px";
	if (position.toLowerCase() === "left") {
		FadedBox = styled(Box)({
			height: "600px",
			width: "600px",
			borderRadius: "100%",
			filter: "blur(30px)",
			position: "absolute",
			backgroundImage: colorGradient,
			left: "-250px",
			top: top,
			opacity: 0.4,
			zIndex: 0,
		});
	} else {
		FadedBox = styled(Box)({
			height: "600px",
			width: "600px",
			borderRadius: "100%",
			filter: "blur(30px)",
			position: "absolute",
			backgroundImage: colorGradient,
			right: "-250px",
			top: top,
			opacity: 0.4,
			zIndex: 0,
		});
	}
	return <FadedBox />;
};

export default BackgroundBox;
