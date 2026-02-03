import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import './carousel-styles.css';

interface ResponsiveSettings {
  superLargeDesktop?: { breakpoint: { max: number; min: number }; items: number };
  desktop?: { breakpoint: { max: number; min: number }; items: number };
  tablet?: { breakpoint: { max: number; min: number }; items: number };
  mobile?: { breakpoint: { max: number; min: number }; items: number };
}

interface SmoothCarouselProps {
  children: React.ReactNode[];
  responsive?: ResponsiveSettings;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  arrows?: boolean;
  showDots?: boolean;
  infinite?: boolean;
  swipeable?: boolean;
  draggable?: boolean;
  transitionDuration?: number;
  spaceBetween?: number;
  conveyorMode?: boolean;
}

const SmoothCarousel = ({
  children,
  responsive = {},
  autoPlay = false,
  autoPlaySpeed = 3000,
  arrows = true,
  showDots = false,
  infinite = true,
  swipeable = true,
  draggable = true,
  transitionDuration = 500,
  spaceBetween = 20,
  conveyorMode = false,
}: SmoothCarouselProps) => {
  // Convert react-multi-carousel responsive format to Swiper breakpoints
  const breakpoints: { [key: number]: { slidesPerView: number } } = {};

  if (responsive.mobile) {
    breakpoints[0] = { slidesPerView: responsive.mobile.items };
  }
  if (responsive.tablet) {
    breakpoints[responsive.tablet.breakpoint.min] = { slidesPerView: responsive.tablet.items };
  }
  if (responsive.desktop) {
    breakpoints[responsive.desktop.breakpoint.min] = { slidesPerView: responsive.desktop.items };
  }
  if (responsive.superLargeDesktop) {
    breakpoints[responsive.superLargeDesktop.breakpoint.min] = { 
      slidesPerView: responsive.superLargeDesktop.items 
    };
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y, FreeMode]}
      spaceBetween={spaceBetween}
      navigation={arrows}
      pagination={showDots ? { clickable: true } : false}
      loop={infinite}
      autoplay={
        autoPlay
          ? {
              delay: conveyorMode ? 1 : autoPlaySpeed,
              disableOnInteraction: false,
              pauseOnMouseEnter: !conveyorMode,
            }
          : false
      }
      speed={conveyorMode ? 1500 : transitionDuration}
      breakpoints={breakpoints}
      allowTouchMove={swipeable || draggable}
      grabCursor={draggable}
      className={`smooth-carousel ${conveyorMode ? 'conveyor-mode' : ''}`}
      freeMode={conveyorMode}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SmoothCarousel;
