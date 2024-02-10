import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const WhoAreWe = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const OuterBox = styled(Box)({
		width: "100%",
		display: "flex",
		justifyContent: "center",
		border: "none",
		zIndex: 1,
		marginBottom: isMobile && window.innerWidth < 1024 ? "50px" : "150px",
	});

	const WhoAreWeBox = styled(Box)({
		backgroundColor: "rgba(42,43,42,0.3)",
		borderRadius: "20px",
		width: isMobile && window.innerWidth < 600 ? "100%" : "70%",
		height: "max-content",
		display: "flex",
		flexDirection: isMobile ? "column" : "row",
		alignItems: "center",
		padding: isMobile ? "25px" : "45px",
		color: "white",
		zIndex: 1,
	});

	const LeftPanel = styled(Box)({
		width: "50%",
		zIndex: 1,
	});

	const LeftPanelTitle = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "2rem" : "3rem",
		fontWeight: "bold",
		marginBottom: isMobile ? "10px" : "30px",
		zIndex: 1,
	});

	const LeftPanelPara = styled(Typography)({
		width: isMobile ? "100%" : "auto",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "1rem",
		color: "rgba(255, 255, 255, 0.6)",
		marginBottom: isMobile ? "20px" : "40px",
		zIndex: 1,
		textAlign: isMobile ? "center" : "left",
	});

	const KnowMore = styled(IconButton)({
		backgroundColor: "rgb(0,185,203)",
		borderRadius: "10px",
		right: "10px",
		height: "40px",
		width: isMobile && window.innerWidth < 1024 ? "100%" : "350px",
		display: "flex",
		justifyContent: "start",
		alignItems: "center",
		paddingRight: isMobile && window.innerWidth < 1024 ? "0px" : "20px",
		color: "black",
		fontFamily: "sans-serif",
		fontWeight: "bold",
		marginLeft: "8px",
		zIndex: 1,

		"&:hover": {
			backgroundColor: "rgb(0,185,203)",
		},
	});

	const KnowMoreText = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
		fontWeight: "bold",
	});

	const Arrow = styled(EastIcon)({
		marginLeft: "auto",
		marginRight: isMobile ? "5px" : "15px",
	});

	const RightPanel = styled(Box)({
		width: "50%",
		display: "flex",
		justifyContent: "end",
	});

	const RightPanelImage = styled(Box)({
		alignItems: "center",
		justifyContent: "end",
		height: isMobile && window.innerWidth < 1024 ? "200px" : "375px",
		width: "100%",
		display: "flex",
		borderRadius: "20px",
		marginBottom: isMobile ? "20px" : "0",
	});

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "20px",
	});

	const DesktopWhoAreWeContent = () => {
		return (
			<>
				<LeftPanel>
					<LeftPanelTitle>Who Are We?</LeftPanelTitle>
					<LeftPanelPara>
						The Innovation and Entrepreneurship cell (IEC) of MPSTME is a student body,
						certified by the Ministry of Education. Government of India, and aims to
						inculcate and entrepreneurial and innovative environment in the institute.
						We want to keep up the spirit of entrepreneurship in the minds of the youth
						and create passion amongst the students who wish to pursue entrepreneurship
						as a career.
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
					<RightPanelImage>
						<Image src="./images/team/iec-team.png" />
					</RightPanelImage>
				</RightPanel>
			</>
		);
	};

	const MobileWhoAreWeContent = () => {
		return (
			<>
				<RightPanelImage>
					<Image src="./images/team/iec-team.png" />
				</RightPanelImage>
				<LeftPanelTitle>Who Are We?</LeftPanelTitle>
				<LeftPanelPara>
					The Innovation and Entrepreneurship cell (IEC) of MPSTME is a student body,
					certified by the Ministry of Education. Government of India, and aims to
					inculcate and entrepreneurial and innovative environment in the institute. We
					want to keep up the spirit of entrepreneurship in the minds of the youth and
					create passion amongst the students who wish to pursue entrepreneurship as a
					career.
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
			</>
		);
	};

	return (
		<OuterBox id="about-us">
			<WhoAreWeBox>
				{isMobile ? <MobileWhoAreWeContent /> : <DesktopWhoAreWeContent />}
			</WhoAreWeBox>
		</OuterBox>
	);
};

export default WhoAreWe;
