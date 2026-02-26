import { useState, useEffect } from "react";
import { motion } from "motion/react";

const ConceptShow = (): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const polaroids = [
    { title: "The Spark", image: "public/images/events/concept-show/image-1.webp", tilt: "-4deg" },
    { title: "The Prototype", image: "/images/events/conceptshow/image-2.avif", tilt: "2deg" },
    { title: "The Pitch", image: "/images/events/conceptshow/image-3.avif", tilt: "-2deg" },
    { title: "The Feedback", image: "/images/events/conceptshow/image-4.avif", tilt: "3deg" },
    { title: "The Blueprint", image: "/images/events/conceptshow/image-5.avif", tilt: "-3deg" },
    { title: "The Launch", image: "/images/events/conceptshow/image-6.avif", tilt: "1deg" },
  ];

  useEffect(() => {
    const originalMargin = document.body.style.margin;
    document.body.style.margin = "0";
    return () => {
      document.body.style.margin = originalMargin;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0a0a0a",
        color: "white",
        overflowX: "hidden",
        zIndex: -1,
      }}
    >
      {/* Background Texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: "url('/images/events/unplanned-bg.jpg')",
          backgroundRepeat: "repeat",
          filter: "grayscale(100%)",
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: "4rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ideas Illuminated:{" "}
            <span style={{ color: "#a855f7" }}>
              Snapshots of the Concept Show
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#9ca3af",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            The Concept Show is where imagination takes a tangible form.
            It’s a stage for trailblazers to present their refined prototypes.
          </motion.p>
        </header>

        {/* Polaroid Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "4rem 3rem",
          }}
        >
          {polaroids.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  padding: "1rem",
                  backgroundColor: "white",
                  cursor: "pointer",
                  transform: isHovered
                    ? "scale(1.1) rotate(0deg)"
                    : `rotate(${item.tilt})`,
                  transition: "all 0.5s cubic-bezier(0.175,0.885,0.32,1.275)",
                  zIndex: isHovered ? 50 : 1,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "240px",
                    height: "290px",
                    overflow: "hidden",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                      transition: "all 0.5s",
                    }}
                  />
                </div>

                {/* Caption */}
                <p
                  style={{
                    marginTop: "1rem",
                    color: "black",
                    fontSize: "2rem",
                    fontFamily: "'Reenie Beanie', cursive",
                  }}
                >
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ marginTop: "6rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              fontWeight: 700,
              color: "#c084fc",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Explore the Chaos
          </p>

          <h2
            style={{
              fontSize: "6rem",
              fontWeight: 900,
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "-0.04em",
              transition: "all 0.7s",
            }}
          >
            UNPLANNED
          </h2>
        </motion.footer>
      </main>
    </div>
  );
};

export default ConceptShow;