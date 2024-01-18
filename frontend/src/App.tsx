import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Events/Events";
import WhoAreWe from "./Components/WhoAreWe/WhoAreWe";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatDoWeDo from "./Components/WhatDoWeDo/WhatDoWeDo";
import WhatDoWeLearn from "./Components/WhatDoWeLearn/WhatDoWeLearn";
import Speaker from "./Components/Speaker/Speaker";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import Home from "./Components/Home/Home";
import WhatTheyThinkOfIEC from "./Components/WhatTheyThinkOfIEC/WhatTheyThinkOfIEC";

function App() {
	return (
		<>
			<BackgroundBox
				color="blue"
				position="left"
				index={0.2}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={1}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={2}
			/>

			<BackgroundBox
				color="blue"
				position="right"
				index={3}
			/>

			<BackgroundBox
				color="blue"
				position="left"
				index={4}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={5}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={6}
			/>

			<BackgroundBox
				color="blue"
				position="right"
				index={7}
			/>

			<BackgroundBox
				color="blue"
				position="left"
				index={8}
			/>

			<BackgroundBox
				color="yellow"
				position="right"
				index={9}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={10}
			/>

			<BackgroundBox
				color="blue"
				position="right"
				index={10.75}
			/>

			<BackgroundBox
				color="yellow"
				position="left"
				index={11.5}
			/>

			<Navbar />
			<Home />
			<WhoAreWe />
			<WhatDoWeDo />
			<WhatDoWeLearn />
			<Events />
			<Speaker />
			<WhatTheyThinkOfIEC />
			<ContactUs />
		</>
	);
}

export default App;
