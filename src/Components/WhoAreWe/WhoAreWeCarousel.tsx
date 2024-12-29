import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
			<BackgroundBox
				color="blue"
				position="right"
				index={0}
			/>

			<BackgroundBox
				color="orange"
				position="left"
				index={0.7}
			/>

			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={true}
				showDots={false}
				ssr={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				keyBoardControl={true}
				arrows={false}
				transitionDuration={1000}
			>
				<MissionCard />
				<VisionCard />
			</Carousel>
		</>
	);
};

export default WhoAreWeCarousel;
