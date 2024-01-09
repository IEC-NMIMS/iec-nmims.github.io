import React from "react";
import { SpeakerList } from "./SpeakerData";
import SpeakerItem from "./SpeakerItem";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const SpeakerBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
	marginTop: "150px",
	marginBottom: "150px",
	zIndex: 1,
});

const SpeakerHeader = styled(Typography)({
	fontSize: "3rem",
	marginLeft: "50px",
	marginBottom: "50px",
	fontWeight: "bold",
	color: "white",
	zIndex: 1,
	fontFamily: "ITCAvantGardeGothicStd",
});

const SpeakerCards = styled(Box)({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
});

const Speaker = () => {
	return (
		<SpeakerBox>
			<SpeakerHeader>Speaker</SpeakerHeader>
			<SpeakerCards>
				{SpeakerList.map((info, index) => (
					<SpeakerItem
						index={index}
						image={info.image}
						name={info.name}
						post={info.post}
						desc={info.desc}
					></SpeakerItem>
				))}
			</SpeakerCards>
		</SpeakerBox>
	);
};

export default Speaker;
