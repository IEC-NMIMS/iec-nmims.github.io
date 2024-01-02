import React from "react";
import { SpeakerList } from "./SpeakerData";
import SpeakerItem from "./SpeakerItem";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const SpeakerBox = styled(Box)({
	display: "flex",
	flexDirection: "row",
});
const Speaker = () => {
	return (
		<SpeakerBox>
			{SpeakerList.map((info) => (
				<SpeakerItem
					image={info.image}
					name={info.name}
					post={info.post}
					desc={info.desc}
				></SpeakerItem>
			))}
		</SpeakerBox>
	);
};

export default Speaker;
