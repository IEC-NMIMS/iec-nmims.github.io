import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react';
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props{
    image:string;
    name:string;
    desc:string;
}


const Item = (props:Props) => {
const {image,name,desc}=props
const EventCard =styled(Card)({
    marginLeft:'100px',
    width:'350px', 
    height:'600px',
    padding:'5px',
    backgroundColor:'rgba(42,43,42,.6)',
    borderRadius:'10px',
    
})
const EventPic=styled(Box)({
    background:'grey',
    width:'320px',
    height:'300px',
    borderRadius:'10px'
})
const EventName =styled(Typography)({
    fontFamily:'sans-serif',
    fontSize:'30px',    
    color:'white',
    margin:'20px 0 10px 0'
})
const EventDesc= styled(Typography)({
    fontFamily:'sans-serif',
    fontSize:'15px',   
    color:'white' 
})
const KnowMore = styled(IconButton)({
    color:'white',
    fontSize:'16px',
    borderRadius:'0px',
    margin:'10px 0 0 0',
    position:'fixed',
    bottom:'20px'
    
})
const Arrow =styled(ArrowForwardIosIcon)({
    color:'white',
    paddingLeft:'20px',
    fontSize:'16px'
})

const Itemcard=(
    <CardContent>
        <EventPic><img src={image} alt="" /></EventPic>
        <EventName>{name}</EventName>
        <EventDesc>{desc}</EventDesc>
        <KnowMore>Know More <Arrow/></KnowMore>
    </CardContent>
)
  return (
    <EventCard variant='outlined'>
        {Itemcard}

    </EventCard>
  )
}

export default Item