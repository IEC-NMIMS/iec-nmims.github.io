import { useState, useEffect, useRef } from "react";
import BlurText from "../BlurText";
import DomeGallery from "../DomeGallery";
import { motion } from "motion/react";

const Unplanned = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    "/images/events/unplanned5/ccjieghrsmfdszcrzccq.webp",
    "/images/events/unplanned5/dixwgt4pluk441tmapfj.webp",
    "/images/events/unplanned5/gcjylwueydgmk9w2tp10.webp",
    "/images/events/unplanned5/iaannkmvu2lgxskftsmh.webp",
    "/images/events/unplanned5/IMG_0747.webp",
    "/images/events/unplanned5/IMG_6245.webp",
    "/images/events/unplanned5/IMG_6247.webp",
    "/images/events/unplanned5/IMG_6251.webp",
    "/images/events/unplanned5/IMG_9858.webp",
    "/images/events/unplanned5/IMG_9861.webp",
    "/images/events/unplanned5/ttkde1cleuz9htl1lnci.webp",
    "/images/events/unplanned5/v5kujokn1gzarz5sy5xj.webp",
    "/images/events/unplanned5/w1yanlvuh3drnuytclxq.webp",
    "/images/events/unplanned5/ystzwla3qnk5wndzs3yy.webp",
  ];

  useEffect(() => {
    // Remove body margin for full-screen effect
    const originalMargin = document.body.style.margin;
    document.body.style.margin = "0";

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

    return () => {
      clearTimeout(timer);
      document.body.style.margin = originalMargin;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "-20px",
        width: "calc(100vw + 40px)",
        height: "100vh",
        backgroundColor: "#000000",
        zIndex: -1,
      }}
    >
      {/* Gallery Background */}
      <div
        className="unplanned-gallery"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <DomeGallery
          images={galleryImages}
          fit={0.9}
          fitBasis="auto"
          minRadius={1200}
          padFactor={0.2}
          overlayBlurColor="#000000"
          maxVerticalRotationDeg={0}
          dragSensitivity={15}
          enlargeTransitionMs={300}
          segments={30}
          dragDampening={1.5}
          grayscale={true}
          imageBorderRadius="12px"
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
          pointerEvents: "none",
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
            text="Unplanned"
            delay={80}
            className="blur-text-unplanned"
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
          className="unplanned-description"
        >
          Unplanned is IEC's signature spontaneity-driven pitching event.
          Participants are challenged to think on their feet, combining random
          prompts into innovative business ideas under tight time constraints.
          With surprise twists, rapid-fire thinking, and real-time judging,
          Unplanned celebrates adaptability, creativity, and the raw thrill of
          entrepreneurship.
        </motion.p>
      </div>

      <style>{`
        .blur-text-unplanned {
          color: white;
          font-size: 10rem;
          font-weight: bold;
          text-align: center;
          font-family: "ITCAvantGardeGothicStd", sans-serif;
          letter-spacing: 0.1em;
          margin-bottom: 0;
          text-shadow: 0 0 40px rgba(0,0,0,0.8);
        }
        .unplanned-description {
          color: white;
          font-size: 1.2rem;
          font-style: italic;
          text-align: center;
          font-family: "ITCAvantGardeGothicStd", sans-serif;
          max-width: 800px;
          line-height: 1.8;
          margin-top: 1rem;
          text-shadow: 0 0 20px rgba(0,0,0,0.8);
          background: rgba(0,0,0,0.3);
          padding: 1.5rem;
          border-radius: 12px;
        }
        @media (max-width: 768px) {
          .blur-text-unplanned {
            font-size: 4rem;
          }
          .unplanned-description {
            font-size: 1rem;
            max-width: 90%;
            line-height: 1.6;
          }
        }
        
        /* Override body margin for this page */
        body {
          margin: 0 !important;
        }
        
        /* Force DomeGallery dimensions - scoped to unplanned-gallery */
        .unplanned-gallery .sphere-root {
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }
        .unplanned-gallery .sphere-root > main {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
        .unplanned-gallery .w-full {
          width: 100% !important;
        }
        .unplanned-gallery .h-full {
          height: 100% !important;
        }
        .unplanned-gallery .absolute {
          position: absolute !important;
        }
        .unplanned-gallery .inset-0 {
          top: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
        }
        .unplanned-gallery .overflow-hidden {
          overflow: hidden !important;
        }
        .unplanned-gallery .select-none {
          user-select: none !important;
        }
        .unplanned-gallery .grid {
          display: grid !important;
        }
        .unplanned-gallery .place-items-center {
          place-items: center !important;
        }
      `}</style>
    </div>
  );
};

export default Unplanned;
