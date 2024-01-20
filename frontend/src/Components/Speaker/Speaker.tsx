import React from "react";
import { SpeakerList } from "./SpeakerData";
import SpeakerItem from "./SpeakerItem";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Speaker = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
		marginRight: isMobile && window.innerWidth < 600 ? "0px" : "20px",
		zIndex: 1,
	});

	const SpeakerHeader = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		alignSelf: isMobile && window.innerWidth < 600 ? "center" : "",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		marginBottom: "50px",
		fontWeight: "bold",
		color: "white",
		zIndex: 1,
		fontFamily: "ITCAvantGardeGothicStd",
	});

	return (
		<SpeakerBox>
			<SpeakerHeader>Speaker</SpeakerHeader>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				keyBoardControl={true}
				transitionDuration={2000}
				arrows={false}
			>
				{SpeakerList.map((info, index) => (
					<SpeakerItem
						index={index}
						image={info.image}
						name={info.name}
						post={info.post}
						desc={info.desc}
					></SpeakerItem>
				))}
			</Carousel>
		</SpeakerBox>
	);
};

export default Speaker;
