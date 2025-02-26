import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Navbar = (): JSX.Element => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1200);
    const isSmallScreen = window.innerWidth < 600;
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const eventsRef = useRef<HTMLDivElement>(null);
    const [dropdownPosition, setDropdownPosition] = useState<{ left: number }>({ left: 0 });

    // Handle resize events properly
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate position when needed, but avoid dependency on ref.current
    useEffect(() => {
        if (eventsRef.current && dropdownOpen) {
            const rect = eventsRef.current.getBoundingClientRect();
            setDropdownPosition({
                left: rect.width / 2 - 90 // Half of dropdown width (180px) to center it
            });
        }
    }, [dropdownOpen]);

    const NavBox = styled(Box)({
        margin: "20px 0 20px 0",
        backgroundColor: "rgba(42,43,42, 0.8)",
        borderRadius: "20px",
        height: "72px",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    });

    const Logo = styled(Box)({
        width: isMobile ? "100px" : "200px",
        display: "flex",
        left: "100px",
        marginLeft: "10px",
        marginRight: "auto",
    });

    const Image = styled("img")({
        height: "50px",
    });

    const Links = styled(Box)({
        width: "700px",
        display: "flex",
        flexDirection: "row",
        color: "white",
        justifyContent: "end",
        position: "relative",
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

    const Register = styled(IconButton)({
        backgroundColor: "white",
        borderRadius: "15px",
        marginLeft: "20px",
        right: "10px",
        padding: "0 15px",
        width: isMobile ? "175px" : "220px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: "22px",

        "&:hover": {
            backgroundColor: "white",
        },
    });

    const RegisterText = styled(Typography)({
        fontFamily: "ITCAvantGardeGothicStd",
        fontWeight: "bold",
        fontSize: isSmallScreen ? "0.7rem" : isMobile && window.innerWidth < 1024 ? "0.9rem" : "1.2rem",
        whiteSpace: "nowrap", // Prevents text wrapping inside button
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginLeft: isSmallScreen ? "5px" : "24px", // Adjusted margins without theme
    });

    const Arrow = styled(EastIcon)({
        marginLeft: "auto",
    });

    const Dropdown = styled(Box)({
        position: "absolute",
        top: "40px",
        backgroundColor: "rgba(42,43,42, 0.95)",
        borderRadius: "10px",
        padding: "10px",
        zIndex: 2,
        minWidth: "180px",
        opacity: dropdownOpen ? 1 : 0,
        visibility: dropdownOpen ? "visible" : "hidden",
        transition: "opacity 0.2s ease, visibility 0.2s ease",
    });

    const DropdownItem = styled(Typography)({
        fontFamily: "ITCAvantGardeGothicStd",
        color: "white",
        fontSize: isMobile ? "0.8rem" : "1.1rem",
        padding: "10px 15px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "5px",
        },
    });

    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        const href = window.location.href.split("/");
        const length = window.location.href.split("/").length;

        if (href[length - 1] === "") {
            element?.scrollIntoView({
                behavior: "smooth",
            });
        } else {
            navigate("/");
            // Add a small delay to allow navigation to complete before scrolling
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 100);
        }
    };

    const handleClickAway = (): void => {
        setDropdownOpen(false);
    };

    const toggleDropdown = (e: React.MouseEvent): void => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <NavBox id="navbar">
            <Logo>
                <LinkText onClick={() => scrollToSection("home")}>
                    <Image src="/images/logo/iec-logo.svg" alt="Logo" />
                </LinkText>
            </Logo>

            <Links>
                <LinkText onClick={() => scrollToSection("home")}>
                    Home
                </LinkText>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box ref={eventsRef} sx={{ position: "relative" }}>
                        <LinkText
                            onClick={toggleDropdown}
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            Events
                            <ExpandMoreIcon
                                style={{
                                    marginLeft: "5px",
                                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease'
                                }}
                            />
                        </LinkText>
                        <Dropdown style={{ left: `${dropdownPosition.left}px` }}>
                            <DropdownItem onClick={() => {
                                scrollToSection("events");
                                setDropdownOpen(false);
                            }}>
                                Enigma
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    to="/workshops"
                                    style={{ textDecoration: "none", color: "white", display: "block" }}
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Unplanned
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    to="/competitions"
                                    style={{ textDecoration: "none", color: "white", display: "block" }}
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Inceptio
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    to="/speaker-sessions"
                                    style={{ textDecoration: "none", color: "white", display: "block" }}
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Concept Show
                                </NavLink>
                            </DropdownItem>
                        </Dropdown>
                    </Box>
                </ClickAwayListener>
                <LinkText>
                    <NavLink
                        to="/inceptio"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Inceptio
                    </NavLink>
                </LinkText>
                <LinkText>
                    <NavLink
                        to="/our-team"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        Our Team
                    </NavLink>
                </LinkText>
                <LinkText onClick={() => scrollToSection("about-us")}>
                    About Us
                </LinkText>
            </Links>
            <NavLink
                to="https://unstop.com/college-fests/inceptio-80-an-innovation-and-entrepreneurship-carnival-narsee-monjee-institute-of-management-studies-nmims-mumbai-331073"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Register>
                    <RegisterText>Register Now</RegisterText>
                    <Arrow />
                </Register>
            </NavLink>
        </NavBox>
    );
};

export default Navbar;