import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const SectionContainer = styled(Container)`
	display: grid;
	place-items: center;
	max-width: 600px;
	padding: 4px;
	z-index: 1;
`;

const Heading = styled(Typography)`
	font-size: 3rem;
	padding-bottom: 10px;
	margin-left: -550px;
	padding-bottom: 50px;
	color: white;
`;

const ContentGrid = styled(Grid)`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const StyledPaper = styled(Paper)`
	padding: 16px;
	width: 300px;
	height: 350px;
	background-color: transparent;
	color: white;
`;

const HeadingText = styled(Typography)`
	color: white;
	font-size: 2.25rem;
	padding-top: 40px;
	padding-bottom: 20px;
`;

const ContentText = styled(Typography)`
	margin-bottom: 1.5em;
	font-weight: 100;
	font-size: 16px;
`;

const WhatDo = () => {
	const headings = ["Workshops", "Projects", "Startups"];

	return (
		<SectionContainer>
			<Heading>What do we do</Heading>
			<ContentGrid
				container
				spacing={3}
			>
				{headings.map((heading, index) => (
					<Grid
						item
						key={index}
					>
						<StyledPaper
							elevation={3}
							sx={{
								borderRight: index === 0 || index === 1 ? "3px solid gray" : "none",
							}}
						>
							<HeadingText>{heading}</HeadingText>
							<ContentText>
								{/* Add content specific to each heading */}
								{index === 1 && (
									<>
										We, at IEC, salute the effort that goes into projects, and
										wish to increase their visibility. It is for this reason
										that we offer projects a space to display their work and get
										their buzz going. Through our network, we also partner
										projects with the most apt mentors for them.
									</>
								)}
								{index === 2 && (
									<>
										The ultimate dream of so many soon-to-be entrepreneurs and
										innovators! Each action of IEC, be it workshops,
										competitions, seminars, and even crowdfunding events, is
										carefully taken to help such people take one step towards
										realising their vision.
									</>
								)}
								{index !== 1 && index !== 2 && (
									<>
										{/* Default content for other headings */}
										“It always seems impossible till <br /> it’s done.” -Nelson
										Mandela <br /> The agenda of all workshops held by IEC is to
										normalize the entrepreneurial transition from college to the
										real world, and to help develop skills. Workshops on
										everything from B-Plan Writing to Idea Validation, have
										taught students to embrace the needs for fostering
										innovation.
									</>
								)}
							</ContentText>
						</StyledPaper>
					</Grid>
				))}
			</ContentGrid>
		</SectionContainer>
	);
};

export default WhatDo;
