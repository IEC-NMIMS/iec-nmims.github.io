import React from "react";
import { Box, Typography, Stepper, Step, StepLabel, useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import BackgroundBox from "../../BackgroundBox/BackgroundBox";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Event = () => {
	const location = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	window.scrollTo(0, 0);

	const { name, image, title, data, dates, rules } = location.state;

	const Data = styled(Box)({
		marginTop: "30px",
		marginBottom: "30px",
		fontSize: "25px",
		color: "white",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		zIndex: 1,
	});

	const Header = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		alignSelf: "center",
		marginBottom: "50px",
		zIndex: 1,
	});

	const Background = styled(Box)({
		alignSelf: "center",
		width: "80%",
		backgroundColor: "rgba(42,43,42,0.3)",
		borderRadius: "20px",
		padding: "20px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		zIndex: 1,
	});

	const ImageBox = styled(Box)({
		width: "95%",
		height: isMobile && window.innerWidth < 600 ? "200px" : "500px",
		alignSelf: "center",
		backgroundColor: "gray",
		borderRadius: "20px",
		display: "flex",
		justifyContent: "center",
		margin: "20px 0 30px 0",
		zIndex: 1,
	});

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "20px",
	});

	const Title = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3.6rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		paddingLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		textAlign: isMobile && window.innerWidth < 600 ? "center" : "left",
		marginBottom: "10px",
		zIndex: 1,
	});

	const Desc = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: isMobile && window.innerWidth < 600 ? "0.6rem" : "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: isMobile && window.innerWidth < 600 ? "center" : "left",
		padding: isMobile && window.innerWidth < 600 ? "0" : "0 10px 0 50px",
		marginBottom: "50px",
		zIndex: 1,
	});

	const Steppers = styled(Stepper)({
		color: "white",
		width: "100%",
		alignSelf: "center",
		zIndex: 1,
		marginBottom: "65px",
	});

	const StepLabels = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.4rem" : "0.8rem",
		color: "white",
		zIndex: 1,
	});

	const RulesRegister = styled(Box)({
		display: "flex",
		flexDirection: "row",
		zIndex: 1,
	});

	const RuleRegulation = styled(Typography)({
		width: isMobile && window.innerWidth < 600 ? "50%" : "auto",
		fontFamily: "ITCAvantGardeGothicStd",
		textDecoration: "underline",
		color: "white",
		fontSize: isMobile && window.innerWidth < 600 ? "1rem" : "1.5rem",
		fontWeight: "500",
		marginRight: "auto",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		zIndex: 1,
	});

	const RegisterNow = styled(IconButton)({
		width: isMobile && window.innerWidth < 600 ? "50%" : "30%",
		color: "black",
		fontWeight: "400",
		borderRadius: isMobile && window.innerWidth < 600 ? "7px" : "10px",
		zIndex: 1,
		backgroundColor: "#00B9CB",
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		alignItems: "center",
		padding: isMobile && window.innerWidth < 600 ? "5px" : "10px 20px 10px 20px",
		marginRight: isDesktop ? "20px" : "",

		"&:hover": {
			backgroundColor: "#00B9CB",
		},
	});

	const RegisterText = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1.3rem",
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "600",
	});

	const Arrow = styled(ArrowForwardIcon)({
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1.3rem",
		marginLeft: "auto",
		zIndex: 1,
	});

	const Ul = styled("ul")({
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "auto",
		paddingLeft: isMobile && window.innerWidth < 600 ? "20px" : "auto",
	});

	const Li = styled("li")({
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "40px",
		zIndex: 1,
	});

	const ListRulesText = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "100",
	});

	const steps = ["Quiz Round", "Submission Round", "Final Round"];

	return (
		<Data>
			<BackgroundBox
				color="blue"
				position="left"
				index={0}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={0.8}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={1.5}
			/>

			<BackgroundBox
				color="blue"
				position="right"
				index={2}
			/>

			<Header>{name}</Header>
			<Background>
				<ImageBox>
					<Image src={image} />
				</ImageBox>
				<Title>{title}</Title>
				<Desc>{data}</Desc>
				<Steppers alternativeLabel>
					{steps.map((label, index) => (
						<Step key={index}>
							<StepLabel>
								<StepLabels>
									{label} <br /> {dates[index]}
								</StepLabels>
							</StepLabel>
						</Step>
					))}
				</Steppers>
				<RulesRegister>
					{isMobile && window.innerWidth < 600 ? (
						<RuleRegulation>Rules</RuleRegulation>
					) : (
						<RuleRegulation>Rules and Regulations</RuleRegulation>
					)}

					<RegisterNow>
						<RegisterText>Register Now</RegisterText> <Arrow />
					</RegisterNow>
				</RulesRegister>
				<Box>
					<Ul>
						{rules.map((rule) => (
							<Li>
								<ListRulesText>{rule}</ListRulesText>
							</Li>
						))}
					</Ul>
				</Box>
			</Background>
		</Data>
	);
};

export default Event;
