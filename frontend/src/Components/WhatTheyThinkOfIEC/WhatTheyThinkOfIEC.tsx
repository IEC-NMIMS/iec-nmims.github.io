import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReviewList } from "./ReviewList";
import Review from "./Review";
import { Box } from "@mui/material";

const WhatTheyThinkOfIEC = () => {
	const WhatTheyThinkOfIECBox = styled(Box)({
		marginLeft: "50px",
		marginBottom: "150px",
	});
	const MentorText = styled(Typography)({
		color: "#00D1FF",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1rem",
		fontWeight: "bold",
	});
	const Header = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "3rem",
		color: "white",
		fontWeight: "bold",
	});
	const Intro = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1rem",
		color: "white",
		width: "600px",
		marginBottom: "50px",
	});
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024, marginleft: "10px" },
			items: 2.6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<WhatTheyThinkOfIECBox>
			<MentorText>Our Faculty Mentors</MentorText>
			<Header>What they think of IEC</Header>
			<Intro>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</Intro>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				transitionDuration={2000}
				arrows={false}
			>
				{ReviewList.map((data) => (
					<Review
						title={data.title}
						star={data.star}
						desc={data.desc}
						reviewer={data.reviewer}
						position={data.position}
					></Review>
				))}
			</Carousel>
		</WhatTheyThinkOfIECBox>
	);
};

export default WhatTheyThinkOfIEC;
