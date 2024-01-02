import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
const ModalBox = styled(Box)({
    position: 'fixed',
   
    width: 1200,       
    borderRadius:'20px',
    backgroundColor:'rgba(42,43,42,.85)',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignSelf:'center',
    flexDirection:'column',
    height:'90%',
    msOverflowStyle:'none',
    scrollbarWidth:'none',
   
  scrollMarginTop:'20px',
  scrollMarginBottom:'20px'
    
})  
const ModalBox2=styled(Box)({
  position: 'fixed',
  width: 1180, 
  display: 'block',
  overflow:'scroll',
  height:'90%',
 
  


})
const Header = styled(Box)({
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center', 
    fontSize:'40px',
    fontFamily:'sans-serif',
    flexDirection:'row',


})
const Image = styled(Box)({
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center', 
    width:'1100px',
    height:'500px',
    backgroundColor:'grey',
    margin:'20px',
    
    borderRadius:'20px'
})
const Title = styled(Typography)({
  paddingLeft: '50px',
  fontSize:'50px',
  fontFamily:'sans-serif',
})
const Data = styled(Typography)({
  paddingLeft: '50px',
  fontSize:'25px',
  fontFamily:'sans-serif',
})
const Close= styled(CloseIcon)({
  alignSelf:'end',
  position: 'relative',
  fontSize:'30px',
  color: 'white'
})
interface modals{
  name: string;
  image: string;
  title:string;
  data:string;
  dates:string[];
  rules:string[];

}


const EventModals = (props:modals) => {
  const {name, image, title, data,dates,rules} = props
  return (
    <ModalBox>
      <ModalBox2>
              <Header>{name} <Close/></Header>
      
        <Image><img src={image} alt="" height="500px"width="1100px" /></Image>
        <Title>{title}</Title>
        <Data>{data}</Data>
        </ModalBox2>

       
    </ModalBox>
  )
}

export default EventModals