import React from 'react'
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import "./css/Whoarewe.css";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";

const Whoarewebox = styled(Box)({
	margin: "20px",
    backgroundColor: "rgba(42,43,42,255)",
	borderRadius: "20px",
	height: "500px",
    display: "flex",
	flexDirection: "row",
	padding: "30px",
	alignItems: "center",
    color: "white",
    border: "solid"
});

const Knowmore = styled(IconButton)({
	backgroundColor: "rgb(0,185,203)",
	borderRadius: "10px",
	right: "10px",
    height: "50px",
	width: "450px",
	display: "flex",
	justifyContent: "start",
	padding: "0px 0px 0px 20px ",
	color: "black",
	fontFamily: "sans-serif",
	fontSize: "22px",
});

const Arrow = styled(EastIcon)({
	marginLeft: "200px",
    marginTop: "5px"
});

const Whoarewe = () =>{
    return(
        <Whoarewebox>
            <div className="whoarewediv1">
                <p className="whoarewetitle">
                    Who are we?
                </p>
                <p className="whoarewepara">
                The Innovation and Entrepreneurship cell (IEC)<br /> 
                of mpstme is a student body, certified by the<br /> 
                Ministry of Education. Government of India, and<br /> 
                aims to inculcate and entrepreneurial and innovative<br /> 
                environment in the institute. We want to keep up the<br /> 
                spirit of entrepreneurship in the minds of the youth<br /> 
                and create passion amongst the students who<br /> 
                wish to pursue you entrepreneurship as a career.<br />
                </p>
                <br />
                <Knowmore>
                    <div>
                        Click to know more 
                    </div>
                    <div>
                    <Arrow />
                    </div>
                </Knowmore>
            </div>
            <div className="whoarewediv2">
                <img className="whoareweimg"
                    src="Images/White.svg"
                />
            </div>
        </Whoarewebox>
        
    )
}

export default Whoarewe