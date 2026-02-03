import { useState, useEffect } from "react";
import { SponsorList } from "./SponsorList.ts";
import SpeakerItem from "./SponsorsItem.tsx";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SmoothCarousel from "../SmoothCarousel/SmoothCarousel";

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 2.6,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const SpeakerBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    margin: isMobile ? "50px 0px" : "150px 0",
    marginLeft: isMobile ? "10px" : "0px",
    zIndex: 1,
  });

  const SpeakerHeader = styled(Typography)({
    fontSize: isMobile ? "1.8rem" : "3rem",
    alignSelf: isMobile ? "center" : "",
    marginLeft: isMobile ? "0" : "10px",
    marginBottom: "50px",
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    fontFamily: "ITCAvantGardeGothicStd",
  });

  return (
    <SpeakerBox id="sponsors">
      <SpeakerHeader>Sponsors</SpeakerHeader>
      <SmoothCarousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transitionDuration={1000}
        arrows={true}
        conveyorMode={false}
      >
        {SponsorList.map((info, index) => (
          <SpeakerItem
            key={index}
            index={index}
            image={info.image}
            name={info.name}
            desc={info.desc}
            category={info.category}
            isMobile={isMobile}
          />
        ))}
      </SmoothCarousel>
    </SpeakerBox>
  );
};

export default Sponsors;
