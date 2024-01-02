import React from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import BackgroundBox from "../BackgroundBox/BackgroundBox";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Event = () => {
	const location = useLocation();
	console.log(location.state);

	const { name, image, title, data, dates, rules } = location.state;

	const Data = styled(Box)({
		margin: "30px 0 0 0",
		fontSize: "25px",
		fontFamily: "sans-serif",
		color: "white",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	});
	const Header = styled(Typography)({
		fontSize: "30px",
		fontFamily: "sans-serif",
		alignSelf: "center",
		marginBottom: "10px",
	});
	const Background = styled(Box)({
		alignSelf: "center",
		width: "1200px",
		backgroundColor: "rgba(222,222,222,.1)",
		borderRadius: "20px",
		padding: "20px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	});
	const ImageBox = styled(Box)({
		width: "1100px",
		height: "400px",
		alignSelf: "center",
		backgroundColor: "rgba(222,222,222,.2)",
		borderRadius: "20px",
		display: "flex",
		justifyContent: "center",
		margin: "20px 0 10px 0",
	});
	const Title = styled(Typography)({
		fontSize: "50px",
		fontFamily: "sans-serif",
		paddingLeft: "50px",
		marginBottom: "10px",
	});
	const Desc = styled(Typography)({
		fontSize: "20px",
		fontFamily: "sans-serif",
		padding: "0 10px 0 50px",
		marginBottom: "30px",
	});
	const Steppers = styled(Stepper)({
		color: "white",
		width: "1300px",
		alignSelf: "center",
		height: "100px",
	});
	const StepLabels = styled(Typography)({
		color: "white",
	});
	const connectors = styled("div")({
		color: "white",
		backgroundColor: "white",
		width: "5px",
	});
	const steps = [
		"Quiz Round\n " + dates[0],
		"Submission Round\n " + dates[1],
		"Final Round " + "\n" + dates[2],
	];
	const Rulesregister = styled(Box)({
		display: "flex",
		flexDirection: "row",
	});

	const RegisterNow = styled(IconButton)({
		color: "black",
		fontSize: "22px",
		borderRadius: "10px",
		margin: "20px 0 0 50px",
		padding: "10px 10px 10px 20px",
		fontWeight: "normal",

		bottom: "15px",
		backgroundColor: "	#00BFFF",
	});
	const Arrow = styled(ArrowForwardIcon)({
		marginLeft: "50px",
	});
	const RuleRegulation = styled(Typography)({
		textDecoration: "underline",
		color: "white",
		fontSize: "22px",
		padding: "10px 10px 10px 20px",
		position: "absolute",
		right: "220px",
	});
	const Li = styled("li")({
		marginLeft: "40px",
	});

	return (
		<Data>
			<Header>{name}</Header>
			<Background>
				<ImageBox>
					<img
						src={image}
						height="400px"
					/>
				</ImageBox>
				<Title>{title}</Title>
				<Desc>{data}</Desc>
				<Steppers alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>
								<StepLabels>{label}</StepLabels>
							</StepLabel>
						</Step>
					))}
				</Steppers>
				<Rulesregister>
					<RegisterNow>
						Register Now <Arrow></Arrow>
					</RegisterNow>

					<RuleRegulation>Rules And Regulations</RuleRegulation>
				</Rulesregister>
				<Box>
					<ul>
						{rules.map((rule) => (
							<Li>
								<Typography>{rule}</Typography>
							</Li>
						))}
					</ul>
				</Box>
			</Background>
		</Data>
	);
};

export default Event;
