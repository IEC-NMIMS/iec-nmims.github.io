import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { Card, colors } from "@mui/material";
import Paper from "@mui/material/Paper";

const OuterBox = styled(Box)({
	marginLeft: "50px",
	zIndex: 1,
});

const Title = styled(Typography)({
	color: "white",
	fontSize: "3rem",
	marginBottom: "10px",
});

const Title2 = styled(Typography)({
	color: "black",
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "-10px",
	fontFamily: "sans-serif",
});

const Title3 = styled(Typography)({
	color: "black",
	fontWeight: "bold",
	fontFamily: "sans-serif",
});

const InnerBox = styled(Box)({
	display: "flex",
});

const HomePage = styled(Box)({
	marginTop: "35px",
	marginLeft: "30px",
	width: "200px",
	backgroundColor: "rgba(42,43,42,255)",
	borderRadius: "20px",
	height: "215px",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	border: "solid",
});

const KnowMore = styled(IconButton)({
	backgroundColor: "rgb(0,185,203)",
	borderRadius: "10px",
	right: "10px",
	height: "40px",
	width: "300px",
	display: "flex",
	justifyContent: "start",
	padding: "0px 0px 0px 20px ",
	color: "black",
	fontFamily: "sans-serif",
	fontSize: "16px",
	fontWeight: "bold",
	marginLeft: "8px",
	marginBottom: "20px",

	"&:hover": {
		backgroundColor: "rgb(0,185,203)",
	},
});

const Arrow = styled(EastIcon)({
	marginLeft: "auto",
	marginTop: "5px",
	marginRight: "15px",
});

const Text = styled(Typography)({
	fontFamily: "sans-serif",
	fontWeight: "400px",
	marginBottom: "20px",
	fontSize: "16px",
});

const TopRight = styled(Card)({
	backgroundColor: "black",
	color: "rgba(255, 255, 255, 0.75)",
	width: "500px",
	marginLeft: "650px",
});

const Whitebox = styled(Card)({
	backgroundColor: "white",
	marginLeft: "245px",
	marginBottom: "50px",
	marginTop: "100px",
	height: "150px",
	borderRadius: "20px",
	width: "60%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	color: "black",
});

const style = {
	padding: "0px 20px 20px 20px",
};

const style1 = {
	paddingLeft: "30px",
};

const Home = () => {
	return (
		<OuterBox>
			<InnerBox>
				<TopRight>
					<Title>Innovation and Entrepreneurship Cell</Title>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, accusamus
						debitis quae recusandae eaque quos voluptatem aspernatur a harum velit et.
						Sed quaerat excepturi illum natus, quidem officia laboriosam eius?
					</Text>
					<KnowMore>
						<div>Register Now for Inceptio</div>
						<Arrow />
					</KnowMore>
				</TopRight>
			</InnerBox>

			<InnerBox>
				<Whitebox>
					<div style={{ padding: "0px 20px 20px 20px", marginLeft: 90 }}>
						<Title2>+110</Title2>
						<div>
							<Title3>Team Members</Title3>
						</div>
					</div>

					<div style={style}>
						<Title2>+100</Title2>
						<div style={style1}>
							<Title3>Events</Title3>
						</div>
					</div>

					<div style={style}>
						<Title2>+200</Title2>
						<div style={style1}>
							<Title3>Speakers</Title3>
						</div>
					</div>

					<div style={style}>
						<Title2>+10K</Title2>
						<div style={style1}>
							<Title3>Outreach</Title3>
						</div>
					</div>
				</Whitebox>
				<InnerBox></InnerBox>
			</InnerBox>
		</OuterBox>
	);
};

export default Home;
