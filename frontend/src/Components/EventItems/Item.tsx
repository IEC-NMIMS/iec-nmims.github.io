import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Modal from '@mui/joy/Modal';

import { NavLink, Routes,Route } from 'react-router-dom';
import Events from '../Pages/Events';
import App from '../../App';
import { useNavigate } from 'react-router-dom';

interface urls{
    links: string;
}
interface modals{
    name: string;
    image: string;
    title:string;
    data:string;
    dates:string[];
    rules:string[];

}
interface Props{
    image:string;
    name:string;
    desc:string;
    imageList:urls[];
    modaldata:modals;
}

const Item = (props:Props) => {
    const navigate =useNavigate();
    const [isHovered, setHovered] = useState(false);
const {image,name,desc,imageList,modaldata}=props
const EventCard =styled(Card)({
    marginLeft:'100px',
    width:'350px', 
    height:'600px',
    padding:'5px',
    backgroundColor:'rgba(42,43,42,.6)',
    borderRadius:'10px',
    
})
const EventPic=styled(Box)({
    display:'flex',
    alignSelf:'center',
    
    width:'320px',
    height:'300px',
    borderRadius:'10px',
    "&.hover":{
        
    }
    
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
    bottom:'15px'
    
})
const Arrow =styled(ArrowForwardIosIcon)({
    color:'white',
    paddingLeft:'20px',
    fontSize:'16px'
})
const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const EventM=styled(Box)({
    display: 'fixed',
    justifyContent: 'center',   
    
    alignSelf: 'center',
    position: 'relative',
    top:'50px',
    
    
  })
  const handleknowmore=(name,image,title,data,dates,rules) =>{
    navigate('/events',{state:{ name:name,image:image,title:title ,data:data,dates:dates ,rules:rules}})

  }

const Itemcard=(
    
    <CardContent>
        
        <EventPic>
            {isHovered?
            <div style={{ width:"320px",height:"320px" }} onMouseLeave={handleMouseLeave}>
                <Carousel indicators={false }>
                    {imageList.map((urls)=>(<img src={urls.links} style={{ borderRadius: '20px'}}/>))}
                </Carousel>
                
            </div>:
            <img src={image} width="320px" height="320px" style={{ borderRadius: '20px'}}  onMouseEnter={handleMouseEnter}  />
            }
            
            
        </EventPic>
        <EventName>{name}</EventName>
        <EventDesc>{desc}</EventDesc>
        
        <KnowMore onClick={()=>handleknowmore(modaldata.name,modaldata.image,modaldata.title,modaldata.data,modaldata.dates,modaldata.rules )}>
            
                    Know More
                
        <Arrow/>
        
        
        </KnowMore>
        
    </CardContent>
)
  return (
    <>  
    {/* <Routes>
        <Route path='/' element={<App/>}/>
    	<Route path="/events" element={<Events name={modaldata.name} image={modaldata.image} title={modaldata.title} data={modaldata.data} dates={modaldata.dates} rules={modaldata.rules }/>}/>
        </Routes>	 */}
    
      <EventCard variant='outlined'>
        {Itemcard}


    </EventCard>
    {/* <Modal
      open={open}
      onClose={handleClose}
			>
                <EventM>
                <EventModals name={modaldata.name} image={modaldata.image} title={modaldata.title} data={modaldata.data} dates={modaldata.dates} rules={modaldata.rules } />				
                </EventM>
            </Modal> */}
            
    </>

  )
}

export default Item