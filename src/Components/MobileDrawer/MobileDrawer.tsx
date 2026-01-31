import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import EastIcon from "@mui/icons-material/East";
import { NavLink, useNavigate } from "react-router-dom";

const MobileDrawer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState((prev) => !prev);
  };

  /* ---------------- Styled ---------------- */

  const NavbarContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
  });

  const Logo = styled(Box)({
    cursor: "pointer",
  });

  const HamburgerMenu = styled(MenuIcon)({
    color: "white",
    fontSize: "3rem",
  });

  const MenuBox = styled(Box)({
    width: "auto",
    height: "500px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const MenuList = styled(List)({
    width: "80%",
    borderRadius: "20px",
    backgroundColor: "rgba(42,43,42,0.3)",
    padding: "20px",
  });

  const LinkText = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    color: "white",
    fontSize: isMobile ? "0.9rem" : "1.2rem",
    padding: "0 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  });

  const MenuListItemText = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "ITCAvantGardeGothicStd",
  });

  const MenuButton = styled(Button)({
    width: "170px",
    backgroundColor: "#fe7f2e",
    borderRadius: "10px",
    textTransform: "none",
    margin: "20px 10px",
    display: "flex",
    flexDirection: "row",
  });

  const MenuButtonText = styled(Typography)({
    color: "black",
    fontSize: "1em",
    fontWeight: "bold",
    fontFamily: "ITCAvantGardeGothicStd",
    marginTop: "4px",
  });

  const Image = styled("img")({
    height: "auto",
    maxHeight: "40px",
    width: "auto",
    maxWidth: "100%",
    objectFit: "contain",
  });

  const Arrow = styled(EastIcon)({
    color: "black",
    marginLeft: "auto",
  });

  /* ---------------- Scroll Helper ---------------- */

  const scrollOrNavigate = (id: string) => {
    const element = document.getElementById(id);

    if (window.location.pathname === "/") {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    }

    setState(false);
  };

  /* ---------------- Drawer Content ---------------- */

  const list = () => (
    <>
      <MenuBox role="presentation">
        <MenuList>

          {/* HOME */}
          <ListItem disablePadding onClick={() => scrollOrNavigate("home")}>
            <ListItemButton>
              <MenuListItemText>Home</MenuListItemText>
            </ListItemButton>
          </ListItem>

          {/* EVENTS (UNCHANGED STRUCTURE) */}
          <ListItem disablePadding onClick={() => scrollOrNavigate("events")}>
            <ListItemButton>
              <MenuListItemText>Events</MenuListItemText>
            </ListItemButton>
          </ListItem>

          {/* INCEPTIO */}
          <ListItem disablePadding>
            <NavLink
              to="/events/inceptio"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => setState(false)}
            >
              <ListItemButton>
                <MenuListItemText>Inceptio</MenuListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>

          {/* OUR TEAM */}
          <ListItem disablePadding>
            <NavLink
              to="/our-team"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => setState(false)}
            >
              <ListItemButton>
                <MenuListItemText>Our Team</MenuListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>

          {/* ABOUT US */}
          <ListItem disablePadding onClick={() => scrollOrNavigate("about-us")}>
            <ListItemButton>
              <MenuListItemText>About Us</MenuListItemText>
            </ListItemButton>
          </ListItem>

          {/* REGISTER */}
          <NavLink
            to="https://unstop.com/college-fests/inceptio-90-an-innovation-and-entrepreneurship-carnival-narsee-monjee-institute-of-management-studies-nmims-mumbai-435163"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            onClick={() => setState(false)}
          >
            <MenuButton>
              <MenuButtonText>Register Now</MenuButtonText>
              <Arrow />
            </MenuButton>
          </NavLink>

        </MenuList>
      </MenuBox>
    </>
  );

  /* ---------------- JSX ---------------- */

  return (
    <div>
      {isMobile && (
        <NavbarContainer>
          <Logo onClick={() => scrollOrNavigate("home")}>
            <LinkText>
              <Image src="/images/logo/iec-logo.svg" />
            </LinkText>
          </Logo>

          <HamburgerMenu onClick={toggleDrawer} />
        </NavbarContainer>
      )}

      <Drawer anchor="top" open={state} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
