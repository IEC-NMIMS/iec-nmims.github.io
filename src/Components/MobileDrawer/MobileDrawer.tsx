import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import EastIcon from "@mui/icons-material/East";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
	color: string;
	position: string;
	index: number;
}

const BackgroundBox = (props: Props) => {
	const { color, position, index } = props;
	const colorGradient =
		color.toLowerCase() === "blue"
			? "linear-gradient(to bottom right,rgba(0, 80, 217,1)40%, rgba(0,212,255,1)80%,rgba(0, 232, 255)10%,#000 )"
			: "linear-gradient(to bottom right,rgba(241, 227, 180)5%,rgba(251, 130, 59)30%,rgba(255, 92, 0)100%,#000 )";
	const FadedBox = styled(Box)({
		height: "350px",
		width: "350px",
		borderRadius: "100%",
		filter: "blur(30px)",
		position: "absolute",
		left: position.toLowerCase() == "left" ? "-50px" : "",
		right: position.toLowerCase() == "right" ? "0" : "",
		backgroundImage: colorGradient,
		top: index == 0 ? "-100px" : "",
		bottom: index == 1 ? "0px" : "",
		opacity: 0.4,
		zIndex: 0,
	});

	return <FadedBox />;
};

const MobileDrawer = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const navigate = useNavigate();

	const [state, setState] = React.useState(false);

	const toggleDrawer = () => () => {
		setState(!state);
	};

	const NavbarContainer = styled(Box)({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: "20px",
	});

	const Logo = styled(Typography)({
		color: "white",
		fontFamily: "ITCAvantGardeGothicStd",
		fontWeight: "bold",
		fontSize: "1.5rem",
	});

	const HamburgerMenu = styled(MenuIcon)({
		color: "white",
		fontSize: "3rem",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const MenuBox = styled(Box)({
		width: "auto",
		height: "500px",
		backgroundColor: "black",
		color: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	});

	const MenuList = styled(List)({
		width: "80%",
		borderRadius: "20px",
		backgroundColor: "rgba(42, 43, 42, 0.3)",
		padding: "20px 20px",
	});
	const LinkText = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		color: "white",
		fontSize: isMobile ? "0.9rem" : "1.2rem",
		padding: "0 20px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
	});
	const MenuListItemText = styled(Typography)({
		fontSize: "1.2rem",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
	});

	const MenuButton = styled(Button)({
		width: "170px",
		backgroundColor: "white",
		borderRadius: "10px",
		textTransform: "none",
		margin: "20px 10px",
		display: "flex",
		flexDirection: "row",
	});

	const MenuButtonText = styled(Typography)({
		color: "black",
		fontSize: "1em",
		fontWeight: "bold",
		fontFamily: "ITCAvantGardeGothicStd",
		marginTop: "4px",
	});
	const Image = styled("img")({
		height: "auto",
		maxHeight: "40px",
		width: "auto",
		maxWidth: "100%",
		objectFit: "contain"
	});
	const Arrow = styled(EastIcon)({
		color: "black",
		marginLeft: "auto",
	});

	const list = () => (
		<>
			<BackgroundBox
				color="blue"
				position="left"
				index={0}
			/>
			<BackgroundBox
				color="yellow"
				position="right"
				index={1}
			/>
			<MenuBox
				role="presentation"
				onClick={toggleDrawer()}
			>
				<MenuList>
					<ListItem
						disablePadding
						onClick={() => {
							const element = document.getElementById("home");
							const href = window.location.href.split("/");
							const length = window.location.href.split("/").length;

							if (href[length - 1] === "") {
								element?.scrollIntoView({
									behavior: "smooth",
								});
							} else {
								navigate("/");
							}
						}}
					>
						<ListItemButton>
							<MenuListItemText>Home</MenuListItemText>
						</ListItemButton>
					</ListItem>

					<ListItem
						disablePadding
						onClick={() => {
							const element = document.getElementById("events");
							const href = window.location.href.split("/");
							const length = window.location.href.split("/").length;

							if (href[length - 1] === "") {
								element?.scrollIntoView({
									behavior: "smooth",
								});
							} else {
								navigate("/");
							}
						}}
					>
						<ListItemButton>
							<MenuListItemText>Events</MenuListItemText>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<NavLink
							to="/inceptio"
							style={{ textDecoration: "none", color: "white" }}
						>
							<ListItemButton>
								<MenuListItemText>Inceptio</MenuListItemText>
							</ListItemButton>
						</NavLink>
					</ListItem>

					<ListItem disablePadding>
						<NavLink
							to="/our-team"
							style={{ textDecoration: "none", color: "white" }}
						>
							<ListItemButton>
								<MenuListItemText>Our Team</MenuListItemText>
							</ListItemButton>
						</NavLink>
					</ListItem>

					<ListItem
						disablePadding
						onClick={() => {
							const element = document.getElementById("about-us");
							const href = window.location.href.split("/");
							const length = window.location.href.split("/").length;

							if (href[length - 1] === "") {
								element?.scrollIntoView({
									behavior: "smooth",
								});
							} else {
								navigate("/");
							}
						}}
					>
						<ListItemButton>
							<MenuListItemText>About Us</MenuListItemText>
						</ListItemButton>
					</ListItem>

					<NavLink
						to="https://unstop.com/college-fests/inceptio-70-the-entrepreneurial-festival-narsee-monjee-institute-of-management-studies-nmims-mumbai-191469"
						style={{ textDecoration: "none", color: "white" }}
						target="_blank"
					>
						<MenuButton variant="contained">
							<MenuButtonText>Register Now</MenuButtonText>
							<Arrow />
						</MenuButton>
					</NavLink>
				</MenuList>
			</MenuBox>
		</>
	);

	return (
		<div>
			{isMobile && (
				<NavbarContainer>
					<Logo>
						<LinkText
							onClick={() => {
								const element = document.getElementById("home");
								const href = window.location.href.split("/");
								const length = window.location.href.split("/").length;

								if (href[length - 1] === "") {
									element?.scrollIntoView({
										behavior: "smooth",
									});
								} else {
									navigate("/");
								}
							}}
						>
							<Image src="/images/logo/iec-logo.svg" />
						</LinkText>
					</Logo>
					<HamburgerMenu
						id="navbar"
						onClick={toggleDrawer()}
					/>
				</NavbarContainer>
			)}
			<Drawer
				anchor="top"
				open={state}
				onClose={toggleDrawer()}
			>
				{list()}
			</Drawer>
		</div>
	);
};

export default MobileDrawer;