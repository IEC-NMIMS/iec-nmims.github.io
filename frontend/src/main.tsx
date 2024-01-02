import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event from "./Components/Events/Event/Event.tsx";
import WhoAreWeCarousel from "./Components/WhoAreWe/WhoAreWeCarousel.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
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
		</Routes>
	</BrowserRouter>
);
