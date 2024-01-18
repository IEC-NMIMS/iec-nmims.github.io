import React from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import BackgroundBox from "../../BackgroundBox/BackgroundBox";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Event = () => {
	const location = useLocation();
	console.log(location.state);
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
		fontSize: "3rem",
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
		height: "400px",
		alignSelf: "center",
		backgroundColor: "gray",
		borderRadius: "20px",
		display: "flex",
		justifyContent: "center",
		margin: "20px 0 30px 0",
		zIndex: 1,
	});

	const Title = styled(Typography)({
		fontSize: "3.6rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		paddingLeft: "50px",
		marginBottom: "10px",
		zIndex: 1,
	});

	const Desc = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		padding: "0 10px 0 50px",
		marginBottom: "50px",
		zIndex: 1,
	});

	const Steppers = styled(Stepper)({
		color: "white",
		width: "1300px",
		alignSelf: "center",
		height: "100px",
		zIndex: 1,
		marginBottom: "65px",
	});

	const StepLabels = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "0.8rem",
		color: "white",
		zIndex: 1,
	});

	const RulesRegister = styled(Box)({
		display: "flex",
		flexDirection: "row",
		zIndex: 1,
	});

	const RuleRegulation = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		textDecoration: "underline",
		color: "white",
		fontSize: "1.5rem",
		fontWeight: "500",
		marginRight: "auto",
		marginLeft: "50px",
		zIndex: 1,
	});

	const RegisterNow = styled(IconButton)({
		width: "30%",
		color: "black",
		fontSize: "1.3rem",
		fontWeight: "400",
		borderRadius: "10px",
		zIndex: 1,
		backgroundColor: "#00B9CB",
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		alignItems: "center",
		padding: "10px 20px 10px 20px",

		"&:hover": {
			backgroundColor: "#00B9CB",
		},
	});

	const RegisterText = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "600",
	});

	const Arrow = styled(ArrowForwardIcon)({
		marginLeft: "auto",
		zIndex: 1,
	});

	const Li = styled("li")({
		marginLeft: "40px",
		zIndex: 1,
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
				<ImageBox></ImageBox>
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
					<RuleRegulation>Rules and Regulations</RuleRegulation>

					<RegisterNow>
						<RegisterText>Register Now</RegisterText> <Arrow />
					</RegisterNow>
				</RulesRegister>
				<Box>
					<ul>
						{rules.map((rule) => (
							<Li>
								<Typography
									sx={{ fontFamily: "ITCAvantGardeGothicStd", fontWeight: "100" }}
								>
									{rule}
								</Typography>
							</Li>
						))}
					</ul>
				</Box>
			</Background>
		</Data>
	);
};

export default Event;
