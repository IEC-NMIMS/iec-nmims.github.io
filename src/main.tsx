import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Event from "./Components/Events/Event/Event.tsx";
import WhoAreWeCarousel from "./Components/WhoAreWe/WhoAreWeCarousel.tsx";
import Inceptio from "./Components/Inceptio/Inceptio.tsx";
import InceptioEvent from "./Components/Events/Inceptio/InceptioEvent.tsx";
import OurTeam from "./Components/OurTeam/OurTeam.tsx";
import Enigma from "./Components/Enigma/Enigma.tsx";
import Unplanned from "./Components/Unplanned/Unplanned.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import MobileDrawer from "./Components/MobileDrawer/MobileDrawer.tsx";
import Credits from "./Components/Credits/Credits.tsx";   
import ConceptShow from "./Components/ConceptShow/ConceptShow.tsx"; // ✅ NEW

import {
  Box,
  Fab,
  Fade,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/* ---------------- Scroll To Top Button ---------------- */

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#navbar");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 2 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

/* ---------------- App Wrapper ---------------- */

const RenderApp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      {!isMobile ? <Navbar /> : <MobileDrawer />}

      {/* SCROLL TO TOP BUTTON */}
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vision-mission" element={<WhoAreWeCarousel />} />

        {/* EVENTS */}
        <Route path="/events" element={<Event />} />
        <Route path="/events/enigma" element={<Enigma />} />
        <Route path="/events/unplanned" element={<Unplanned />} />
        <Route path="/events/inceptio" element={<InceptioEvent />} />
        <Route path="/events/concept-show" element={<ConceptShow />}/>

        {/* LEGACY INCEPTIO PAGE */}
        <Route path="/inceptio" element={<Inceptio />} />

        {/* OTHER */}
        <Route path="/our-team" element={<OurTeam />} />

        {/* ✅ CREDITS */}
        <Route path="/credits" element={<Credits />} />
      </Routes>

    </BrowserRouter>
  );
};

ReactDOM.createRoot(
  document.getElementById("root")!
).render(<RenderApp />);
