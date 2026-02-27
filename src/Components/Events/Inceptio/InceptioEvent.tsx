import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import BlurText from "../../BlurText";

interface ChallengeData {
  title: string;
  description: string;
  image: string;
}

const challenges: ChallengeData[] = [
  {
    title: "Socio Vision Challenge",
    description:
      "Participants build a startup from scratch by solving a real-world social problem in a given industry. With limited capital in hand, they must smartly allocate funds, design a feasible solution, and stand out through innovation and creativity. Strategy, execution, and originality decide the win.",
    image: "/images/inceptio/Socio Vision.png",
  },
  {
    title: "Marketing Challenge",
    description:
      "Participants craft powerful arguments to justify a company's one-liner using in-depth research and solid insights. Backed by facts and strategy, they must present their case with confidence and clarity. Research depth and presentation impact define success.",
    image: "/images/inceptio/Marketing.png",
  },
  {
    title: "Consulting Challenge",
    description:
      "Contestants tackle real-world consulting problems spanning multiple business domains. Their solutions are evaluated on feasibility, innovation, and team coordination. Strong collaboration and cross-functional thinking are key.",
    image: "/images/inceptio/Consulting.png",
  },
  {
    title: "Entrepreneurship Challenge",
    description:
      "In this challenge, teams lead a company through crisis, developing smart strategies to recover losses and bounce back stronger. Creativity, analytical thinking, and clear pitching are key. The most convincing revival plans win.",
    image: "/images/inceptio/Entrepreneurship.png",
  },
  {
    title: "Virtual Crowd Funding Pitch",
    description:
      "This challenge simulates real-world crowdfunding, where entrepreneurs pitch for virtual investments from a panel of judges. Strong ideas, strategic thinking, and confident handling of Q&A drive investment decisions. The most convincing startup takes the lead.",
    image: "/images/inceptio/Virtual Crowd Funding.png",
  },
];

const InceptioEvent = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Remove body margin for full-screen effect
    const originalMargin = document.body.style.margin;
    document.body.style.margin = "0";

    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 1500);

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
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: -1,
      }}
    >
      {/* Hero Section */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 16px",
          background:
            "radial-gradient(ellipse at center, rgba(0, 185, 203, 0.15) 0%, #000000 70%)",
        }}
      >
        {/* Animated Background Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            background:
              "radial-gradient(circle at 50% 30%, rgba(0, 185, 203, 0.3) 0%, transparent 50%)",
          }}
        />

        {/* Title */}
        <motion.div
          animate={{
            y: showDescription ? -20 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          style={{ zIndex: 10 }}
        >
          <BlurText
            text="Inceptio"
            delay={80}
            className="inceptio-title"
            animateBy="letters"
            direction="bottom"
          />
        </motion.div>

        {/* Subtitle / Description */}
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
            maxWidth: "900px",
            textAlign: "center",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            color: "#d1d5db",
            lineHeight: 1.8,
            marginTop: "32px",
            padding: "0 16px",
            zIndex: 10,
            fontFamily: "ITCAvantGardeGothicStd",
          }}
        >
          Inceptio is IEC's flagship entrepreneurial festival - a high-energy
          convergence of innovation, strategy, and execution. Featuring multiple
          competitive tracks, expert mentorship, and real-world problem
          statements, Inceptio offers participants a platform to ideate,
          validate, and pitch solutions that matter.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showDescription ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ position: "absolute", bottom: "40px", zIndex: 10 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#9ca3af",
                fontFamily: "ITCAvantGardeGothicStd",
              }}
            >
              Scroll to explore
            </span>
            <svg
              style={{ width: "24px", height: "24px", color: "#22d3ee" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Challenges Section */}
      <div
        style={{
          position: "relative",
          padding: "80px 16px",
          backgroundColor: "#000000",
        }}
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "64px",
            fontFamily: "ITCAvantGardeGothicStd",
            background: "linear-gradient(to right, #22d3ee, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Challenges
        </motion.h2>

        {/* Alternating Cards */}
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              challenge={challenge}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          padding: "80px 16px",
          textAlign: "center",
          background:
            "linear-gradient(to top, rgba(0, 185, 203, 0.1), #000000)",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(20px, 4vw, 36px)",
            fontWeight: "bold",
            marginBottom: "16px",
            fontFamily: "ITCAvantGardeGothicStd",
            color: "#ffffff",
          }}
        >
          Ready to{" "}
          <span style={{ color: "#22d3ee" }}>
            Ignite Your Entrepreneurial Journey
          </span>
          ?
        </h3>
        <p
          style={{
            color: "#9ca3af",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "ITCAvantGardeGothicStd",
          }}
        >
          Join Inceptio and transform your ideas into impactful solutions.
        </p>
      </motion.div>

      <style>{`
        .inceptio-title {
          font-size: clamp(48px, 12vw, 144px);
          font-weight: bold;
          letter-spacing: -0.02em;
          color: #ffffff;
          font-family: ITCAvantGardeGothicStd;
        }
      `}</style>
    </div>
  );
};

interface ChallengeCardProps {
  challenge: ChallengeData;
  index: number;
  isReversed: boolean;
}

const ChallengeCard = ({
  challenge,
  index,
  isReversed,
}: ChallengeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{
        display: "flex",
        flexDirection: isReversed ? "row-reverse" : "row",
        alignItems: "center",
        gap: "48px",
        marginBottom: "120px",
        flexWrap: "wrap",
      }}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: "1 1 400px", minWidth: "300px" }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid #374151",
            }}
          >
            <img
              src={challenge.image}
              alt={challenge.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "300px",
                maxHeight: "400px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ flex: "1 1 400px", minWidth: "300px" }}
      >
        {/* Number Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(40px, 6vw, 60px)",
              fontWeight: "bold",
              background: "linear-gradient(to bottom right, #22d3ee, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "ITCAvantGardeGothicStd",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            style={{
              height: "1px",
              flex: 1,
              background:
                "linear-gradient(to right, rgba(34, 211, 238, 0.5), transparent)",
            }}
          />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: "bold",
            marginBottom: "16px",
            fontFamily: "ITCAvantGardeGothicStd",
            color: "#ffffff",
          }}
        >
          {challenge.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#9ca3af",
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: 1.8,
            fontFamily: "ITCAvantGardeGothicStd",
          }}
        >
          {challenge.description}
        </p>

        {/* Decorative Line */}
        <div style={{ paddingTop: "24px" }}>
          <div
            style={{
              height: "4px",
              width: "80px",
              background: "linear-gradient(to right, #22d3ee, #3b82f6)",
              borderRadius: "4px",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InceptioEvent;
