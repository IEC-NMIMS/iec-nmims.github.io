import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const WhatDoWeDo = () => {
	const headings = ["Workshops", "Projects", "Startups"];

	const SectionContainer = styled(Box)({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		textAlign: "center",
		width: "100%",
		zIndex: "1",
		marginBottom: "150px",
	});

	const Heading = styled(Typography)({
		fontSize: "3rem",
		fontWeight: "bold",
		marginLeft: "50px",
		marginBottom: "50px",
		color: "white",
		zIndex: "1",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const StyledPaper = styled(Paper)({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "350px",
		backgroundColor: "transparent",
		boxShadow: "none",
		color: "white",
		zIndex: "1",
	});

	const HeadingText = styled(Typography)({
		color: "white",
		fontSize: "2.25rem",
		fontWeight: "bold",
		marginTop: "40px",
		marginBottom: "20px",
		zIndex: "1",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const ContentText = styled(Typography)({
		color: "rgba(255,255,255,0.8)",
		marginBottom: "1.5rem",
		width: "90%",
		fontWeight: "100",
		fontSize: "16px",
		zIndex: "1",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	return (
		<>
			<Heading>What Do We Do</Heading>
			<SectionContainer>
				{headings.map((heading, index) => (
					<StyledPaper
						sx={{
							borderRight: index === 0 || index === 1 ? "3px solid gray" : "none",
						}}
					>
						<HeadingText>{heading}</HeadingText>
						<ContentText>
							{/* Add content specific to each heading */}
							{index === 1 && (
								<>
									We, at IEC, salute the effort that goes into projects, and wish
									to increase their visibility. It is for this reason that we
									offer projects a space to display their work and get their buzz
									going. Through our network, we also partner projects with the
									most apt mentors for them.
								</>
							)}
							{index === 2 && (
								<>
									The ultimate dream of so many soon-to-be entrepreneurs and
									innovators! Each action of IEC, be it workshops, competitions,
									seminars, and even crowdfunding events, is carefully taken to
									help such people take one step towards realising their vision.
								</>
							)}
							{index !== 1 && index !== 2 && (
								<>
									{/* Default content for other headings */}
									“It always seems impossible till <br /> it’s done.” -Nelson
									Mandela <br /> The agenda of all workshops held by IEC is to
									normalize the entrepreneurial transition from college to the
									real world, and to help develop skills. Workshops on everything
									from B-Plan Writing to Idea Validation, have taught students to
									embrace the needs for fostering innovation.
								</>
							)}
						</ContentText>
					</StyledPaper>
				))}
			</SectionContainer>
		</>
	);
};

export default WhatDoWeDo;
