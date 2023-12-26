import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Aboutus from "./Pages/Aboutus";
// import Ourteam from "./Pages/Ourteam";
// import Events from "./Pages/Events";
import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Ourteam from "./Components/Pages/Ourteam";
import Events from "./Components/Pages/Events";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<BackgroundBox
				color="blue"
				position="left"
				index={1}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={2}
			/>

			<Home />
			<Aboutus />
			<Ourteam />
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
