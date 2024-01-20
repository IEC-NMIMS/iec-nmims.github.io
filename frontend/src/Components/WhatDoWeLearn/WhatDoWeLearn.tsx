import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const WhatDoWeLearn = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const OuterBox = styled(Box)({
		marginBottom: isMobile ? "100px" : "150px",
		zIndex: 1,
		display: isMobile && window.innerWidth < 600 ? "flex" : "",
		justifyContent: isMobile && window.innerWidth < 600 ? "center" : "",
		alignItems: isMobile && window.innerWidth < 600 ? "center" : "",
		flexDirection: "column",
		color: "white",
	});

	const Title = styled(Typography)({
		marginBottom: "50px",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		zIndex: 1,
	});

	const InnerBox = styled(Box)({
		display: "grid",
		gridTemplateColumns: isMobile ? "auto" : "auto auto",
		margin: isMobile && window.innerWidth < 600 ? "0" : "0 50px",
		width: isMobile && window.innerWidth < 600 ? "100%" : "auto",
		rowGap: "20px",
	});

	const LearnBox = styled(Box)({
		width: "1fr",
		height: isMobile && window.innerWidth < 600 ? "1fr" : "250px",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	});

	const LearnImageBox = styled(Box)({
		width: isMobile && window.innerWidth < 600 ? "150px" : "200px",
		height: isMobile && window.innerWidth < 600 ? "150px" : "200px",
		backgroundColor: "rgba(42, 43, 43, 0.5)",
		borderRadius: "20px",
		marginRight: isMobile && window.innerWidth < 600 ? "10px" : "20px",
	});

	const LearnContentBox = styled(Box)({
		width: isMobile && window.innerWidth < 600 ? "80%" : "450px",
		height: isMobile && window.innerWidth < 600 ? "100%" : "100%",
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
	});

	const LearnTitle = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1.8rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const LearnDescription = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: isMobile && window.innerWidth < 600 ? "0.5rem" : "0.7rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const LearnKnowMore = styled(Box)({
		width: isMobile && window.innerWidth < 600 ? "50%" : "25%",
		fontSize: isMobile && window.innerWidth < 600 ? "0.7rem" : "1rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	});

	const Arrow = styled(ArrowForwardIosIcon)({
		fontSize: isMobile && window.innerWidth < 600 ? "0.7rem" : "1rem",
		fontWeight: "bold",
	});

	return (
		<OuterBox>
			<Title>What Do You Learn</Title>
			<InnerBox>
				<LearnBox>
					<LearnImageBox />
					<LearnContentBox>
						<LearnTitle>Broaden your understanding of the corporate world</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
						<LearnKnowMore>
							Know More
							<Arrow />
						</LearnKnowMore>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox />
					<LearnContentBox>
						<LearnTitle>Concepts about entrepreneurship</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
						<LearnKnowMore>
							Know More
							<Arrow />
						</LearnKnowMore>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox />
					<LearnContentBox>
						<LearnTitle>Having fun while learning</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
						<LearnKnowMore>
							Know More
							<Arrow />
						</LearnKnowMore>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox />
					<LearnContentBox>
						<LearnTitle>Opportunities for networking</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
						<LearnKnowMore>
							Know More
							<Arrow />
						</LearnKnowMore>
					</LearnContentBox>
				</LearnBox>
			</InnerBox>
		</OuterBox>
	);
};

export default WhatDoWeLearn;
