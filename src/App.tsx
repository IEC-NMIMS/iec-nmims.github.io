import Events from "./Components/Events/Events";
import WhoAreWe from "./Components/WhoAreWe/WhoAreWe";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhatDoWeDo from "./Components/WhatDoWeDo/WhatDoWeDo";
import WhatDoWeLearn from "./Components/WhatDoWeLearn/WhatDoWeLearn";
import Speaker from "./Components/Speaker/Speaker";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import Home from "./Components/Home/Home";
import WhatTheyThinkOfIEC from "./Components/WhatTheyThinkOfIEC/WhatTheyThinkOfIEC";
import InnoVision from "./Components/InnoVision/InnoVision";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors.tsx";

function App() {
	return (
		<>
			<BackgroundBox />

			<Home />
			<WhoAreWe />
			<WhatDoWeDo />
			<WhatDoWeLearn />
			<Events />
			<Sponsors/>
			<Speaker />
			<InnoVision />
			<WhatTheyThinkOfIEC />
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
