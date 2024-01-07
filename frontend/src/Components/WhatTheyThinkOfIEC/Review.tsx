import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


interface Props {
	title:String,
    star:number,
    desc:String,
    reviewer:String,
    position:String,
}

const Review = (props:Props) => {
    const {title,star, desc,reviewer,position} = props

    const ReviewBox = styled(Box)({
        color:'white',
        width:'500px',
        backgroundColor:"rgba(42,43,42,.6)",
        borderRadius: "10px",
        height: "220px",
		padding: "10px",
    })
    const Header =styled(Box)({
        display: "flex",
        flexDirection:"row",

        
    })
    const Footer =styled(Box)({
        display: "flex",
        flexDirection:"row",
        position: "absolute",
        bottom: "15px",
        
    })

    const Title=styled(Typography)({
        color:'white',
        padding:'0px 0px 15px 15px',
        fontSize:'25px',

    })
    const Star =styled(Box)({
        color:'white',
        position:'absolute',
        right:'80px',
        paddingTop:'5px'
    })
    const Desc=styled(Typography)({
        color:'white',
        padding:'5px 0px 0px 15px',
        fontSize:'16px',
        width :'470px'
    })
    const Avatar=styled(AccountCircleRoundedIcon)({
        fontSize:'50px',
        padding:'  0 10px 0  10px '
    })

    const ReviwerInfo =styled(Box)({
        display:'flex',
        flexDirection:'column',
    })
    
    const Reviewer =styled(Typography)({
        fontSize:'18px'
    })
    const Position =styled(Typography)({
        fontSize:'14px'
    })
    const handleStar=(star:number) => {
        const stars = Array.from({ length: star }, (_, index) => (
            <StarIcon key={index} />
          ));
          return stars as React.ReactNode[];
    }

    
  return (
    <ReviewBox>
        <Header>
    <Title>{title}</Title>
    <Star>{handleStar(star)}</Star>
    </Header>
    <Desc>{desc}</Desc>
    <Footer>
        <Avatar/>
    <ReviwerInfo>
        <Reviewer>{reviewer}</Reviewer>
    <Position>{position}</Position>
    </ReviwerInfo>
    
    </Footer>
    </ReviewBox>
  )
}

export default Review