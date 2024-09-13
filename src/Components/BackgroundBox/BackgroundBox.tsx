import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { useMediaQuery, useTheme } from "@mui/material";

interface Props {
	color: string;
	position: string;
	index: number;
}

const BackgroundBox = (props: Props) => {
	const { color, position, index } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const colorGradient =
		color.toLowerCase() === "blue"
			? "linear-gradient(to bottom right,rgba(0, 80, 217,1)40%, rgba(0,212,255,1)80%,rgba(0, 232, 255)10%,#000 )"
			: "linear-gradient(to bottom right,rgba(241, 227, 180)5%,rgba(251, 130, 59)30%,rgba(255, 92, 0)100%,#000 )";

	let FadedBox = styled(Box)({});
	const top = index * 500 + "px";

	FadedBox = styled(Box)({
		height: isMobile && window.innerWidth < 1024 ? "150px" : "300px",
		width: isMobile && window.innerWidth < 1024 ? "150px" : "300px",
		borderRadius: "100%",
		filter: "blur(30px)",
		position: "absolute",
		backgroundImage: colorGradient,
		top: top,
		opacity: 0.4,
		zIndex: isMobile ? 0 : -1,
		animationName: "moving",
		animationDuration: "10s",
		animationIterationCount: "infinite",
		animationDirection: position.toLowerCase() == "left" ? "alternate" : "alternate-reverse",
	});
	return <FadedBox />;
};

export default BackgroundBox;
