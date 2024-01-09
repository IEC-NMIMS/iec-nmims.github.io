import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const OuterBox = styled(Box)({
	width: "100%",
	height: "700px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const WhoAreWeBox = styled(Box)({
	backgroundColor: "rgba(42,43,42,0.3)",
	borderRadius: "20px",
	height: "350px",
	width: "75%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	color: "white",
	padding: "30px",
});

const ImagePanel = styled(Box)({
	display: "flex",
	alignItems: "center",
	width: "55%",
	height: "100%",
	backgroundColor: "#D9D9D9",
	borderRadius: "20px",
});

const RightPanel = styled(Box)({
	width: "45%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "left",
	padding: "20px",
});

const PanelTitle = styled(Typography)({
	fontSize: "3rem",
	fontWeight: "bold",
	fontFamily: "ITCAvantGardeGothicStd",
	marginBottom: "30px",
});

const PanelPara = styled(Typography)({
	color: "rgba(255, 255, 255, 0.8)",
	fontSize: "1rem",
	fontFamily: "ITCAvantGardeGothicStd",
});

const MissionCard = () => {
	return (
		<OuterBox>
			<WhoAreWeBox>
				<RightPanel>
					<PanelTitle>Our Vision</PanelTitle>

					<PanelPara>
						IEC strongly believes that with the correct guidance and support even the
						smallest of ideas can grow and lead to a successful entrepreneurial journey.
					</PanelPara>
				</RightPanel>
				<ImagePanel></ImagePanel>
			</WhoAreWeBox>
		</OuterBox>
	);
};

export default MissionCard;
