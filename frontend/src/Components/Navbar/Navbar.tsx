import React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { NavLink, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';
import Typography from '@mui/material/Typography';
// import IecLogo from  ; 

const NavBox = styled(Box)({
    margin:'20px',
    backgroundColor:'rgba(42,43,42,255)',
    borderRadius:'20px',
    height:'72px',
    display:'flex', 
    flexDirection:'row',
    padding:'10px',
    

})
const Logo =styled(Box)({
width:'200px',
})

const Links =styled(Box)({
    width:'300px',
    display:'flex',
    flexDirection:'row',
    color:'white',
    fontFamily:'inter'
})
const Resigter= styled(IconButton)({
    backgroundColor:'white',
    borderRadius:'10px',
    margin:'10px',
    right:'10px',
})



const Navbar = () => {
  return (
    <NavBox>
        <Logo>
            <img src=""/>
            
        </Logo>
        
        <Links>
        <Typography>Home</Typography>
        <Typography>Events</Typography>
        <Typography>Our team</Typography>
        <Typography>About us </Typography>
        
        {/* <NavLink 
            style={{textDecoration:'none'}}
            to='/home'         
        >Home</NavLink>
        <NavLink 
            style={{textDecoration:'none'}}
            to='/events'           
        >Home</NavLink>
        <NavLink 
            style={{textDecoration:'none'}}
            to='/ourteam'           
        >Home</NavLink>
        <NavLink 
            style={{textDecoration:'none'}}
            to='/aboutus'        
        >Home</NavLink> */}
        
       

    </Links> 
    <Resigter>
        
        Register Now 
        <EastIcon/>
        
    </Resigter>
    </NavBox>
  )
}

export default Navbar;