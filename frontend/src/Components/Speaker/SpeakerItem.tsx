import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react';
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props{
    image:string;
    name:string;
    post:string;
    desc:string;
}


const SpeakerItem = (props:Props) => {
const {image,name,post,desc}=props
const EventCard =styled(Card)({
    marginLeft:'50px',
    width:'300px', 
    height:'600px',
    padding:'5px',
    backgroundColor:'rgba(42,43,42,.6)',
    borderRadius:'10px',
    
})
const SpeakerPic=styled(Box)({
    background:'grey',
    width:'270px',
    height:'300px',
    borderRadius:'10px'
})
const SpeakerName =styled(Typography)({
    fontFamily:'sans-serif',
    fontSize:'30px',    
    color:'white',
    margin:'20px 0 10px 0'
})
const SpeakerDesc= styled(Typography)({
    fontFamily:'sans-serif',
    fontSize:'15px',   
    color:'white' 
})
const Speakerpost = styled(Typography)({
    color:'white',
    fontSize:'16px',
    borderRadius:'0px',
    margin:'10px 0 0 0',
    
    bottom:'20px'
    
})



const Itemcard=(
    <CardContent>
        <SpeakerPic><img src={image} alt="" /></SpeakerPic>
        <SpeakerName>{name}</SpeakerName>
        <Speakerpost>{post}</Speakerpost>
        <SpeakerDesc>{desc}</SpeakerDesc>
        
    </CardContent>
)
  return (
    <EventCard variant='outlined'>
        {Itemcard}

    </EventCard>
  )
}

export default SpeakerItem