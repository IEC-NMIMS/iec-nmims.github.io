import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { EventList } from "./EventList";
import styled from "@emotion/styled";

const Events = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3.6,
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
	const Headers = styled(Typography)({
		color: "white",
		fontSize: "3rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		marginLeft: "50px",
		marginBottom: "50px",
		zIndex: 1,
	});
	return (
		<>
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
						imageList={info.imageList}
						modaldata={info.modaldata}
					></Item>
				))}
			</Carousel>
		</>
	);
};

export default Events;
