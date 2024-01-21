import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";

type Anchor = "top";

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
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const [state, setState] = React.useState(false);

	const toggleDrawer = () => (event: React.MouseEvent) => {
		setState(!state);
	};

	const HamburgerMenu = styled(MenuIcon)({
		color: "white",
		fontSize: "3rem",
		fontFamily: "ITCAvantGardeGothicStd",
		marginBottom: "20px",
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

	const Arrow = styled(EastIcon)({
		color: "black",
		marginLeft: "auto",
	});

	const list = (anchor: Anchor) => (
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
							element?.scrollIntoView({
								behavior: "smooth",
							});
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
							element?.scrollIntoView({
								behavior: "smooth",
							});
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
							element?.scrollIntoView({
								behavior: "smooth",
							});
						}}
					>
						<ListItemButton>
							<MenuListItemText>About Us</MenuListItemText>
						</ListItemButton>
					</ListItem>

					<MenuButton variant="contained">
						<MenuButtonText>Register Now</MenuButtonText>
						<Arrow />
					</MenuButton>
				</MenuList>
			</MenuBox>
		</>
	);

	return (
		<div>
			{isMobile && <HamburgerMenu onClick={toggleDrawer()} />}
			<Drawer
				anchor="top"
				open={state}
				onClose={toggleDrawer()}
			>
				{list("top")}
			</Drawer>
		</div>
	);
};

export default MobileDrawer;