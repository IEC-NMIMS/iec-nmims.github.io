import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { Card, colors } from "@mui/material";

const OuterBox = styled(Box)({
	marginLeft: "50px",
	marginRight: "0",
	marginBottom: "150px",
	zIndex: 1,
});

const InnerBox = styled(Box)({
	display: "flex",
});

const TopRight = styled(Card)({
	backgroundColor: "black",
	color: "rgba(255, 255, 255, 0.75)",
	width: "625px",
	padding: "0 5px",
	marginLeft: "750px",
	marginTop: "100px",
	marginBottom: "100px",
});

const IECTitle = styled(Typography)({
	color: "white",
	fontSize: "3.6rem",
	fontFamily: "ITCAvantGardeGothicStd",
	fontWeight: "bold",
	marginBottom: "10px",
});

const InfoText = styled(Typography)({
	marginBottom: "30px",
	fontSize: "16px",
	fontFamily: "ITCAvantGardeGothicStd",
});

const KnowMore = styled(IconButton)({
	backgroundColor: "rgb(0,185,203)",
	borderRadius: "15px",
	right: "10px",
	height: "50px",
	width: "350px",
	display: "flex",
	justifyContent: "start",
	alignItems: "center",
	padding: "0px 0px 0px 20px ",
	color: "black",
	fontSize: "16px",
	fontWeight: "bold",
	marginLeft: "8px",
	marginBottom: "20px",

	"&:hover": {
		backgroundColor: "rgb(0,185,203)",
	},
});

const ButtonText = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "1rem",
	fontWeight: "bold",
});

const Whitebox = styled(Card)({
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	marginLeft: "245px",
	marginBottom: "50px",
	marginTop: "100px",
	height: "150px",
	borderRadius: "20px",
	width: "60%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-evenly",
	color: "black",
});

const WhiteBoxItem = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

const WhiteBoxTitle = styled(Typography)({
	fontSize: "3rem",
	fontWeight: "bold",
	fontFamily: "ITCAvantGardeGothicStd",
});

const WhiteBoxBody = styled(Typography)({
	fontWeight: "600",
	fontFamily: "ITCAvantGardeGothicStd",
});

const Arrow = styled(EastIcon)({
	marginLeft: "auto",
	marginRight: "15px",
});

const Home = () => {
	return (
		<OuterBox>
			<InnerBox>
				<TopRight>
					<IECTitle>Innovation and Entrepreneurship Cell</IECTitle>
					<InfoText>
						IEC MPSTME aims to provide a holistic development of students, with a
						cornerstone built on the pillars of ingenuity, intellect, and innovative
						thinking.
					</InfoText>
					<KnowMore>
						<ButtonText>Register Now for Inceptio</ButtonText>
						<Arrow />
					</KnowMore>
				</TopRight>
			</InnerBox>

			<InnerBox>
				<Whitebox>
					<WhiteBoxItem>
						<WhiteBoxTitle>+110</WhiteBoxTitle>
						<WhiteBoxBody>Team Members</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+100</WhiteBoxTitle>
						<WhiteBoxBody>Events</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+200</WhiteBoxTitle>
						<WhiteBoxBody>Speakers</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+10k</WhiteBoxTitle>
						<WhiteBoxBody>Outreach</WhiteBoxBody>
					</WhiteBoxItem>
				</Whitebox>
				<InnerBox></InnerBox>
			</InnerBox>
		</OuterBox>
	);
};

export default Home;
