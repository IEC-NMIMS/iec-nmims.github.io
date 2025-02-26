import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface Props {
	index: number;
	image: string;
	name: string;
	post: string;
	desc: string;
	linkedin?: string;
	isMobile: boolean;
}

const SpeakerItem = (props: Props) => {
	const { image, name, post, desc, linkedin, isMobile } = props;

	// Handler for LinkedIn redirect
	const handleNameClick = () => {
		if (linkedin) {
			window.open(linkedin, '_blank', 'noopener,noreferrer');
		}
	};

	const EventCard = styled(Card)({
		width: isMobile ? "95%" : "350px",
		height: "550px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		zIndex: 1,
	});

	const SpeakerPic = styled(Box)({
		width: isMobile ? "100%" : "318px",
		height: isMobile ? "max-content" : "265px",
		borderRadius: "10px",
		zIndex: 1,
	});

	const Image = styled("img")({
		aspectRatio: isMobile ? "1/1" : "1.2 / 1",
		width: "100%",
		borderRadius: "10px",
	});

	const SpeakerName = styled(Typography)({
		width: "100%",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1.5rem",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		textAlign: "center",
		zIndex: 1,
		cursor: linkedin ? "pointer" : "default",
		transition: "color 0.3s ease",
		"&:hover": {
			color: linkedin ? "white" : "white",
			textDecoration: linkedin ? "underline" : "none"
		}
	});

	const SpeakerPost = styled(Typography)({
		width: "100%",
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile ? "0.6rem" : "0.8rem",
		color: "white",
		borderRadius: "0px",
		marginBottom: "20px",
		textAlign: "center",
		zIndex: 1,
	});

	const SpeakerDesc = styled(Typography)({
		width: "100%",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		fontSize: isMobile ? "0.8rem" : "1rem",
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
			<SpeakerName onClick={handleNameClick}>{name}</SpeakerName>
			<SpeakerPost>{post}</SpeakerPost>
			<SpeakerDesc>{desc}</SpeakerDesc>
		</CardContent>
	);

	return <EventCard variant="outlined">{Itemcard}</EventCard>;
};

export default SpeakerItem;