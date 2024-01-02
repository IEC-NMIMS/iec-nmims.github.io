import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import MissionCard from "./MissionCard";
import VisionCard from "./VisionCard";
import Box from "@mui/material/Box";

const WhoAreWeCarousel = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024, marginleft: "10px" },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const OuterBox = styled(Box)({
		width: "100%",
		height: "45px",
		display: "block",
		justifyContent: "center",
		alignItems: "center",
	});

	return (
		<>
			<OuterBox />
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				transitionDuration={2000}
				removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
			>
				<MissionCard />
				<VisionCard />
			</Carousel>

			<OuterBox />
		</>
	);
};

export default WhoAreWeCarousel;
