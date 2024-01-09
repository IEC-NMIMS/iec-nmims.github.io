import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";

const ContactContainer = styled(Box)({
	color: "white",
	marginLeft: "50px",
	marginBottom: "100px",
	fontFamily: "sans-serif",
	zIndex: 1,
});
const Header = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "3rem",
	fontWeight: "bold",
	marginBottom: "50px",
});
const SubContainer = styled(Box)({
	backgroundColor: "rgb(42, 43, 42, 0.3)",
	borderRadius: "20px",
	color: "white",
	margin: "1.2%",
	marginLeft: ".2%",
	padding: "2%",
	display: "flex",
	paddingTop: "2.5%",
});
const ContactForm = styled(Box)({
	width: "50%",
	marginRight: "2%",
	display: "flex",
	flexDirection: "column",
});
const ContactInfo = styled(Box)({
	display: "inline-grid",
});
const NameEmail = styled(Box)({
	display: "flex",
});
const TextInput = styled(InputBase)({
	fontFamily: "ITCAvantGardeGothicStd",
	marginRight: "25px",
	color: "white",
	width: "325px",
	border: "2px solid rgba(255, 255, 255, 0.5)",
	borderRadius: "10px",
	height: "40px",
	padding: "5px 10px",
});
const SubjectInput = styled(InputBase)({
	fontFamily: "ITCAvantGardeGothicStd",
	marginTop: "25px",
	marginRight: "25px",
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
	marginRight: "25px",
	color: "white",
	width: "100%",
	border: "2px solid rgba(255, 255, 255, 0.5)",
	borderRadius: "10px",
	height: "10em",
	padding: "5px 10px",
});
const ButtonInput = styled(Button)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontWeight: "bold",
	color: "rgb(42, 43, 42)",
	borderColor: "#000000",
	borderRadius: "15px",
	width: "30%",
	marginLeft: "35%",
	textTransform: "none",
});
const CallAdd = styled(Box)({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gridTemplateRows: "2.5em 2.5em",
});
const Emhour = styled(Box)({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gridTemplateRows: "2.5em 2.5em",
});
const InfoHead = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: "1.5em",
	padding: "0px",
	marginBottom: "0px",
	fontWeight: "bold",
});
const Info = styled(Typography)({
	fontFamily: "ITCAvantGardeGothicStd",
	fontSize: ".8em",
	padding: "0px",
	marginTop: "0px",
});

const ContactUs = () => {
	return (
		<ContactContainer>
			<Header>Contact Us</Header>
			<SubContainer>
				<ContactForm>
					<NameEmail>
						<TextInput
							id="contact-name"
							placeholder="Name"
							type="text"
						/>
						<TextInput
							id="contact-email"
							placeholder="Email"
							type="email"
							style={{ marginRight: "0" }}
						/>
					</NameEmail>
					<SubjectInput
						id="contact-subject"
						placeholder="Subject"
						type="text"
					/>
					<MessageInput
						id="contact-meassage"
						placeholder="Message"
						multiline
						rows={6}
					/>{" "}
					<br />
					<ButtonInput
						variant="contained"
						color="inherit"
						disableElevation
					>
						Send Message
					</ButtonInput>
				</ContactForm>
				<ContactInfo>
					<CallAdd>
						<InfoHead>Call Us</InfoHead>
						<InfoHead>Address</InfoHead>
						<Info>+91 95756 22585</Info>
						<Info>
							IEC-MPSTME, NMIMS,V. L. Mehta Road, Vile Parle, West Mumbai, Maharashtra
							400056
						</Info>
					</CallAdd>
					<Emhour>
						<InfoHead>Email Us</InfoHead>
						<InfoHead>Open Hours</InfoHead>
						<Info>iecmpstme@nmims.edu</Info>
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
