import React from 'react'
import SuperCoreItem from './SuperCoreItem'
import { CoreDep, SuperCorelist } from './teamList';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CoreItem from './CoreItem';

const OurTeam = () => {
 
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
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

	const OurTeamBox = styled(Box)({
		display: "flex",
		flexDirection: "column",
		margin: isMobile ? "50px 0px" : "50px 0",
		marginRight: isMobile && window.innerWidth < 600 ? "0px" : "20px",
		zIndex: 1,
	});

	const OurTeamHeader = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "3rem",
		alignSelf: isMobile && window.innerWidth < 600 ? "center" : "",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		marginBottom: "0px",
		fontWeight: "bold",
		color: "white",
		zIndex: 1,
		fontFamily: "ITCAvantGardeGothicStd",
	});
    const SuperCoreHeader = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 600 ? "1.8rem" : "1.8rem",
		alignSelf: isMobile && window.innerWidth < 600 ? "center" : "",
		marginLeft: isMobile && window.innerWidth < 600 ? "0" : "50px",
		marginTop: "40px",
        marginBottom: "40px",
		fontWeight: "bold",
		color: "white",
		zIndex: 1,
		fontFamily: "ITCAvantGardeGothicStd",
	});
   

	return (
		<OurTeamBox>
			<OurTeamHeader>Our Team</OurTeamHeader>
            <SuperCoreHeader>Super Core</SuperCoreHeader>
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
				{SuperCorelist.map((info, index) => (
					<SuperCoreItem
						index={index}
						photo={info.photo}
						name={info.Name}
						desg={info.designation}
					></SuperCoreItem>
				))}
			</Carousel>
            
            <SuperCoreHeader>Core</SuperCoreHeader>
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
				{CoreDep.map((info, index) => (
					<CoreItem
						index={index}
						photo={info.photo}						
						depname={info.department}
					></CoreItem>
				))}
			</Carousel>
		</OurTeamBox>

    )
}

export default OurTeam