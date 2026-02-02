import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const form = useRef<HTMLFormElement>(null);

  /* ---------------- CONTAINERS ---------------- */

  const ContactContainer = styled(Box)({
    color: "white",
    marginLeft: isMobile && window.innerWidth < 1024 ? "0" : "50px",
    marginBottom: "100px",
    display: isMobile && window.innerWidth < 1024 ? "flex" : "",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
  });

  const Header = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "1.8rem" : "3rem",
    fontWeight: "bold",
    marginBottom: "50px",
  });

  const SubContainer = styled(Box)({
    backgroundColor: "rgba(42, 43, 42, 0.3)",
    borderRadius: "20px",
    color: "white",
    margin: isMobile && window.innerWidth < 1024 ? "0" : "1.2%",
    marginLeft: isMobile && window.innerWidth < 1024 ? "0" : ".2%",
    padding: isMobile && window.innerWidth < 1024 ? "20px" : "2%",
    display: isMobile && window.innerWidth < 1024 ? "" : "flex",
  });

  const ContactForm = styled("form")({
    width: isMobile && window.innerWidth < 1024 ? "100%" : "50%",
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "2%",
    display: "flex",
    flexDirection: "column",
  });

  const ContactInfo = styled(Box)({
    display: isMobile && window.innerWidth < 1024 ? "" : "inline-grid",
  });

  const NameEmail = styled(Box)({
    display: isMobile && window.innerWidth < 1024 ? "" : "flex",
  });

  /* ---------------- INPUT BASE STYLE ---------------- */

  const baseInputStyle = {
    fontFamily: "ITCAvantGardeGothicStd",
    color: "white",
    border: "2px solid rgba(255,255,255,0.5)",
    borderRadius: "10px",
    height: "40px",
    padding: "5px 10px",
    transition: "0.3s",
    "& input::placeholder": {
      color: "rgba(255,255,255,0.6)",
    },
    "& textarea::placeholder": {
      color: "rgba(255,255,255,0.6)",
    },
    "&:focus-within": {
      border: "2px solid #fe7f2e",
      boxShadow: "0 0 0 2px rgba(254,127,46,0.25)",
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px transparent inset",
      WebkitTextFillColor: "white",
      transition: "background-color 9999s ease-in-out 0s",
    },
  };

  const TextInput = styled(InputBase)({
    ...baseInputStyle,
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    marginBottom: isMobile && window.innerWidth < 1024 ? "25px" : "0",
    width: isMobile && window.innerWidth < 1024 ? "100%" : "325px",
  });

  const SubjectInput = styled(InputBase)({
    ...baseInputStyle,
    marginTop: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    width: "100%",
  });

  const MessageInput = styled(InputBase)({
    ...baseInputStyle,
    marginTop: "25px",
    marginRight: isMobile ? "0" : "25px",
    width: "100%",
    height: "10em",
  });

  /* ---------------- BUTTON ---------------- */

  const ButtonInput = styled("button")({
    fontFamily: "ITCAvantGardeGothicStd",
    fontWeight: "bold",
    color: "#000",
    border: "none",
    backgroundColor: "#fe7f2e",
    borderRadius: "15px",
    width: isMobile && window.innerWidth < 1024 ? "100%" : "40%",
    height: "50px",
    margin: isMobile && window.innerWidth < 1024 ? "20px 0" : "0",
    alignSelf: "center",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#e56f28",
      transform: "translateY(-1px)",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  });

  /* ---------------- INFO AREA ---------------- */

  const CallAdd = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "2.5em 2.5em",
    marginBottom: isMobile && window.innerWidth < 1024 ? "20px" : "0",
  });

  const Emhour = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "2.5em 2.5em",
  });

  const InfoHead = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "1.2rem" : "1.5rem",
    fontWeight: "bold",
  });

  const StyledLink = styled("a")({
    fontFamily: "ITCAvantGardeGothicStd",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  });

  const Info = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "0.9rem",
  });

  /* ---------------- EMAIL LOGIC ---------------- */

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    // Validate form fields before sending
    const formElement = form.current;
    if (!formElement) {
      setStatus("error");
      setMessage("Form reference error. Please refresh the page.");
      return;
    }

    const name = (formElement.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (formElement.elements.namedItem("email") as HTMLInputElement)?.value;
    const subject = (formElement.elements.namedItem("subject") as HTMLInputElement)?.value;
    const messageText = (formElement.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    // Basic validation
    if (!name || !email || !subject || !messageText) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("service_x4aect6", "template_rdye5ac", formElement, {
        publicKey: "wCf5Yw9Qs6eu9ctzO",
      })
      .then(() => {
        form.current?.reset();
        setStatus("success");
        setMessage("Message sent — we'll get back to you shortly.");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setMessage("Failed to send message. Please try again later.");
      });
  };

  /* ---------------- JSX ---------------- */

  return (
    <ContactContainer id="contact-us">
      <Header>Contact Us</Header>

      <SubContainer>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <NameEmail>
            <TextInput placeholder="Name" name="name" />
            <TextInput
              placeholder="Email"
              name="email"
              type="email"
              style={{ marginRight: "0" }}
            />
          </NameEmail>

          <SubjectInput placeholder="Subject" name="subject" />

          <MessageInput placeholder="Message" name="message" multiline />

          <br />

          <ButtonInput type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </ButtonInput>

          {status !== "idle" && (
            <Typography
              sx={{
                mt: 2,
                textAlign: "center",
                color: status === "success" ? "#4caf50" : "#f44336",
                animation: "fadeIn 0.4s ease",
              }}
            >
              {message}
            </Typography>
          )}
        </ContactForm>

        <ContactInfo>
          <CallAdd>
            <InfoHead>Call Us</InfoHead>
            <InfoHead>Address</InfoHead>

            <Info>
              <StyledLink href="tel:+919309521094">
                +91 94368 94400
              </StyledLink>
            </Info>

            <Info>
              IEC-MPSTME, NMIMS, V. L. Mehta Road, Vile Parle (West), Mumbai,
              Maharashtra 400056
            </Info>
          </CallAdd>

          <Emhour>
            <InfoHead>Email Us</InfoHead>
            <InfoHead>Working Hours</InfoHead>

            <Info>
              <StyledLink href="mailto:contact@iecnmims.com">
                contact@iecnmims.com
              </StyledLink>
            </Info>

            <Info>
              Monday - Saturday
              <br />
              10:00AM - 05:00PM
            </Info>
          </Emhour>
        </ContactInfo>
      </SubContainer>
    </ContactContainer>
  );
};

export default ContactUs;
