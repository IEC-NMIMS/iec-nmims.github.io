import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const WhoAreWeBox = styled(Box)({
	margin: "20px",
	backgroundColor: "rgba(42,43,42,255)",
	borderRadius: "20px",
	height: "500px",
	display: "flex",
	flexDirection: "row",
	padding: "30px",
	alignItems: "center",
	justifyContent: "center",
	color: "white",
	border: "solid",
});

const ImagePanel = styled(Box)({
	width: "60%",
});

const PanelTitle = styled(Typography)({
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "20px",
});

const PanelPara = styled(Typography)({
	fontSize: "16px",
	marginBottom: "20px",
	marginRight: "10px",
});

const VisionCard = () => {
	return (
		<WhoAreWeBox>
			<Box>
				<PanelTitle>Our Vision</PanelTitle>
				<PanelPara>
					Leadership is what defines how succsefull you will be.
					<br />
					How you inspire other people shapes your own
					<br />
					destiny and we of IEC, give you a chance to do <br />
					precisely that speak up,manage and lead!
					<br />
					<br />
					We want to create a conducive environment that
					<br />
					inspires individuals to stick through tough times and
					<br />
					not give up on the challenges that hinder them to grow
					<br />
					and develop as the next generation entrepreneurs and innovators <br />
				</PanelPara>
				<br />
			</Box>
			<ImagePanel>
				<img
					width="100%"
					src="Images/Logo.svg"
				/>
			</ImagePanel>
		</WhoAreWeBox>
	);
};

export default VisionCard;
