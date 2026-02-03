import SmoothCarousel from "../SmoothCarousel/SmoothCarousel";
import MissionCard from "./MissionCard";
import VisionCard from "./VisionCard";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const WhoAreWeCarousel = () => {
  window.scrollTo(0, 0);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024, marginleft: "10px" },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <BackgroundBox />

      <SmoothCarousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transitionDuration={500}
      >
        <MissionCard />
        <VisionCard />
      </SmoothCarousel>
    </>
  );
};

export default WhoAreWeCarousel;
