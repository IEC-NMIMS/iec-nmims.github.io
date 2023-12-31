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

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BackgroundBox color="blue" position="left" index={1} />

      <BackgroundBox color="yellow" position="right" index={2} />

			{/* <Home/>
			<Aboutus />
			<Ourteam />
<<<<<<<<< Temporary merge branch 1
			<Events /> */}
=========
			<Events />
			<Whoarewe />
>>>>>>>>> Temporary merge branch 2

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
<<<<<<<<< Temporary merge branch 1
			</Routes>
=========
				<Route
					path="/whoarewe"
					element={<Whoarewe />}
				/>
			</Routes> */}
>>>>>>>>> Temporary merge branch 2
		</>
	);
};

export default App;
