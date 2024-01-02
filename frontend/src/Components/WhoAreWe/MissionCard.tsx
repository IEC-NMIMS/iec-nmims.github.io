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
	marginRight: "20px",
});

const PanelTitle = styled(Typography)({
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "20px",
});

const PanelPara = styled(Typography)({
	fontSize: "16px",
	marginBottom: "20px",
});

const MissionCard = () => {
	return (
		<WhoAreWeBox>
			<ImagePanel>
				<img
					width="100%"
					src="Images/Logo.svg"
				/>
			</ImagePanel>
			<Box>
				<PanelTitle>Our Mission</PanelTitle>
				<PanelPara>
					Creatting a entrepreneurial ecosystem to provide
					<br />
					the platform for young students with creative minds
					<br />
					and ideas with potential for substantial business
					<br />
					opportunities, is what we strive towards.
					<br />
					<br />
					Through industrial exposure, events, seminars,
					<br />
					workshops, networking, mentoring and more. we
					<br />
					encourage students to take their passion foward
					<br />
					through projects, interships and startup.
					<br />
				</PanelPara>
				<br />
			</Box>
		</WhoAreWeBox>
	);
};

export default MissionCard;
