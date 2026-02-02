import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

/* =======================
   Styled Components
======================= */

/* Footer container */
const FooterBox = styled(Box)({
  backgroundColor: "rgba(42, 43, 42, 0.3)",
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",
  padding: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

/* Copyright text */
const FooterCopyright = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontFamily: "ITCAvantGardeGothicStd",
  textAlign: "center",
  marginBottom: "12px",

  [theme.breakpoints.down("lg")]: {
    fontSize: "0.8rem",
  },
}));

/* Credits text */
const FooterCredits = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "0.8rem",
  fontFamily: "ITCAvantGardeGothicStd",
  textAlign: "center",
  marginTop: "12px",

  [theme.breakpoints.down("lg")]: {
    width: "90%",
    fontSize: "0.6rem",
  },
}));

/* Clickable credits link */
const CreditsLink = styled(Link)({
  color: "rgba(255, 255, 255, 0.6)",
  textDecoration: "none",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "#fe7f2e",
    textDecoration: "underline",
  },
});

/* Social icons container */
const SocialContainer = styled(Box)({
  display: "flex",
  gap: "22px",
  marginBottom: "10px",
});

/* Individual icon link */
const SocialIcon = styled("a")({
  color: "white",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    color: "#fe7f2e",
    transform: "scale(1.15)",
  },
});

/* =======================
   Component
======================= */

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <FooterBox>
      <FooterCopyright>
        &copy; Copyright <b>IEC MPSTME</b>. All Rights Reserved
      </FooterCopyright>

      {/* Social Media Links */}
      <SocialContainer>
        <SocialIcon
          href="https://www.instagram.com/iec.mpstme/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize={isMobile ? "medium" : "large"} />
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/company/iec-mpstme/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize={isMobile ? "medium" : "large"} />
        </SocialIcon>
      </SocialContainer>

      {/* Clickable Credits */}
      <FooterCredits>
        <CreditsLink to="/credits">
          Website Built and Maintained by the <b>Tech Team</b> of IEC
        </CreditsLink>
      </FooterCredits>
    </FooterBox>
  );
};

export default Footer;
