import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
	index: number;
	image: string;
	name: string;
	post: string;
	desc: string;
}

const SpeakerItem = (props: Props) => {
	const { index, image, name, post, desc } = props;
	const EventCard = styled(Card)({
		marginLeft: index != 0 ? "20px" : "0",
		width: "500px",
		height: "600px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "10px",
		zIndex: 1,
		overflowY: "scroll",
	});
	const SpeakerPic = styled(Box)({
		background: "grey",
		width: "300px",
		height: "300px",
		borderRadius: "10px",
		zIndex: 1,
	});
	const SpeakerContainer = styled(Box)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	});
	const SpeakerName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "2rem",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		zIndex: 1,
	});
	const SpeakerPost = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "0.8rem",
		color: "white",
		borderRadius: "0px",
		marginBottom: "20px",
		textAlign: "center",
		zIndex: 1,
	});
	const SpeakerDesc = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		fontSize: "1rem",
		color: "rgba(255, 255, 255, 0.8)",
		zIndex: 1,
	});

	const Itemcard = (
		<CardContent>
			<SpeakerPic>
				<img
					src={image}
					alt=""
				/>
			</SpeakerPic>
			<SpeakerContainer>
				<SpeakerName>{name}</SpeakerName>
				<SpeakerPost>{post}</SpeakerPost>
				<SpeakerDesc>{desc}</SpeakerDesc>
			</SpeakerContainer>
		</CardContent>
	);
	return <EventCard variant="outlined">{Itemcard}</EventCard>;
};

export default SpeakerItem;
