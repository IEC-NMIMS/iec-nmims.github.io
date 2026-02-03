import { Suspense, lazy } from "react";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

// Lazy-loaded components for code splitting
const WhoAreWe = lazy(() => import("./Components/WhoAreWe/WhoAreWe"));
const WhatDoWeDo = lazy(() => import("./Components/WhatDoWeDo/WhatDoWeDo"));
const WhatDoWeLearn = lazy(() => import("./Components/WhatDoWeLearn/WhatDoWeLearn"));
const Events = lazy(() => import("./Components/Events/Events"));
const Sponsors = lazy(() => import("./Components/Sponsors/Sponsors"));
const Speaker = lazy(() => import("./Components/Speaker/Speaker"));
const InnoVision = lazy(() => import("./Components/InnoVision/InnoVision"));
const WhatTheyThinkOfIEC = lazy(() => import("./Components/WhatTheyThinkOfIEC/WhatTheyThinkOfIEC"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));

function App() {
	return (
		<>
			<BackgroundBox />

			<Home />
			<Suspense fallback={null}>
				<WhoAreWe />
				<WhatDoWeDo />
				<WhatDoWeLearn />
				<Events />
				<Sponsors />
				<Speaker />
				<InnoVision />
				<WhatTheyThinkOfIEC />
				<ContactUs />
			</Suspense>
			<Footer />
		</>
	);
}

export default App;
