import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { EventList } from "./EventList";
import styled from "@emotion/styled";

const Events = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1200 },
			items: 3.8,
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
	const Headers = styled(Typography)({
		color: "white",
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		marginBottom: isMobile && window.innerWidth < 600 ? "50px" : "100px",
		zIndex: 1,
		alignSelf: isMobile && window.innerWidth < 600 ? "center" : "",
	});
	return (
		<div
			style={{
				marginLeft: isMobile && window.innerWidth < 600 ? "10px" : "20px",
				marginRight: isMobile && window.innerWidth < 600 ? "0px" : "20px",
				marginBottom: isMobile ? "100px" : "0",
				display: isMobile ? "flex" : "",
				flexDirection: "column",
			}}
			id="events"
		>
			<Headers>Events</Headers>
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
				{EventList.map((info) => (
					<Item
						image={info.image}
						name={info.name}
						desc={info.desc}
						modalData={info.modalData}
					></Item>
				))}
			</Carousel>
		</div>
	);
};

export default Events;
