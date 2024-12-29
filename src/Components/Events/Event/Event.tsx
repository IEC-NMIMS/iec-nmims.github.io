import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import BackgroundBox from "../../BackgroundBox/BackgroundBox";

const Event = () => {
	const location = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	window.scrollTo(0, 0);

	const { title, data, images,subtitle } = location.state;

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

	const Title = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "2.8rem" : "8rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		paddingLeft: isMobile && window.innerWidth < 1024 ? "0" : "50px",
		marginBottom: "10px",
		zIndex: 1,
	});
	const Subtitle = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		paddingLeft: isMobile && window.innerWidth < 1024 ? "0" : "50px",
		marginBottom: "10px",
		zIndex: 1,
	});
	const Desc = styled(Typography)({
		color: "rgba(255, 255, 255, 0.8)",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		padding: isMobile && window.innerWidth < 1024 ? "0" : "0 10px 0 50px",
		marginBottom: "50px",
		zIndex: 1,
	});

	const ImageBox = styled(Box)({
		width: "100%",
		height: "max-content",
		display: "grid",
		gridTemplateColumns: isMobile && window.innerWidth < 1024 ? "1fr" : "1fr 1fr",
		gap: isMobile && window.innerWidth < 1024 ? "50px 0" : "50px 30px",
		zIndex: "1",
	});

	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "20px",
		padding: "0",
		margin: "0",
	});

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
			<Background>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				<Desc>{data}</Desc>
				<ImageBox>
					{images.map((image: string | undefined) => (
						<Image src={image} />
					))}
				</ImageBox>
			</Background>
		</Data>
	);
};

export default Event;
