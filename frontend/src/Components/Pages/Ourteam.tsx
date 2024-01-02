import React from "react";
import { SpeakerList } from "../Speaker/SpeakerData";
import SpeakerItem from "../Speaker/SpeakerItem";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
const SpeakerBox= styled(Box)({
	display:"flex",
	flexDirection:"row"

})
const Ourteam = () => {
	return <SpeakerBox>{SpeakerList.map((info)=>(<SpeakerItem image={info.image} name={info.name} post={info.post} desc={info.desc}
	  
	></SpeakerItem>))}</SpeakerBox>;
	
};

export default Ourteam;
