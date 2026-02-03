import { useState, useEffect, useRef } from "react";
import BlurText from "../BlurText";
import PrismaticBurst from "../PrismaticBurst";
import CylinderGallery from "../CylinderGallery/CylinderGallery";
import { motion } from "motion/react";

const Enigma = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    { url: "/images/events/enigma/DSC_0416.JPG" },
    { url: "/images/events/enigma/DSC_0419.JPG" },
    { url: "/images/events/enigma/IMG_6100.jpeg" },
    { url: "/images/events/enigma/IMG_9162.JPG" },
    { url: "/images/events/enigma/IMG_9172.JPG" },
    { url: "/images/events/enigma/IMG_9175.JPG" },
    { url: "/images/events/enigma/IMG_9189.JPG" },
    { url: "/images/events/enigma/IMG_9233.JPG" },
    { url: "/images/events/enigma/IMG_9240.JPG" },
    { url: "/images/events/enigma/IMG_9288.JPG" },
    { url: "/images/events/enigma/IMG_9292.JPG" },
    { url: "/images/events/enigma/IMG_9293.JPG" },
    { url: "/images/events/enigma/IMG_9296.JPG" },
    { url: "/images/events/enigma/IMG_9303.JPG" },
    { url: "/images/events/enigma/IMG_9322.JPG" },
    { url: "/images/events/enigma/IMG_9338.JPG" },
    { url: "/images/events/enigma/IMG_9347.JPG" },
  ];

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
    const galleryTimer = setTimeout(() => {
      setShowGallery(true);

      // Gradually animate rotation speed from 1 to 0.14
      const speedInterval = setInterval(() => {
        setRotationSpeed((prev) => {
          const newSpeed = prev - 0.012;
          if (newSpeed <= 0.14) {
            clearInterval(speedInterval);
            return 0.14;
          }
          return newSpeed;
        });
      }, 60);

      return () => {
        clearInterval(speedInterval);
      };
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(galleryTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "150vh",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
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
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          padding: "0 5%",
        }}
      >
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
          style={{
            textAlign: "center",
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
          style={{
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
          }}
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
