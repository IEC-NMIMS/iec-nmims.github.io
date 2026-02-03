import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Button from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { Card, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen = window.innerWidth < 600;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const OuterBox = styled(Box)({
    width: isMobile ? "100%" : "auto",
    marginLeft: isMobile ? "0" : "20px",
    marginRight: "0",
    marginBottom: isMobile ? "20px" : "150px",
    zIndex: 1,
    backgroundColor: "transparent",
  });

  const InnerBox = styled(Box)({
    backgroundColor: "transparent",
    marginBottom: isMobile ? "50px" : "0",
    display: "flex",
    alignItems: "center",
  });

  const TopRight = styled(Card)({
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "none",
    color: "rgba(255, 255, 255, 0.75)",
    width: "max-content",
    maxWidth: "100%",
    padding: "0 5px",
    marginLeft: "0",
    marginTop: isMobile ? "0" : "100px",
    marginBottom: isMobile ? "0px" : "100px",
  });

  const VideoCard = styled(Box)({
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    height: "max-content",
    position: "relative",
    zIndex: 1,
  });

  const IECTitle = styled(Typography)({
    color: "white",
    fontSize: isSmallScreen
      ? "1.5rem"
      : isMobile && window.innerWidth < 1024
      ? "2rem"
      : "3.6rem",
    fontFamily: "ITCAvantGardeGothicStd",
    fontWeight: "bold",
    marginBottom: "10px",
  });

  const InfoText = styled(Typography)({
    marginBottom: "30px",
    fontSize: isSmallScreen
      ? "0.75rem"
      : isMobile && window.innerWidth < 1024
      ? "0.8rem"
      : "1.25rem",
    fontFamily: "ITCAvantGardeGothicStd",
  });

  const KnowMore = styled(Button)({
    backgroundColor: "#fe7f2e",
    borderRadius: isMobile ? "12px" : "15px",
    right: "10px",
    height: isSmallScreen ? "36px" : isMobile ? "40px" : "50px",
    width: "auto", // Changed to auto for better responsiveness
    minWidth: isSmallScreen ? "160px" : isMobile ? "180px" : "250px",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between", // Changed to space-between for better layout
    alignItems: "center",
    padding: isSmallScreen ? "0 10px" : "0 15px", // Added consistent padding
    color: "black",
    fontWeight: "bold",
    marginLeft: "8px",
    gap: "8px",

    "&:hover": {
      backgroundColor: "#fe7f2e",
      transform: "scale(1.03)", // Added a subtle scale effect on hover
      transition: "transform 0.2s ease-in-out",
    },
  });

  const ButtonText = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isSmallScreen
      ? "0.9rem"
      : isMobile && window.innerWidth < 1024
      ? "1.0rem"
      : "1.2rem",
    fontWeight: "bold",
    whiteSpace: "nowrap", // Prevents text wrapping inside button
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginLeft: isSmallScreen ? "5px" : "24px", // Adjusted margins without theme
  });

  const Arrow = styled(EastIcon)({
    marginLeft: "10px", // Consistent spacing
    fontSize: isSmallScreen ? "1rem" : isMobile ? "1.2rem" : "1.5rem", // Responsive icon size
    marginRight: isSmallScreen ? "5px" : "20px",
  });

  const Whitebox = styled(Card)({
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginLeft: isMobile ? "0" : "245px",
    marginBottom: isMobile ? "0" : "50px",
    marginTop: isMobile ? "0" : "100px",
    padding: isSmallScreen ? "8px 0" : "10px 0",
    height: "max-content",
    borderRadius: "20px",
    width: isDesktop ? "60%" : "100%",
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row", // Stack vertically on very small screens
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "white",
    gap: isSmallScreen ? "16px" : 0, // Add gap for small screens
  });

  const WhiteBoxItem = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: isSmallScreen ? "10px 0" : "0",
  });

  const WhiteBoxTitle = styled(Typography)({
    fontSize: isSmallScreen ? "1.5rem" : isMobile ? "2rem" : "3rem",
    fontWeight: "bold",
    fontFamily: "ITCAvantGardeGothicStd",
  });

  const WhiteBoxBody = styled(Typography)({
    fontSize: isSmallScreen
      ? "0.8rem"
      : isMobile && window.innerWidth < 1024
      ? "0.9rem"
      : "1.8rem",
    fontWeight: "600",
    fontFamily: "ITCAvantGardeGothicStd",
    textAlign: "center",
  });

  return (
    <OuterBox id="home">
      <InnerBox>
        {window.innerWidth > 1200 && (
          <VideoCard>
            <img
              src="images/home/home-animation.gif"
              alt="Home Animation"
              style={{
                backgroundColor: "transparent",
                transform: "scale(1.5)",
                margin: "100px",
              }}
            />
          </VideoCard>
        )}
        <TopRight>
          <IECTitle>Innovation and Entrepreneurship Cell</IECTitle>
          <InfoText>
            IEC MPSTME aims to provide a holistic development of students, with
            a cornerstone built on the pillars of ingenuity, intellect, and
            innovative thinking.
          </InfoText>
          <InfoText
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "fit-content",
            }}
          >
            {/* <span style={{ width: "100%" }}>
              <strong>Powered by</strong>
            </span>
            <img
              src="images/home/unstoplogo.png"
              alt="Unstop Logo"
              style={{
                width: "100%", // Makes the logo match the width of the text
                maxWidth: isSmallScreen ? "75px" : isMobile ? "100px" : "125px", // Prevents it from growing too large
                height: "auto",
                marginTop: "5px",
              }}
            /> */}
          </InfoText>
          <NavLink
            to="https://unstop.com/college-fests/inceptio-90-an-innovation-and-entrepreneurship-carnival-narsee-monjee-institute-of-management-studies-nmims-mumbai-435163"
            style={{
              textDecoration: "none",
              color: "white",
              display: "inline-block",
              maxWidth: "100%",
            }} // Made NavLink responsive
            target="_blank"
          >
            <KnowMore>
              <ButtonText>
                <strong>Register now for Inceptio</strong>
              </ButtonText>
              <Arrow />
            </KnowMore>
          </NavLink>
        </TopRight>
      </InnerBox>

      <InnerBox
        sx={{
          justifyContent: isDesktop && window.innerWidth < 1200 ? "center" : "",
          flexDirection: isSmallScreen ? "column" : "row", // Stack on small screens
        }}
      >
        <Whitebox>
          <WhiteBoxItem>
            <WhiteBoxTitle>
              <CountUp start={0} end={110} duration={3} />+
            </WhiteBoxTitle>
            <WhiteBoxBody>Team Members</WhiteBoxBody>
          </WhiteBoxItem>

          <WhiteBoxItem>
            <WhiteBoxTitle>
              <CountUp start={0} end={100} duration={3} />+
            </WhiteBoxTitle>
            <WhiteBoxBody>Events</WhiteBoxBody>
          </WhiteBoxItem>

          <WhiteBoxItem>
            <WhiteBoxTitle>
              <CountUp start={0} end={200} duration={3} />+
            </WhiteBoxTitle>
            <WhiteBoxBody>Speakers</WhiteBoxBody>
          </WhiteBoxItem>

          <WhiteBoxItem>
            <WhiteBoxTitle>
              <CountUp start={0} end={10000} duration={3} />+
            </WhiteBoxTitle>
            <WhiteBoxBody>Outreach</WhiteBoxBody>
          </WhiteBoxItem>
        </Whitebox>
      </InnerBox>
    </OuterBox>
  );
};

export default Home;
