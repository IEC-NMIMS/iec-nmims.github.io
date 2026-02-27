import { useState, useEffect, useRef } from "react";
import BlurText from "../BlurText";
import PrismaticBurst from "../PrismaticBurst";
import CylinderGallery from "../CylinderGallery/CylinderGallery";
import { motion } from "motion/react";

// Static data — hoisted outside component to avoid re-creation on every render
const galleryImages = [
  { url: "/images/events/enigma/DSC_0416.avif" },
  { url: "/images/events/enigma/DSC_0419.avif" },
  { url: "/images/events/enigma/IMG_6100.avif" },
  { url: "/images/events/enigma/IMG_9162.avif" },
  { url: "/images/events/enigma/IMG_9172.avif" },
  { url: "/images/events/enigma/IMG_9175.avif" },
  { url: "/images/events/enigma/IMG_9189.avif" },
  { url: "/images/events/enigma/IMG_9233.avif" },
  { url: "/images/events/enigma/IMG_9240.avif" },
  { url: "/images/events/enigma/IMG_9288.avif" },
  { url: "/images/events/enigma/IMG_9292.avif" },
  { url: "/images/events/enigma/IMG_9293.avif" },
  { url: "/images/events/enigma/IMG_9296.avif" },
  { url: "/images/events/enigma/IMG_9303.avif" },
  { url: "/images/events/enigma/IMG_9322.avif" },
  { url: "/images/events/enigma/IMG_9338.avif" },
  { url: "/images/events/enigma/IMG_9347.avif" },
];

// Static inline styles — hoisted to avoid new object creation per render
const rootStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "150vh",
  overflow: "hidden",
  backgroundColor: "#000000",
};

const bgStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 0,
  width: "100%",
  height: "100%",
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%",
  padding: "0 5%",
};

const galleryWrapperStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  transform: "translateY(-50%)",
  zIndex: 5,
  width: "100%",
  height: "80vh",
  pointerEvents: "auto",
  filter: "brightness(0.9)",
};

// Speed easing constants
const SPEED_START = 1;
const SPEED_END = 0.14;
const SPEED_EASE_DURATION = 5000; // ms for the easing to complete

const Enigma = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Use a ref for rotation speed to avoid re-rendering children (~72 times during easing)
  const rotationSpeedRef = useRef(SPEED_START);
  const [rotationSpeed, setRotationSpeed] = useState(SPEED_START);

  useEffect(() => {
    // Scroll to center content on load
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Start showing description after title animation completes
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 2000);

    // Show gallery and start animation after description appears
    let speedRaf: number | undefined;
    const galleryTimer = setTimeout(() => {
      setShowGallery(true);

      // Animate rotation speed from SPEED_START to SPEED_END using rAF + ref
      // Only triggers a React state update every ~10 frames (for the indicator)
      const easeStart = performance.now();
      let frameCount = 0;

      const easeSpeed = (now: number) => {
        const elapsed = now - easeStart;
        const progress = Math.min(elapsed / SPEED_EASE_DURATION, 1);
        // Smooth ease-out curve
        const eased = 1 - (1 - progress) * (1 - progress);
        const speed = SPEED_START + (SPEED_END - SPEED_START) * eased;
        rotationSpeedRef.current = speed;

        // Update React state sparingly (every 10th frame) for the prop
        frameCount++;
        if (frameCount % 10 === 0 || progress >= 1) {
          setRotationSpeed(speed);
        }

        if (progress < 1) {
          speedRaf = requestAnimationFrame(easeSpeed);
        }
      };
      speedRaf = requestAnimationFrame(easeSpeed);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(galleryTimer);
      if (speedRaf !== undefined) cancelAnimationFrame(speedRaf);
    };
  }, []);

  return (
    <div style={rootStyle}>
      {/* Background */}
      <div style={bgStyle}>
        <PrismaticBurst
          intensity={3}
          speed={0.5}
          animationType="rotate3d"
          colors={["#fe7f2e", "#29369e", "#11103a"]}
          distort={8}
          rayCount={12}
          mixBlendMode="lighten"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} style={contentStyle}>
        <motion.div
          animate={{
            y: showDescription ? -40 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <BlurText
            text="Enigma"
            delay={80}
            className="blur-text-enigma"
            animateBy="letters"
            direction="bottom"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showDescription ? 1 : 0,
            y: showDescription ? 0 : 30,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="enigma-description"
        >
          Enigma marks the beginning of every IEC journey. Designed as our
          introductory event for freshers, it blends creativity, collaboration,
          and curiosity into an interactive experience. Through engaging games,
          team-based challenges, and thought-provoking activities, Enigma
          introduces participants to IEC's vision, values, and spirit of
          entrepreneurship.
        </motion.p>
      </div>

      {/* Gallery Section - Behind content */}
      {showGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={galleryWrapperStyle}
        >
          <CylinderGallery
            images={galleryImages}
            rotationSpeed={rotationSpeed}
            imageWidth={320}
            imageSpacing={12}
            showIndicator={true}
            cardRotation={{ x: 0, y: 0, z: 0 }}
            cardTransformOrigin="center bottom"
            camera={{ x: 0, y: 0, z: 0, pitch: 0, yaw: 0, roll: 0 }}
          />
        </motion.div>
      )}

      <style>{`
				.blur-text-enigma {
					color: white;
					font-size: 10rem;
					font-weight: bold;
					text-align: center;
					font-family: "ITCAvantGardeGothicStd", sans-serif;
					letter-spacing: 0.1em;
					margin-bottom: 0;
				}
				.enigma-description {
					color: white;
					font-size: 1.2rem;
					font-style: italic;
					text-align: center;
					font-family: "ITCAvantGardeGothicStd", sans-serif;
					max-width: 800px;
					line-height: 1.8;
					margin-top: 1rem;
          opacity: 1;
				}
				@media (max-width: 768px) {
					.blur-text-enigma {
						font-size: 5rem;
					}
					.enigma-description {
						font-size: 1rem;
						max-width: 90%;
						line-height: 1.6;
					}
				}
			`}</style>
    </div>
  );
};

export default Enigma;
