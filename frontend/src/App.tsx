import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Aboutus from "./Components/Pages/Aboutus";
import Ourteam from "./Components/Pages/Ourteam";
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
		</>
	);
}

export default App;
