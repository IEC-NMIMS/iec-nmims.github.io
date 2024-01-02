import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events";
import WhoAreWe from "./Components/Pages/WhoAreWe";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatDo from "./Components/Pages/WhatDo";
import WhatDoWeLearn from "./Components/Pages/WhatDoWeLearn";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";

function App() {
	return (
		<>
			<BackgroundBox
				color="blue"
				position="left"
				index={0}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={1}
			/>

			<BackgroundBox
				color="blue"
				position="left"
				index={2}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={3}
			/>

			<Navbar />
			<WhoAreWe />
			<WhatDo />
			<WhatDoWeLearn />
			<Events />
			<ContactUs />
		</>
	);
}

export default App;
