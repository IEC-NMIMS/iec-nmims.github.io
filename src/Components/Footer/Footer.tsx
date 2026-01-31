import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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

	const FooterCopyright = styled(Typography)({
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1rem",
		fontFamily: "ITCAvantGardeGothicStd",
		textAlign: "center",
		marginBottom: "20px",
	});

	const FooterCredits = styled(Typography)({
		width: isMobile && window.innerWidth < 1024 ? "90%" : "100%",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.6rem" : "0.8rem",
		fontFamily: "ITCAvantGardeGothicStd",
		color: "rgba(255, 255, 255, 0.6)",
		textAlign: "center",
	});
	return (
		<FooterBox>
			<FooterCopyright>
				&copy; Copyright <b>IEC MPSTME</b>. All Rights Reserved
			</FooterCopyright>
			<FooterCredits>
				Website Built and Maintained by the <b>Tech Team</b> of IEC
			</FooterCredits>
		</FooterBox>
	);
};

export default Footer;
