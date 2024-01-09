import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";

const NavBox = styled(Box)({
	margin: "20px 15px 20px 25px",
	backgroundColor: "rgba(42,43,42, 0.3)",
	borderRadius: "20px",
	height: "72px",
	display: "flex",
	flexDirection: "row",
	padding: "10px",
	alignItems: "center",
	zIndex: 1,
});

const Logo = styled(Box)({
	width: "200px",
	display: "flex",
	left: "100px",
	justifyContent: "start",
	marginLeft: "10px",
	marginRight: "auto",
});

const Links = styled(Box)({
	width: "700px",
	display: "flex",
	flexDirection: "row",
	color: "white",
	justifyContent: "end",
});

const Register = styled(IconButton)({
	backgroundColor: "white",
	borderRadius: "10px",
	margin: "10px 0px 10px 50px",
	right: "10px",
	width: "220px",
	display: "flex",
	justifyContent: "start",
	padding: "0px 0px 0px 20px ",
	color: "black",
	fontFamily: "sans-serif",
	fontSize: "22px",

	"&:hover": {
		backgroundColor: "white",
	},
});

const LinkText = styled(Typography)({
	fontFamily: "Sans-serif",
	color: "white",
	fontSize: "20px",
	padding: "0 20px",
	cursor: "pointer",
});

const Arrow = styled(EastIcon)({
	margin: "20px",
});

const Navbar = () => {
	return (
		<NavBox>
			<Logo>
				<img
					src="Images/Logo.svg"
					height="50px"
				/>
			</Logo>

			<Links>
				<LinkText>Home</LinkText>
				<LinkText>Events</LinkText>
				<LinkText>Our Team</LinkText>
				<LinkText>About us</LinkText>
			</Links>
			<Register>
				Register Now
				<Arrow />
			</Register>
		</NavBox>
	);
};

export default Navbar;
