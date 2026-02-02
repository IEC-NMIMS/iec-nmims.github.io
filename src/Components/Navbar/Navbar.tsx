import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { EventList } from "../Events/EventList.ts";

/* ---------------- Styled ---------------- */

const NavBox = styled(Box)({
  position: "sticky",
  top: 20,
  margin: "20px 0",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: "20px",
  height: "72px",
  display: "flex",
  padding: "10px",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

const Logo = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  marginRight: "auto",
});

const Image = styled("img")({
  height: "50px",
});

const Links = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
  color: "white",
  position: "relative",
  flex: 1,
  minWidth: 0,
});

const LinkText = styled(Typography)({
  fontFamily: "ITCAvantGardeGothicStd",
  color: "white",
  padding: "0 20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

const Dropdown = styled(Box)({
  position: "absolute",
  top: "40px",
  backgroundColor: "rgba(0,0,0,0.95)",
  borderRadius: "10px",
  padding: "10px",
  zIndex: 2,
  minWidth: "180px",
  transition: "0.2s ease",
});

const DropdownItem = styled(Typography)({
  fontFamily: "ITCAvantGardeGothicStd",
  color: "white",
  padding: "10px 15px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "5px",
  },
});

/* ---------------- Component ---------------- */

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < 1200
  );
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const eventsRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number }>({
    left: 0,
  });

  /* ---------------- Resize ---------------- */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (eventsRef.current && dropdownOpen) {
      const rect = eventsRef.current.getBoundingClientRect();
      setDropdownPosition({
        left: rect.width / 2 - 90,
      });
    }
  }, [dropdownOpen]);

  /* ---------------- Logic ---------------- */

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    const href = window.location.href.split("/");
    const length = href.length;

    if (href[length - 1] === "") {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const toggleDropdown = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (): void => {
    setDropdownOpen(false);
  };

  /* ---------------- Event Routing ---------------- */

  const navigateToEventDetails = (title: string): void => {
    const eventItem = EventList.find((e) => e.name === title);
    if (!eventItem) return;

    if ((eventItem as any).slug) {
      navigate(`/events/${(eventItem as any).slug}`);
    } else {
      navigate("/events", {
        state: {
          title: eventItem.modalData.title,
          data: eventItem.modalData.data,
          images: eventItem.modalData.images,
        },
        replace: true,
      });
    }

    closeDropdown();
  };

  /* ---------------- JSX ---------------- */

  return (
    <NavBox id="navbar">
      {/* Logo */}
      <Logo sx={{ width: isMobile ? "100px" : "200px" }}>
        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => scrollToSection("home")}
        >
          <Image src="/images/logo/iec-logo.svg" />
        </LinkText>
      </Logo>

      {/* Links */}
      <Links>
        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </LinkText>

        {/* EVENTS DROPDOWN */}
        <ClickAwayListener onClickAway={closeDropdown}>
          <Box ref={eventsRef} sx={{ position: "relative" }}>
            <LinkText
              sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
              onClick={toggleDropdown}
            >
              Events
              <ExpandMoreIcon
                style={{
                  marginLeft: "5px",
                  transform: dropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "0.2s",
                }}
              />
            </LinkText>

            <Dropdown
              style={{
                left: `${dropdownPosition.left}px`,
                opacity: dropdownOpen ? 1 : 0,
                visibility: dropdownOpen ? "visible" : "hidden",
                transform: dropdownOpen
                  ? "translateY(0px)"
                  : "translateY(5px)",
              }}
            >
              {EventList.map((event, index) => (
                <DropdownItem
                  key={index}
                  sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
                  onClick={() => navigateToEventDetails(event.name)}
                >
                  {event.name}
                </DropdownItem>
              ))}
            </Dropdown>
          </Box>
        </ClickAwayListener>

        {/* DIRECT INCEPTIO */}
        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => navigate("/events/inceptio")}
        >
          Inceptio
        </LinkText>

        <LinkText sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}>
          <NavLink
            to="/our-team"
            style={{ textDecoration: "none", color: "white" }}
          >
            Our Team
          </NavLink>
        </LinkText>

        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => scrollToSection("sponsors")}
        >
          Sponsors
        </LinkText>

        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => scrollToSection("about-us")}
        >
          About Us
        </LinkText>

        {/* CONTACT US */}
        <LinkText
          sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}
          onClick={() => scrollToSection("contact-us")}
        >
          Contact Us
        </LinkText>

        {/* VERIFY CERTIFICATE */}
        <LinkText sx={{ fontSize: isMobile ? "0.8rem" : "1.1rem" }}>
          <a
            href="https://certificates.iecnmims.com/verify"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Verify Certificate
          </a>
        </LinkText>
      </Links>
    </NavBox>
  );
};

export default Navbar;
