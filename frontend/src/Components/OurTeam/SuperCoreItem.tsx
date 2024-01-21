import React from 'react'
import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Props {
	index: number;
	photo: string;
	name: string;
	desg: string;
}

const SuperCoreItem = (props: Props) => {
	const { index, photo, name, desg } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const MemberCard = styled(Card)({
		width: isMobile && window.innerWidth < 600 ? "95%" : "350px",
		height: "450px",
		padding: "5px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		zIndex: 1,
	});
	const SuperCorePic = styled(Box)({
		background: "grey",
		width: isMobile && window.innerWidth < 600 ? "100%" : "318px",
		height: "300px",
		borderRadius: "10px",
		zIndex: 1,
	});
	const SuperCoreContainer = styled(Box)({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	});
	const SuperCoreName = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: "1.5rem",
		fontWeight: "bold",
		color: "white",
		marginTop: "20px",
		zIndex: 1,
	});
	
	const SuperCoreDesg = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		fontSize: isMobile && window.innerWidth < 600 ? "0.8rem" : "1rem",
		color: "rgba(255, 255, 255, 0.8)",
		zIndex: 1,
        width:'170px'
	});

	const Itemcard = (
		<CardContent>
			<SuperCorePic>
				<img
					src={photo}
					alt=""
				/>
			</SuperCorePic>
			<SuperCoreContainer>
				<SuperCoreName>{name}</SuperCoreName>
             
				<SuperCoreDesg>{desg}</SuperCoreDesg>
			</SuperCoreContainer>
		</CardContent>
	);
	return <MemberCard variant="outlined">{Itemcard}</MemberCard>;
};

export default SuperCoreItem