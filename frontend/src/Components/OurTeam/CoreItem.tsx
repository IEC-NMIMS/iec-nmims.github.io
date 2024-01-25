import React from "react";
import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Props {
	index: number;
	photo: string;
	depname: string;
}

const CoreItem = (props: Props) => {
	const { index, photo, depname } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const MemberCard = styled(Card)({
		width: isMobile && window.innerWidth < 600 ? "95%" : "350px",
		height: "400px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		zIndex: 1,
	});
	const CorePic = styled(Box)({
		background: "grey",
		width: isMobile && window.innerWidth < 600 ? "100%" : "318px",
		height: "300px",
		borderRadius: "10px",
		zIndex: 1,
	});
	const Image = styled("img")({
		width: "100%",
		height: "100%",
		borderRadius: "10px",
	});
	const CoreContainer = styled(Box)({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		zIndex: 2,
		width: "100%",
	});
	const DepName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 600 ? "1.2rem" : "1.5rem",
		textAlign: "center",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		zIndex: 3,
	});

	const Itemcard = (
		<CardContent>
			<CorePic>
				<Image src={photo} />
			</CorePic>
			<CoreContainer>
				<DepName>{depname}</DepName>
			</CoreContainer>
		</CardContent>
	);
	return <MemberCard variant="outlined">{Itemcard}</MemberCard>;
};

export default CoreItem;
