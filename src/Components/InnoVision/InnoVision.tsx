import { InnoVisionGuestList } from "./InnoVisionGuestList";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InnoVisionItem from "./InnoVisionItem";

const InnoVision = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1200, min: 600 },
			items: 2.6,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
		},
	};

	const SpeakerBox = styled(Box)({
		display: "flex",
		flexDirection: "column",
		margin: isMobile ? "50px 0px" : "150px 0",
		marginLeft: isMobile && window.innerWidth < 1024 ? "10px" : "0px",
		zIndex: 1,
	});

	const SpeakerHeader = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
		alignSelf: isMobile && window.innerWidth < 1024 ? "center" : "",
		marginLeft: isMobile && window.innerWidth < 1024 ? "0" : "10px",
		marginBottom: "50px",
		fontWeight: "bold",
		color: "white",
		zIndex: 1,
		fontFamily: "ITCAvantGardeGothicStd",
	});

	return (
		<SpeakerBox>
			<SpeakerHeader>Inno-Vision Guests</SpeakerHeader>
			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				transitionDuration={2000}
				arrows={true}
			>
				{InnoVisionGuestList.map((info, index) => (
					<InnoVisionItem
						key={index}
						index={index}
						image={info.image}
						name={info.name}
						post={info.post}
						desc={info.desc}
						linkedin={info.linkedin}
					></InnoVisionItem>
				))}
			</Carousel>
		</SpeakerBox>
	);
};

export default InnoVision;
