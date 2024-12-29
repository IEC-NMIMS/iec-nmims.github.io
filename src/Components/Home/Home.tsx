import Box from "@mui/material/Box";
import styled from "@emotion/styled";
// import IconButton from "@mui/material/IconButton";
// import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { Card, useMediaQuery, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material";
// import { NavLink } from "react-router-dom";

const Home = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const OuterBox = styled(Box)({
		width: isMobile ? "100%" : "auto",
		marginLeft: isMobile ? "0" : "20px",
		marginRight: "0",
		marginBottom: isMobile ? "20px" : "150px",
		zIndex: 1,
		backgroundColor: "transparent",
	});

	const InnerBox = styled(Box)({
		backgroundColor: "transparent",
		marginBottom: isMobile ? "50px" : "0",
		display: "flex",
		alignItems: "center",
	});

	const TopRight = styled(Card)({
		backgroundColor: "transparent",
		border: 0,
		boxShadow: "none",
		color: "rgba(255, 255, 255, 0.75)",
		width: "max-content",
		padding: "0 5px",
		marginLeft: "0",
		marginTop: isMobile ? "0" : "100px",
		marginBottom: isMobile ? "0px" : "100px",
	});

	const VideoCard = styled(Card)({
		backgroundColor: "transparent",
		display: "flex",
		alignItems: "center",
		height: "max-content",
		zIndex: -2,
	});

	const IECTitle = styled(Typography)({
		color: "white",
		fontSize: isMobile && window.innerWidth < 1024 ? "2rem" : "3.6rem",
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "bold",
		marginBottom: "10px",
	});

	const InfoText = styled(Typography)({
		marginBottom: "30px",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1.25rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	// const KnowMore = styled(IconButton)({
	// 	backgroundColor: "rgb(0,185,203)",
	// 	borderRadius: isMobile ? "12px" : "15px",
	// 	right: "10px",
	// 	height: isMobile ? "40px" : "50px",
	// 	width: isMobile && window.innerWidth < 1024 ? "250px" : "350px",
	// 	display: "flex",
	// 	justifyContent: "start",
	// 	alignItems: "center",
	// 	paddingRight: isMobile ? "0" : "20px",
	// 	color: "black",
	// 	fontWeight: "bold",
	// 	marginLeft: "8px",
	//
	// 	"&:hover": {
	// 		backgroundColor: "rgb(0,185,203)",
	// 	},
	// });
	//
	// const ButtonText = styled(Typography)({
	// 	fontFamily: "ITCAvantGardeGothicStd",
	// 	fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
	// 	fontWeight: "bold",
	// });

	const Whitebox = styled(Card)({
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		marginLeft: isMobile ? "0" : "245px",
		marginBottom: isMobile ? "0" : "50px",
		marginTop: isMobile ? "0" : "100px",
		padding: "10px 0",
		height: "max-content",
		borderRadius: "20px",
		width: isDesktop ? "60%" : "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		color: "black",
	});

	const WhiteBoxItem = styled(Box)({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	});

	const WhiteBoxTitle = styled(Typography)({
		fontSize: isMobile ? "100%" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const WhiteBoxBody = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "70%" : isMobile ? "80%" : "1.8rem",
		fontWeight: "600",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	// const Arrow = styled(EastIcon)({
	// 	marginLeft: "auto",
	// 	marginRight: "15px",
	// });
	return (
		<OuterBox id="home">
			<InnerBox>
				{window.innerWidth > 1200 && (
					<VideoCard>
						<CardMedia
							sx={{ borderRadius: "0px", zIndex: -2, backgroundColor: "transparent" }}
							component="video"
							src="images/home/home-animation.mp4"
							title="Home Animation"
							autoPlay
							loop
							muted
						/>
					</VideoCard>
				)}
				<TopRight>
					<IECTitle>Innovation and Entrepreneurship Cell</IECTitle>
					<InfoText>
						IEC MPSTME aims to provide a holistic development of students, with a
						cornerstone built on the pillars of ingenuity, intellect, and innovative
						thinking.
					</InfoText>
					{/*<NavLink*/}
					{/*	to="https://unstop.com/college-fests/inceptio-70-the-entrepreneurial-festival-narsee-monjee-institute-of-management-studies-nmims-mumbai-191469"*/}
					{/*	style={{ textDecoration: "none", color: "white" }}*/}
					{/*	target="_blank"*/}
					{/*>*/}
					{/*	<KnowMore>*/}
					{/*		<ButtonText>Register Now for Inceptio</ButtonText>*/}
					{/*		<Arrow />*/}
					{/*	</KnowMore>*/}
					{/*</NavLink>*/}
				</TopRight>
			</InnerBox>

			<InnerBox
				sx={{ justifyContent: isDesktop && window.innerWidth < 1200 ? "center" : "" }}
			>
				<Whitebox>
					<WhiteBoxItem>
						<WhiteBoxTitle>+110</WhiteBoxTitle>
						<WhiteBoxBody>Team Members</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+100</WhiteBoxTitle>
						<WhiteBoxBody>Events</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+200</WhiteBoxTitle>
						<WhiteBoxBody>Speakers</WhiteBoxBody>
					</WhiteBoxItem>

					<WhiteBoxItem>
						<WhiteBoxTitle>+10k</WhiteBoxTitle>
						<WhiteBoxBody>Outreach</WhiteBoxBody>
					</WhiteBoxItem>
				</Whitebox>
				<InnerBox></InnerBox>
			</InnerBox>
		</OuterBox>
	);
};

export default Home;
