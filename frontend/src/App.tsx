import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Events/Events";
import WhoAreWe from "./Components/WhoAreWe/WhoAreWe";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatDo from "./Components/WhatDo/WhatDo";
import WhatDoWeLearn from "./Components/WhatDoWeLearn/WhatDoWeLearn";
import Speaker from "./Components/Speaker/Speaker";
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
			<Speaker />
			<ContactUs />
		</>
	);
}

export default App;
