import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";

const OuterBox = styled(Box)({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	border: "none",
});

const WhoAreWeBox = styled(Box)({
	backgroundColor: "rgba(42,43,42,0.3)",
	borderRadius: "20px",
	width: "65%",
	height: "325px",
	display: "flex",
	flexDirection: "row",
	padding: "30px",
	alignItems: "center",
	color: "white",
});

const LeftPanel = styled(Box)({
	width: "60%",
});

const LeftPanelTitle = styled(Typography)({
	fontSize: "3rem",
	fontWeight: "400px",
	marginBottom: "20px",
});

const LeftPanelPara = styled(Typography)({
	fontSize: "16px",
	marginBottom: "20px",
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

	"&:hover": {
		backgroundColor: "rgb(0,185,203)",
	},
});

const Arrow = styled(EastIcon)({
	marginLeft: "auto",
	marginTop: "5px",
	marginRight: "15px",
});

const RightPanel = styled(Box)({
	width: "40%",
	padding: "40px",
	display: "flex",
	justifyContent: "end",
});

const RightPanelImage = styled(Box)({
	alignItems: "center",
	justifyContent: "end",
	height: "250px",
	width: "100%",
	display: "flex",
	borderRadius: "20px",
	padding: "20px",
	backgroundColor: "gray",
});

const WhoAreWe = () => {
	return (
		<OuterBox>
			<WhoAreWeBox>
				<LeftPanel>
					<LeftPanelTitle>Who are we?</LeftPanelTitle>
					<LeftPanelPara>
						The Innovation and Entrepreneurship cell (IEC)
						<br />
						of mpstme is a student body, certified by the
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
						wish to pursue you entrepreneurship as a career.
						<br />
					</LeftPanelPara>
					<KnowMore>
						<div>Click to know more</div>
						<Arrow />
					</KnowMore>
				</LeftPanel>
				<RightPanel>
					<RightPanelImage />
				</RightPanel>
			</WhoAreWeBox>
		</OuterBox>
	);
};

export default WhoAreWe;
