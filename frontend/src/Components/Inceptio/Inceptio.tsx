import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const OuterBox = styled(Box)({
	width: "100%",
	margin: "50px 0",
	height: "max-content",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	color: "white",
});

const Heading = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "20px",
	zIndex: "1",
});

const MainCard = styled(Box)({
	borderRadius: "20px",
	width: "95%",
	height: "max-content",
	padding: "30px",
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

const EventDeccriptionText = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "1rem",
	marginBottom: "50px",
	zIndex: "1",
});

const CardBox = styled(Box)({
	width: "100%",
	height: "max-content",
	display: "grid",
	gridTemplateColumns: "auto auto",
	gap: "50px 60px",
	zIndex: "1",
});

const DataCard = styled(Box)({
	borderRadius: "15px",
	width: "95%",
	height: "max-content",
	backgroundColor: "rgba(42,43,42,.3)",
	padding: "20px 15px",
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
	fontSize: "2rem",
	fontWeight: "600",
	margin: "20px 0",
	zIndex: "1",
});

const DataCardDescription = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "0.8rem",
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
	fontSize: "1rem",
	fontWeight: "bold",
	zIndex: "1",
});

const DataCardKnowMoreIcon = styled(ArrowForwardIosIcon)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "1rem",
	marginLeft: "5px",
	zIndex: "1",
});

const Inceptio = () => {
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
					<Heading>Inceptio</Heading>
					<EventDeccriptionText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</EventDeccriptionText>
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
