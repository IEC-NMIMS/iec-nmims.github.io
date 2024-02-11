import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import LayersIcon from "@mui/icons-material/Layers";
import RadarIcon from "@mui/icons-material/Radar";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

const WhatDoWeLearn = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const OuterBox = styled(Box)({
		marginBottom: isMobile ? "100px" : "150px",
		zIndex: 1,
		display: isMobile && window.innerWidth < 1024 ? "flex" : "",
		justifyContent: isMobile && window.innerWidth < 1024 ? "center" : "",
		alignItems: isMobile && window.innerWidth < 1024 ? "center" : "",
		flexDirection: "column",
		color: "white",
	});

	const Title = styled(Typography)({
		marginBottom: "50px",
		marginLeft: isMobile && window.innerWidth < 1024 ? "0" : "50px",
		fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		zIndex: 1,
	});

	const InnerBox = styled(Box)({
		display: "grid",
		gridTemplateColumns: isMobile ? "auto" : "auto auto",
		margin: isMobile && window.innerWidth < 1024 ? "0" : "0 50px",
		width: isMobile && window.innerWidth < 1024 ? "100%" : "auto",
		rowGap: "20px",
	});

	const LearnBox = styled(Box)({
		width: "1fr",
		height: isMobile && window.innerWidth < 1024 ? "1fr" : "250px",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	});

	const LearnImageBox = styled(Box)({
		width: isMobile && window.innerWidth < 1024 ? "150px" : "200px",
		height: isMobile && window.innerWidth < 1024 ? "150px" : "200px",
		borderRadius: "20px",
		marginRight: isMobile && window.innerWidth < 1024 ? "10px" : "20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	});

	const LearnContentBox = styled(Box)({
		width: isMobile && window.innerWidth < 1024 ? "80%" : "450px",
		height: isMobile && window.innerWidth < 1024 ? "100%" : "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	});

	const LearnTitle = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1.8rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const LearnDescription = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.5rem" : "0.7rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	return (
		<OuterBox>
			<Title>What Do You Learn</Title>
			<InnerBox>
				<LearnBox>
					<LearnImageBox>
						<InsightsIcon
							sx={{
								fontSize: isMobile && window.innerWidth < 1024 ? "7rem" : "10rem",
								zIndex: "1",
							}}
						/>
					</LearnImageBox>
					<LearnContentBox>
						<LearnTitle>Broaden your understanding of the corporate world</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox>
						<LayersIcon
							sx={{
								fontSize: isMobile && window.innerWidth < 1024 ? "7rem" : "10rem",
								zIndex: "1",
							}}
						/>
					</LearnImageBox>
					<LearnContentBox>
						<LearnTitle>Concepts about entrepreneurship</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox>
						<RadarIcon
							sx={{
								fontSize: isMobile && window.innerWidth < 1024 ? "7rem" : "10rem",
								zIndex: "1",
							}}
						/>
					</LearnImageBox>
					<LearnContentBox>
						<LearnTitle>Having fun while learning</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
					</LearnContentBox>
				</LearnBox>
				<LearnBox>
					<LearnImageBox>
						<KeyboardCommandKeyIcon
							sx={{
								fontSize: isMobile && window.innerWidth < 1024 ? "7rem" : "10rem",
								zIndex: "1",
							}}
						/>
					</LearnImageBox>
					<LearnContentBox>
						<LearnTitle>Opportunities for networking</LearnTitle>
						<LearnDescription>
							IEC's introductory event meant for freshers essentially to get the
							essence of 'our vision and mission'.It is a delightful experience with a
							Bollywood twist where freshers get hands-on experience about
							entrepreneurship.
						</LearnDescription>
					</LearnContentBox>
				</LearnBox>
			</InnerBox>
		</OuterBox>
	);
};

export default WhatDoWeLearn;
