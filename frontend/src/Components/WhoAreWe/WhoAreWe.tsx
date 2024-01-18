import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const OuterBox = styled(Box)({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	border: "none",
	zIndex: 1,
	marginBottom: "150px",
});

const WhoAreWeBox = styled(Box)({
	backgroundColor: "rgba(42,43,42,0.3)",
	borderRadius: "20px",
	width: "70%",
	height: "max-content",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	padding: "45px",
	color: "white",
	zIndex: 1,
});

const LeftPanel = styled(Box)({
	width: "50%",
	zIndex: 1,
});

const LeftPanelTitle = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "30px",
	zIndex: 1,
});

const LeftPanelPara = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "1rem",
	color: "rgba(255, 255, 255, 0.6)",
	marginBottom: "40px",
	zIndex: 1,
});

const KnowMore = styled(IconButton)({
	backgroundColor: "rgb(0,185,203)",
	borderRadius: "10px",
	right: "10px",
	height: "40px",
	width: "350px",
	display: "flex",
	justifyContent: "start",
	padding: "0px 0px 0px 20px ",
	color: "black",
	fontFamily: "sans-serif",
	fontSize: "16px",
	fontWeight: "bold",
	marginLeft: "8px",
	zIndex: 1,

	"&:hover": {
		backgroundColor: "rgb(0,185,203)",
	},
});

const KnowMoreText = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontWeight: "bold",
});

const Arrow = styled(EastIcon)({
	marginLeft: "auto",
	marginRight: "15px",
});

const RightPanel = styled(Box)({
	width: "50%",
	display: "flex",
	justifyContent: "end",
});

const RightPanelImage = styled(Box)({
	alignItems: "center",
	justifyContent: "end",
	height: "375px",
	width: "100%",
	display: "flex",
	borderRadius: "20px",
	backgroundColor: "gray",
});

const WhoAreWe = () => {
	return (
		<OuterBox>
			<WhoAreWeBox>
				<LeftPanel>
					<LeftPanelTitle>Who Are We?</LeftPanelTitle>
					<LeftPanelPara>
						The Innovation and Entrepreneurship cell (IEC)
						<br />
						of MPSTME is a student body, certified by the
						<br />
						Ministry of Education. Government of India, and
						<br />
						aims to inculcate and entrepreneurial and innovative
						<br />
						environment in the institute. We want to keep up the
						<br />
						spirit of entrepreneurship in the minds of the youth
						<br />
						and create passion amongst the students who
						<br />
						wish to pursue entrepreneurship as a career.
						<br />
					</LeftPanelPara>
					<NavLink
						style={{ textDecoration: "none" }}
						to="/vision-mission"
					>
						<KnowMore>
							<KnowMoreText>Click to know more</KnowMoreText>
							<Arrow />
						</KnowMore>
					</NavLink>
				</LeftPanel>
				<RightPanel>
					<RightPanelImage />
				</RightPanel>
			</WhoAreWeBox>
		</OuterBox>
	);
};

export default WhoAreWe;
