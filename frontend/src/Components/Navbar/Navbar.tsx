import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const NavBox = styled(Box)({
		margin: "20px 0 20px 0",
		backgroundColor: "rgba(42,43,42, 0.8)",
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
		width: isMobile ? "100px" : "200px",
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
		fontSize: isMobile ? "0.9rem" : "1.2rem",
		padding: "0 20px",
		cursor: "pointer",
	});

	const Register = styled(IconButton)({
		backgroundColor: "white",
		borderRadius: "15px",
		marginLeft: "20px",
		right: "10px",
		padding: "0 15px",
		width: isMobile ? "175px" : "220px",
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
		fontSize: isMobile ? "0.9rem" : "1.2rem",
	});

	const Arrow = styled(EastIcon)({
		marginLeft: "auto",
	});
	return (
		<NavBox>
			<Logo>
				<img
					src="Images/Logo.svg"
					height="50px"
				/>
			</Logo>

			<Links>
				<LinkText
					onClick={() => {
						const element = document.getElementById("home");
						element?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					Home
				</LinkText>
				<LinkText
					onClick={() => {
						const element = document.getElementById("events");
						element?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					Events
				</LinkText>
				<LinkText>
					<NavLink
						to="/inceptio"
						style={{ textDecoration: "none", color: "white" }}
					>
						Inceptio
					</NavLink>
				</LinkText>
				<LinkText>
					<NavLink
						to="/our-team"
						style={{ textDecoration: "none", color: "white" }}
					>
						Our Team
					</NavLink>
				</LinkText>
				<LinkText
					onClick={() => {
						const element = document.getElementById("about-us");
						element?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					About Us
				</LinkText>
			</Links>
			<Register>
				<RegisterText>Register Now</RegisterText>
				<Arrow />
			</Register>
		</NavBox>
	);
};

export default Navbar;
