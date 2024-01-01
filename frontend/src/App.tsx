import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Ourteam from "./Components/Pages/Ourteam";
import SampleEvents from "./Components/Pages/sampleEvents";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import Events from "./Components/Pages/Events";
const App = () => {
	return (
		<>
			<Navbar />
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
			
			{/* <Home/>
			<Aboutus />
			<Ourteam />
			<Events /> */}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route path="/events"
				element={<Events/>}
				/>

        
				
				
				<Route
					path="/sampleevents"
					element={<SampleEvents/>}
				/>
			</Routes>
		</>
	);
};

export default App;
