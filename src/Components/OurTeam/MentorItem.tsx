import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Props {
	index: number;
	photo: string;
	name: string;
}

const MentorItem = (props: Props) => {
	const { photo, name } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const MemberCard = styled(Card)({
		width: isMobile && window.innerWidth < 1024 ? "95%" : "350px",
		height: "450px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		zIndex: 1,
	});
	const MentorPic = styled(Box)({
		background: "grey",
		width: isMobile && window.innerWidth < 1024 ? "100%" : "318px",
		height: "300px",
		borderRadius: "10px",
		zIndex: 1,
	});
	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "10px",
	});
	const MentorContainer = styled(Box)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	});
	const MentorName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "1.2rem" : "1.5rem",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		zIndex: 1,
	});

	const Itemcard = (
		<CardContent>
			<MentorPic>
				<Image src={photo} />
			</MentorPic>
			<MentorContainer>
				<MentorName>{name}</MentorName>
			</MentorContainer>
		</CardContent>
	);
	return (
		<>
			<MemberCard variant="outlined">{Itemcard}</MemberCard>
		</>
	);
};

export default MentorItem;
