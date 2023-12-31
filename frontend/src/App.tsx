import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Ourteam from "./Components/Pages/Ourteam";
import Events from "./Components/Pages/Events";
import Whoarewe from "./Components/Pages/Whoarewe";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import WhatDo from "./Components/Pages/WhatDo";
import Whatdowelearn from "./Components/Pages/Whatdowelearn";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Whoarewe />
			<WhatDo />
			<Whatdowelearn />
			<Events />

			{/* <Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/aboutus"
					element={<Aboutus />}
				/>
				<Route
					path="/ourteam"
					element={<Ourteam />}
				/>
				<Route
					path="/events"
					element={<Events />}
				/>
			</Routes> */}
		</>
	);
}

export default App;
