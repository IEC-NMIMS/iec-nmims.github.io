import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const Inceptio = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const OuterBox = styled(Box)({
		width: "100%",
		margin: isMobile && window.innerWidth < 600 ? "0px 0" : "50px 0",
		height: "max-content",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "white",
	});

	const Heading = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		marginBottom: "20px",
		zIndex: "1",
	});

	const MainCard = styled(Box)({
		borderRadius: "20px",
		width: isMobile && window.innerWidth < 600 ? "80%" : "95%",
		height: "max-content",
		padding: isMobile && window.innerWidth < 600 ? "20px" : "30px",
		backgroundColor: "rgba(42,43,42,.3)",
		zIndex: "1",
	});

	const ImageCard = styled(Box)({
		width: "100%",
		height: "300px",
		backgroundColor: "gray",
		borderRadius: "15px",
		marginBottom: "20px",
		zIndex: "1",
	});

	const EventDescriptionText = styled(Typography)({
		color: "rgba(255,255,255, 0.8)",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.6rem" : "1rem",
		marginBottom: isMobile && window.innerWidth < 600 ? "20px" : "50px",
		textAlign: isMobile && window.innerWidth < 600 ? "center" : "left",
		zIndex: "1",
	});

	const CardBox = styled(Box)({
		width: "100%",
		height: "max-content",
		display: "grid",
		gridTemplateColumns: isMobile && window.innerWidth < 600 ? "auto" : "auto auto",
		gap: isMobile && window.innerWidth < 600 ? "20px 0" : "50px 60px",
		zIndex: "1",
	});

	const DataCard = styled(Box)({
		borderRadius: "15px",
		width: "95%",
		height: "max-content",
		backgroundColor: "rgba(42,43,42,.3)",
		padding: isMobile && window.innerWidth < 600 ? "15px" : "20px 15px",
		marginLeft: isMobile && window.innerWidth < 600 ? "-8px" : "",
		zIndex: "1",
	});

	const DataCardImage = styled(Box)({
		borderRadius: "10px",
		width: "100%",
		height: "250px",
		backgroundColor: "gray",
		zIndex: "1",
	});

	const DataCardHeading = styled(Box)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "1.2rem" : "2rem",
		fontWeight: "600",
		margin: "20px 0",
		zIndex: "1",
	});

	const DataCardDescription = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.4rem" : "0.8rem",
		zIndex: "1",
	});

	const DataCardKnowMoreBox = styled(Box)({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginTop: "20px",
		cursor: "pointer",
		zIndex: "1",
	});

	const DataCardKnowMoreText = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.6rem" : "1rem",
		fontWeight: "bold",
		zIndex: "1",
	});

	const DataCardKnowMoreIcon = styled(ArrowForwardIosIcon)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.6rem" : "1rem",
		marginLeft: "5px",
		zIndex: "1",
	});
	return (
		<>
			<BackgroundBox
				color="blue"
				position="right"
				index={0}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={1}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={2}
			/>

			<BackgroundBox
				color="blue"
				position="left"
				index={3}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={3.5}
			/>

			<OuterBox>
				<Heading>Events</Heading>
				<MainCard>
					<ImageCard />
					<Heading sx={{ textAlign: "center" }}>Inceptio</Heading>
					<EventDescriptionText>
						The NMIMS MPSTME's Innovation and Entrepreneurship Carnival is an
						exceptional annual three-day event fostering entrepreneurship, business, and
						innovation. It gathers young individuals citywide to collaborate on
						projects, fostering discovery and teamwork. The festival offers diverse
						experiences including workshops led by industry professionals to learn idea
						origination, validation, and skill application, with opportunities to win
						cash prizes, certificates, internships, and access to Angel Investors. Aimed
						at innovators and entrepreneurial spirits, it's a chance to realize
						potential and engage in a lifetime experience!
					</EventDescriptionText>
					<CardBox>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
						<DataCard>
							<DataCardImage />
							<DataCardHeading>The Innovation Challenge</DataCardHeading>
							<DataCardDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</DataCardDescription>
							<DataCardKnowMoreBox>
								<DataCardKnowMoreText>Know More</DataCardKnowMoreText>
								<DataCardKnowMoreIcon />
							</DataCardKnowMoreBox>
						</DataCard>
					</CardBox>
				</MainCard>
			</OuterBox>
		</>
	);
};

export default Inceptio;
