import { useRef } from "react";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import emailjs from "@emailjs/browser";

const ContactUs = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const form = useRef<HTMLFormElement>(null);
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
    padding: isMobile && window.innerWidth < 1024 ? "20px 20px" : "2%",
    display: isMobile && window.innerWidth < 1024 ? "" : "flex",
    paddingTop: isMobile && window.innerWidth < 1024 ? "20px" : "2.5%",
  });

  const ContactForm = styled("form")({
    width: isMobile && window.innerWidth < 1024 ? "100%" : "50%",
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "2%",
    display: isMobile && window.innerWidth < 1024 ? "" : "flex",
    flexDirection: "column",
  });

  const ContactInfo = styled(Box)({
    display: isMobile && window.innerWidth < 1024 ? "" : "inline-grid",
  });

  const NameEmail = styled(Box)({
    display: isMobile && window.innerWidth < 1024 ? "" : "flex",
  });

  const TextInput = styled(InputBase)({
    fontFamily: "ITCAvantGardeGothicStd",
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    marginBottom: isMobile && window.innerWidth < 1024 ? "25px" : "0",
    color: "white",
    width: isMobile && window.innerWidth < 1024 ? "100%" : "325px",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    height: "40px",
    padding: "5px 10px",
  });

  const SubjectInput = styled(InputBase)({
    fontFamily: "ITCAvantGardeGothicStd",
    marginTop: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    marginRight: isMobile && window.innerWidth < 1024 ? "0" : "25px",
    color: "white",
    width: "100%",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    height: "40px",
    padding: "5px 10px",
  });

  const MessageInput = styled(InputBase)({
    fontFamily: "ITCAvantGardeGothicStd",
    marginTop: "25px",
    marginRight: isMobile ? "0" : "25px",
    color: "white",
    width: "100%",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    height: "10em",
    padding: "5px 10px",
  });

  const ButtonInput = styled("button")({
    fontFamily: "ITCAvantGardeGothicStd",
    fontWeight: "bold",
    color: "rgb(42, 43, 42)",
    borderColor: "#000000",
    borderRadius: "15px",
    width: isMobile && window.innerWidth < 1024 ? "100%" : "40%",
    height: isMobile && window.innerHeight < 1024 ? "40px" : "50px",
    margin: isMobile && window.innerWidth < 1024 ? "20px 0" : "0",
    alignSelf: "center",
    textTransform: "none",
    cursor: "pointer",
  });

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
    padding: "0px",
    marginBottom: "0px",
    fontWeight: "bold",
  });
  const StyledLink= styled('a')({
    fontFamily: "ITCAvantGardeGothicStd",
    color: "white",
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline",
    }
  })

  const Info = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "0.9rem",
    padding: "0px",
    marginTop: "0px",
  });
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_79t3ups", "template_s527qdh", form.current!, {
        publicKey: "rxKvzV-FaA8t2u-yw",
      })
      .then(
        () => {
          form.current!.reset();
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED..." + error.text);
        }
      );
  };
  return (
    <ContactContainer>
      <Header>Contact Us</Header>
      <SubContainer>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <NameEmail>
            <TextInput
              id="contact-name"
              placeholder="Name"
              name="name"
              type="text"
            />
            <TextInput
              id="contact-email"
              placeholder="Email"
              name="email"
              type="email"
              style={{ marginRight: "0" }}
            />
          </NameEmail>
          <SubjectInput
            id="contact-subject"
            placeholder="Subject"
            name="subject"
            type="text"
          />
          <MessageInput
            id="contact-meassage"
            placeholder="Message"
            name="message"
            multiline
            rows={6}
          />{" "}
          <br />
          <ButtonInput color="inherit">Send Message</ButtonInput>
        </ContactForm>
        <ContactInfo>
          <CallAdd>
            <InfoHead>Call Us</InfoHead>
            <InfoHead>Address</InfoHead>
            <Info> <StyledLink href="tel:+919309521094">+91 93095 21094</StyledLink></Info>
            <Info>
              IEC-MPSTME, NMIMS,V. L. Mehta Road, Vile Parle, West Mumbai,
              Maharashtra 400056
            </Info>
          </CallAdd>
          <Emhour>
            <InfoHead>Email Us</InfoHead>
            <InfoHead>Open Hours</InfoHead>
            <Info><StyledLink href= "mailto:contact@iecnmims.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20discuss...">contact@iecnmims.com</StyledLink></Info>
            <Info>
              Monday - Saturday
              <br></br>10:00AM - 05:00PM
            </Info>
          </Emhour>
        </ContactInfo>
      </SubContainer>
    </ContactContainer>
  );
};
export default ContactUs;
