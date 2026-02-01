import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Footer container
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

  // Copyright text
  const FooterCopyright = styled(Typography)({
    fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
    fontFamily: "ITCAvantGardeGothicStd",
    textAlign: "center",
    marginBottom: "12px",
  });

  // Credits text
  const FooterCredits = styled(Typography)({
    width: isMobile && window.innerWidth < 1024 ? "90%" : "100%",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "0.8rem",
    fontFamily: "ITCAvantGardeGothicStd",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
    marginTop: "12px",
  });

  // Social icons container
  const SocialContainer = styled(Box)({
    display: "flex",
    gap: "22px",
    marginBottom: "10px",
  });

  // Individual icon link
  const SocialIcon = styled("a")({
    color: "white",
    transition: "0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      color: "#fe7f2e",
      transform: "scale(1.15)",
    },
  });

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
        >
          <InstagramIcon fontSize={isMobile ? "medium" : "large"} />
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/company/iec-mpstme/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize={isMobile ? "medium" : "large"} />
        </SocialIcon>
      </SocialContainer>

      <FooterCredits>
        Website Built and Maintained by the <b>Tech Team</b> of IEC
      </FooterCredits>
    </FooterBox>
  );
};

export default Footer;
