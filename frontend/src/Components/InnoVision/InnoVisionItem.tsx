import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
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

const InnoVisionItem = (props: Props) => {
	const { index, image, name, post, desc } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const EventCard = styled(Card)({
		width: isMobile && window.innerWidth < 1024 ? "95%" : "350px",
		height: isMobile && window.innerWidth < 1024 ? "500px" : "550px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		zIndex: 1,
	});
	const SpeakerPic = styled(Box)({
		width: isMobile && window.innerWidth < 1024 ? "100%" : "318px",
		height: isMobile && window.innerWidth < 1024 ? "260px" : "265px",
		borderRadius: "10px",
		zIndex: 1,
	});
	const Image = styled("img")({
		aspectRatio: isMobile && window.innerWidth < 1024 ? "1/1" : "1.2 / 1",
		width: "100%",
		borderRadius: "10px",
	});
	const SpeakerContainer = styled(Box)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	});
	const SpeakerName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1.5rem",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		zIndex: 1,
	});
	const SpeakerPost = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "0.8rem",
		color: "white",
		borderRadius: "0px",
		marginBottom: "20px",
		textAlign: "center",
		zIndex: 1,
	});
	const SpeakerDesc = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
		color: "rgba(255, 255, 255, 0.8)",
		zIndex: 1,
	});

	const Itemcard = (
		<CardContent>
			<SpeakerPic>
				<Image
					src={image}
					alt={name}
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

export default InnoVisionItem;
