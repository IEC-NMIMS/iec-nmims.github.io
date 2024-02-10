import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event from "./Components/Events/Event/Event.tsx";
import WhoAreWeCarousel from "./Components/WhoAreWe/WhoAreWeCarousel.tsx";
import Inceptio from "./Components/Inceptio/Inceptio.tsx";
import OurTeam from "./Components/OurTeam/OurTeam.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import { Box, Fab, Fade, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import MobileDrawer from "./Components/MobileDrawer/MobileDrawer.tsx";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
	children: React.ReactElement;
}

function ScrollTop(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			"#navbar"
		);

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
				behavior: "smooth",
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

const RenderApp = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<BrowserRouter>
			{!isMobile ? <Navbar /> : <MobileDrawer />}
			<ScrollTop>
				<Fab
					size="small"
					aria-label="scroll back to top"
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/vision-mission"
					element={<WhoAreWeCarousel />}
				/>
				<Route
					path="/events"
					element={<Event />}
				/>
				<Route
					path="/inceptio"
					element={<Inceptio />}
				/>
				<Route
					path="/our-team"
					element={<OurTeam />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RenderApp />);
