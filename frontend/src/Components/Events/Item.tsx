import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface urls {
	links: string;
}
interface modals {
	name: string;
	image: string;
	title: string;
	data: string;
	dates: string[];
	rules: string[];
}
interface Props {
	image: string;
	name: string;
	desc: string;
	modalData: modals;
}

const Item = (props: Props) => {
	const navigate = useNavigate();
	const { image, name, desc, modalData } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const EventCard = styled(Card)({
		width: isMobile && window.innerWidth < 600 ? "95%" : "350px",
		height: "600px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
	});

	const EventPic = styled(Box)({
		display: "flex",
		alignSelf: "center",
		width: isMobile && window.innerWidth < 600 ? "100%" : "320px",
		height: "320px",
		borderRadius: "10px",
	});

	const Image = styled("img")({
		width: isMobile && window.innerWidth < 600 ? "100%" : "320px",
		height: isMobile && window.innerWidth < 600 ? "" : "100%",
		aspectRatio: isMobile && window.innerWidth < 600 ? "1 / 1" : "",
		borderRadius: "20px",
	});

	const EventName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1.5rem",
		fontWeight: "bold",
		color: "white",
		margin: "10px 0",
	});

	const EventDesc = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "0.6rem" : "0.7rem",
		marginBottom: "20px",
		color: "rgba(255, 255, 255, 0.8)",
	});

	const KnowMore = styled(IconButton)({
		color: "white",
		fontSize: "16px",
		borderRadius: "0px",
		margin: "10px 0 0 0",
		position: "fixed",
		bottom: "10px",
	});

	const KnowMoreText = styled(Typography)({
		marginLeft: "-8px",
		fontSize: "1.25rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const Arrow = styled(ArrowForwardIosIcon)({
		color: "white",
		paddingLeft: "20px",
		fontSize: "1.25rem",
	});
	const handleKnowMore = (name, image, title, data, dates, rules) => {
		navigate("/events", {
			state: {
				name: name,
				image: image,
				title: title,
				data: data,
				dates: dates,
				rules: rules,
			},
		});
	};

	const Itemcard = (
		<CardContent>
			<EventPic>
				<Image src={image} />
			</EventPic>
			<EventName>{name}</EventName>
			<EventDesc>{desc}</EventDesc>

			<KnowMore
				onClick={() =>
					handleKnowMore(
						modalData.name,
						modalData.image,
						modalData.title,
						modalData.data,
						modalData.dates,
						modalData.rules
					)
				}
			>
				<KnowMoreText>Know More</KnowMoreText>
				<Arrow />
			</KnowMore>
		</CardContent>
	);
	return <EventCard variant="outlined">{Itemcard}</EventCard>;
};

export default Item;
