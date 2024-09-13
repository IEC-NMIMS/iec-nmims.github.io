import styled from "@emotion/styled";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReviewList } from "./ReviewList";
import Review from "./Review";
import { Box } from "@mui/material";

const WhatTheyThinkOfIEC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const WhatTheyThinkOfIECBox = styled(Box)({
		marginLeft: isMobile && window.innerWidth < 1024 ? "0px" : "50px",
		marginBottom: isMobile && window.innerWidth < 1024 ? "50px" : "150px",
	});

	const HeadingBox = styled(Box)({
		display: isMobile && window.innerWidth < 1024 ? "flex" : "",
		flexDirection: "column",
		alignItems: isMobile && window.innerWidth < 1024 ? "center" : "",
	});

	const MentorText = styled(Typography)({
		color: "#00D1FF",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.7rem" : "1rem",
		fontWeight: "bold",
	});

	const Header = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
		color: "white",
		fontWeight: "bold",
	});

	const Intro = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.7rem" : "1rem",
		color: "white",
		width: isMobile && window.innerWidth < 1024 ? "100%" : "600px",
		textAlign: isMobile && window.innerWidth < 1024 ? "center" : "left",
		marginBottom: "50px",
	});

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1200 },
			items: 2.6,
		},
		tablet: {
			breakpoint: { max: 1200, min: 600 },
			items: 1.75,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
		},
	};
	return (
		<WhatTheyThinkOfIECBox>
			<HeadingBox>
				<MentorText>Our Faculty Mentors</MentorText>
				<Header>What they think of IEC</Header>
				<Intro>
				Discover the transformative experiences and satisfied voices of our delighted guests, where authenticity meets excellence.
				</Intro>
			</HeadingBox>
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
				{ReviewList.map((data, index) => (
					<Review
						key={index}
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
