import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import "./css/Whatdowelearn.css";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const Whatdowelearnbox = styled(Box)({
	marginTop : "35px",
    marginLeft : "30px",
    width : "200px",
    backgroundColor: "rgba(42,43,42,255)",
	borderRadius: "20px",
	height: "215px",
    display: "flex",
	flexDirection: "row",
	alignItems: "center",
    border: "solid"
});

const KnowMore = styled(IconButton)({
    color:'white',
    fontSize:'16px',
    borderRadius:'0px',
    position:'relative',
    marginLeft:'-8px'
});

const Arrow = styled(EastIcon)({
    marginLeft : "10px"
});

const Whatdowelearn = () =>{
    return(
        <>
            <h1 className="Whatdowelearn-title">What Do You Learn</h1>
            <BackgroundBox
				color="blue"
				position="right"
				index={0}
			/>
                <div className="Whatdowelearn-upper">  
                    <Whatdowelearnbox>
                    <img src = "" className = "Whatdowelearn-image" ></img>
                    </Whatdowelearnbox>
                    <div className="element">
                        <h2>Broaden your understanding of the corporate world</h2>
                        <span>IEC's introductory event meant for freshers essentially to get the essence of 
                        'our vision and mission'.It is a delightful experience with a Bollywood twist where 
                        freshers get hands-on experience about entrepreneurship.</span><br />
                        <KnowMore> Know More <Arrow /></KnowMore>
                    </div>

                    <Whatdowelearnbox>
                    <img src = "" ></img>
                    </Whatdowelearnbox>
                    <div className="element">
                        <h2>Concepts about entrepreneurship</h2>
                        <span>IEC's introductory event meant for freshers essentially to get the essence of 
                        'our vision and mission'.It is a delightful experience with a Bollywood twist where 
                        freshers get hands-on experience about entrepreneurship.</span><br />
                        <KnowMore> Know More <Arrow /></KnowMore>
                    </div>
                </div>
                <div className="Whatdowelearn-upper">  
                    <Whatdowelearnbox>
                    <img src = "" className = "Whatdowelearn-image" ></img>
                    </Whatdowelearnbox>
                    <div className="element">
                        <h2>Having fun while Learning</h2>
                        <span>IEC's introductory event meant for freshers essentially to get the essence of 
                        'our vision and mission'.It is a delightful experience with a Bollywood twist where 
                        freshers get hands-on experience about entrepreneurship.</span><br />
                        <KnowMore> Know More <Arrow /></KnowMore>
                    </div>

                    <Whatdowelearnbox>
                    <img src = "" ></img>
                    </Whatdowelearnbox>
                    <div className="element">
                        <h2>Opportunities for networking</h2>
                        <span>IEC's introductory event meant for freshers essentially to get the essence of 
                        'our vision and mission'.It is a delightful experience with a Bollywood twist where 
                        freshers get hands-on experience about entrepreneurship.</span><br />
                        <KnowMore> Know More <Arrow /></KnowMore>
                    </div>
                </div>
        </>
        
        
        
    )
}

export default Whatdowelearn