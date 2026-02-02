import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { useTheme, useMediaQuery } from "@mui/material";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const Credits = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* ---------------- Styled ---------------- */

  const PageContainer = styled(Box)({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "120px",
    color: "white",
    position: "relative",
    zIndex: 1,
  });

  const CreditsCard = styled(Box)({
    width: isMobile ? "90%" : "60%",
    backgroundColor: "rgba(42,43,42,0.3)",
    borderRadius: "20px",
    padding: isMobile ? "25px" : "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
  });

  const Title = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile ? "2rem" : "3rem",
    fontWeight: "bold",
    marginBottom: "30px",
  });

  const Name = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile ? "0.95rem" : "1.1rem",
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: "10px",
  });

  /* Invisible Link Wrapper */
  const HiddenLink = styled("a")({
    color: "inherit",
    textDecoration: "none",
    cursor: "default",
  });

  /* ---------------- Names ---------------- */

  const names = [
    "Yash Korla",
    "Karan Bedi",
    "Sushanth Tambe",
    "Aarya Pandya",
    "Aryan Chauhan",
    "Parth Mehta",
    "Parth Jhaveri",
    "Diya Joshi",
    "Abhishekh Sheth",
    "Jenish Nanda",
    "Nikhil Joshi",
    "Pratyush Landekar",
    "Vedant Maheshwari",
  ];

  /* ---------------- JSX ---------------- */

  return (
    <PageContainer>

      {/* Global Background */}
      <BackgroundBox />

      <CreditsCard>

        <Title>Credits</Title>

        {names.map((name, index) =>
          name === "Vedant Maheshwari" ? (
            <HiddenLink
              key={index}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Name>{name}</Name>
            </HiddenLink>
          ) : (
            <Name key={index}>{name}</Name>
          )
        )}

      </CreditsCard>

    </PageContainer>
  );
};

export default Credits;
