import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SampleEvents from "./Components/Pages/sampleEvents";
import Events from "./Components/Pages/Events";
import WhoAreWe from "./Components/Pages/WhoAreWe";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatDo from "./Components/Pages/WhatDo";
import WhatDoWeLearn from "./Components/Pages/WhatDoWeLearn";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<WhoAreWe />
			<WhatDo />
			<WhatDoWeLearn />
			<Events />
      <ContactUs />
      
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
}

export default App;
