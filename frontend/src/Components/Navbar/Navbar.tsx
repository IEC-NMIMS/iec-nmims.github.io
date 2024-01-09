import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";

const NavBox = styled(Box)({
	margin: "20px 0 20px 0",
	backgroundColor: "rgba(42,43,42, 0.3)",
	borderRadius: "20px",
	height: "72px",
	display: "flex",
	flexDirection: "row",
	padding: "10px",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1,
});

const Logo = styled(Box)({
	width: "200px",
	display: "flex",
	left: "100px",
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

const LinkText = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	color: "white",
	fontSize: "20px",
	padding: "0 20px",
	cursor: "pointer",
});

const Register = styled(IconButton)({
	backgroundColor: "white",
	borderRadius: "15px",
	marginLeft: "20px",
	right: "10px",
	padding: "0 15px",
	width: "220px",
	height: "50px",
	display: "flex",
	justifyContent: "start",
	color: "black",
	fontSize: "22px",

	"&:hover": {
		backgroundColor: "white",
	},
});

const RegisterText = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontWeight: "bold",
	fontSize: "18px",
});

const Arrow = styled(EastIcon)({
	marginLeft: "auto",
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
				<RegisterText>Register Now</RegisterText>
				<Arrow />
			</Register>
		</NavBox>
	);
};

export default Navbar;
