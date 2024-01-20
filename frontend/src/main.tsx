import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event from "./Components/Events/Event/Event.tsx";
import WhoAreWeCarousel from "./Components/WhoAreWe/WhoAreWeCarousel.tsx";
import Inceptio from "./Components/Inceptio/Inceptio.tsx";
// import OurTeam from "./Components/OurTeam/OurTeam";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<p style={{ color: "white" }}>{window.innerWidth + " " + window.innerHeight}</p>
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
			{/* <Route
				path="/our-team"
				element={<OurTeam />}
			/> */}
		</Routes>
	</BrowserRouter>
);
