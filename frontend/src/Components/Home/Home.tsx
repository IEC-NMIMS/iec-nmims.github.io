import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { Card, colors, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const Home = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const OuterBox = styled(Box)({
		width: isMobile ? "100%" : "auto",
		marginLeft: isMobile ? "0" : "50px",
		marginRight: "0",
		marginBottom: isMobile ? "20px" : "150px",
		zIndex: 1,
	});

	const InnerBox = styled(Box)({
		marginBottom: isMobile ? "50px" : "0",
		display: "flex",
	});

	const TopRight = styled(Card)({
		backgroundColor: "black",
		color: "rgba(255, 255, 255, 0.75)",
		width: "max-content",
		padding: "0 5px",
		marginLeft: isMobile ? "0" : "750px",
		marginTop: isMobile ? "0" : "100px",
		marginBottom: isMobile ? "0px" : "100px",
	});

	const IECTitle = styled(Typography)({
		color: "white",
		fontSize: isMobile && window.innerWidth < 600 ? "2rem" : "3.6rem",
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "bold",
		marginBottom: "10px",
	});

	const InfoText = styled(Typography)({
		marginBottom: "30px",
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1.25rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const KnowMore = styled(IconButton)({
		backgroundColor: "rgb(0,185,203)",
		borderRadius: isMobile ? "12px" : "15px",
		right: "10px",
		height: isMobile ? "40px" : "50px",
		width: isMobile && window.innerWidth < 600 ? "250px" : "350px",
		display: "flex",
		justifyContent: "start",
		alignItems: "center",
		paddingRight: isMobile ? "0" : "20px",
		color: "black",
		fontWeight: "bold",
		marginLeft: "8px",

		"&:hover": {
			backgroundColor: "rgb(0,185,203)",
		},
	});

	const ButtonText = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1rem",
		fontWeight: "bold",
	});

	const Whitebox = styled(Card)({
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		marginLeft: isMobile ? "0" : "245px",
		marginBottom: isMobile ? "0" : "50px",
		marginTop: isMobile ? "0" : "100px",
		padding: "10px 0",
		height: "max-content",
		borderRadius: "20px",
		width: isDesktop ? "60%" : "100%",
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
	});

	const WhiteBoxTitle = styled(Typography)({
		fontSize: isMobile ? "100%" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const WhiteBoxBody = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "70%" : isMobile ? "80%" : "1.8rem",
		fontWeight: "600",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const Arrow = styled(EastIcon)({
		marginLeft: "auto",
		marginRight: "15px",
	});
	return (
		<OuterBox id="home">
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

			<InnerBox
				sx={{ justifyContent: isDesktop && window.innerWidth < 1200 ? "center" : "" }}
			>
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
