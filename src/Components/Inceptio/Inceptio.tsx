import styled from "@emotion/styled";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import BackgroundBox from "../BackgroundBox/BackgroundBox";
import { InceptioList } from "./InceptioList";
import { NavLink } from "react-router-dom";

const Inceptio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  window.scrollTo(0, 0);

  const OuterBox = styled(Box)({
    width: "100%",
    margin: isMobile && window.innerWidth < 1024 ? "0 0" : "50px 0",
    paddingTop: isMobile && window.innerWidth < 1024 ? "20px" : "",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  });

  const Heading = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "2.8rem" : "8rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    zIndex: "1",
  });
  const Subheading = styled(Typography)({
    fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
    fontWeight: "bold",
    fontFamily: "ITCAvantGardeGothicStd",
    textAlign: "center",
    paddingLeft: isMobile && window.innerWidth < 1024 ? "0" : "50px",
    marginBottom: "20px",
    zIndex: 1,
  });
  const MainCard = styled(Box)({
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    width: isDesktop && window.innerWidth < 1200 ? "95%" : "80%",
    height: "max-content",
    padding: isMobile && window.innerWidth < 1024 ? "20px" : "30px",
    backgroundColor: "rgba(42,43,42,.3)",
    zIndex: "1",
  });

  // const ImageCard = styled(Box)({
  //   width: "100%",
  //   height: isMobile ? "200px" : "600px",
  //   borderRadius: "15px",
  //   marginBottom: "20px",
  //   zIndex: "1",
  // });

  const Image = styled("img")({
    width: "100%",
    height: "100%",
    maxWidth: isMobile ? "100%" : "100%",
    maxHeight: isMobile ? "200px" : "600px",
    objectFit: "cover",
    borderRadius: "20px",
    padding: "0",
    margin: "0",
  });

  const EventDescriptionText = styled(Typography)({
    color: "rgba(255,255,255, 0.8)",
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "1rem",
    marginBottom: isMobile && window.innerWidth < 1024 ? "20px" : "50px",
    textAlign: isMobile && window.innerWidth < 1024 ? "center" : "left",
    letterSpacing: isMobile && window.innerWidth < 1024 ? "0.05rem" : "0.1rem",
    zIndex: "1",
  });

  const CardBox = styled(Box)({
    width: "100%",
    height: "max-content",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "50px 0" : "50px 30px",
    marginBottom: "30px",
    zIndex: "1",
  });

  const DataCard = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile && window.innerWidth < 1024 ? "center" : "",
    textAlign: isMobile && window.innerWidth < 1024 ? "center" : "start",
    borderRadius: "15px",
    width: "95%",
    height: "100%",
    backgroundColor: "rgba(42,43,42,.3)",
    padding: isMobile && window.innerWidth < 1024 ? "15px" : "20px 15px 0",
    marginLeft: isMobile && window.innerWidth < 1024 ? "-8px" : "",
    zIndex: "1",
  });

  const DataCardImage = styled(Box)({
    borderRadius: "10px",
    width: "100%",
    height: isMobile && window.innerWidth < 1024 ? "150px" : "300px",
    zIndex: "1",
  });

  const DataCardHeading = styled(Box)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "1.2rem" : "1.8rem",
    fontWeight: "600",
    margin: "20px 0",
    zIndex: "1",
  });

  const DataCardDescription = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.4rem" : "0.875rem",
    zIndex: "1",
  });

  return (
    <>
      <BackgroundBox color="blue" position="right" index={0} />

      <BackgroundBox color="yellow" position="left" index={1} />

      <BackgroundBox color="yellow" position="right" index={2} />

      <BackgroundBox color="blue" position="left" index={3} />

      <BackgroundBox color="yellow" position="right" index={3.5} />

      <OuterBox>

        <MainCard>
          {/*<ImageCard>*/}
          {/*  <Image*/}
          {/*    src="images/inceptio/inceptio-banner.png"*/}
          {/*    srcSet="images/inceptio/inceptio-banner-large.png 2x, images/inceptio/inceptio-banner.png 1x"*/}
          {/*    alt="Inceptio Banner"*/}
          {/*  />*/}
          {/*</ImageCard>*/}

          <EventDescriptionText>
            <Heading>Inceptio</Heading>
            <Subheading>Glimpses of Innovation and Entrepreneurship: The Inceptio Experience</Subheading>
            The NMIMS MPSTME's Innovation and Entrepreneurship Carnival is an
            exceptional annual three-day event fostering entrepreneurship,
            business, and innovation. It gathers young individuals citywide to
            collaborate on projects, fostering discovery and teamwork. The
            festival offers diverse experiences including workshops led by
            industry professionals to learn idea origination, validation, and
            skill application, with opportunities to win cash prizes,
            certificates, internships, and access to Angel Investors. Aimed at
            innovators and entrepreneurial spirits, it's a chance to realize
            potential and engage in a lifetime experience!
          </EventDescriptionText>
          <CardBox>
            {InceptioList.map((data, index) => (
              <NavLink
                to={data.link}
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <DataCard key={index}>
                  <DataCardImage>
                    <Image src={data.image} style={{ borderRadius: "10px" }} />
                  </DataCardImage>
                  <DataCardHeading>{data.name}</DataCardHeading>
                  <DataCardDescription>{data.description}</DataCardDescription>
                </DataCard>
              </NavLink>
            ))}
          </CardBox>
        </MainCard>
      </OuterBox>
    </>
  );
};

export default Inceptio;
