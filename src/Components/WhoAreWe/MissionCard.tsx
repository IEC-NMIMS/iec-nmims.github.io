import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const MissionCard = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const OuterBox = styled(Box)({
		width: "100%",
		height: "550px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	});

	const WhoAreWeBox = styled(Box)({
		backgroundColor: "rgba(42,43,42,0.3)",
		borderRadius: "20px",
		height: "max-content",
		width: "75%",
		display: "flex",
		flexDirection: isMobile && window.innerWidth < 1024 ? "column" : "row",
		alignItems: "center",
		justifyContent: "space-between",
		color: "white",
		padding: "30px",
	});

	const ImagePanel = styled(Box)({
		display: "flex",
		alignItems: "center",
		width: isMobile && window.innerWidth < 1024 ? "100%" : "55%",
		height: "100%",
		borderRadius: "20px",
	});

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "20px",
		padding: "0",
		margin: "0",
	});

	const RightPanel = styled(Box)({
		width: isMobile && window.innerWidth < 1024 ? "100%" : "45%",
		height: isMobile && window.innerWidth < 1024 ? "max-content" : "",
		display: "flex",
		flexDirection: "column",
		justifyContent: "left",
		padding: "20px",
	});

	const PanelTitle = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		marginBottom: isMobile && window.innerWidth < 1024 ? "10px" : "30px",
		textAlign: isMobile && window.innerWidth < 1024 ? "center" : "left",
	});

	const PanelPara = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: isMobile && window.innerWidth < 1024 ? "center" : "left",
	});

	const DesktopMissionCard = () => {
		return (
			<>
				<ImagePanel>
					<Image src="images/vision-mission/mission.png" />
				</ImagePanel>
				<RightPanel>
					<PanelTitle>Our Mission</PanelTitle>
					<PanelPara>
						We work towards raising awareness, providing support to student-based
						start-ups and creating a community of bright young minds coming together to
						make ideas & dreams a reality.
					</PanelPara>
				</RightPanel>
			</>
		);
	};

	const MobileMissionCard = () => {
		return (
			<>
				<ImagePanel>
					<Image src="images/vision-mission/mission.png" />
				</ImagePanel>
				<RightPanel>
					<PanelTitle>Our Mission</PanelTitle>
					<PanelPara>
						We work towards raising awareness, providing support to student-based
						start-ups and creating a community of bright young minds coming together to
						make ideas & dreams a reality.
					</PanelPara>
				</RightPanel>
			</>
		);
	};

	return (
		<OuterBox>
			<WhoAreWeBox>
				{isMobile && window.innerWidth < 1024 ? (
					<MobileMissionCard />
				) : (
					<DesktopMissionCard />
				)}
			</WhoAreWeBox>
		</OuterBox>
	);
};

export default MissionCard;