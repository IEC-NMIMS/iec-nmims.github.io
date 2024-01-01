import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events";
import WhatDo from "./Components/Pages/WhatDo";
import WhoAreWe from "./Components/Pages/WhoAreWe";
import WhatDoWeLearn from "./Components/Pages/WhatDoWeLearn";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<WhoAreWe />
			<WhatDo />
			<WhatDoWeLearn />
			<Events />
		</>
	);
}

export default App;
