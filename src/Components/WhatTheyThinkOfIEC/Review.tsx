import styled from "@emotion/styled";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { Box } from "@mui/system";
// import StarIcon from "@mui/icons-material/Star";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

interface Props {
	desc: string;
	reviewer: string;
	position: string;
}

const Review = (props: Props) => {
	const {  desc, reviewer, position } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	const ReviewBox = styled(Box)({
		color: "white",
		width: isMobile && window.innerWidth < 1024 ? "94%" : "500px",
		backgroundColor: "rgba(42,43,42,.3)",
		borderRadius: "20px",
		height: isMobile && window.innerWidth < 1024 ? "200px" : "250px",
		padding: "10px",
	});
	const Header = styled(Box)({
		display: "flex",
		flexDirection: "row",
	});
	const Footer = styled(Box)({
		display: "flex",
		flexDirection: "row",
		position: "absolute",
		bottom: "15px",
	});

	// const Title = styled(Typography)({
	// 	fontFamily: "ITCAvantGardeGothicStd",
	// 	color: "white",
	// 	padding: "0px 0px 15px 15px",
	// 	fontSize: isMobile && window.innerWidth < 1024 ? "1rem" : "2rem",
	// });
	// const Star = styled(Box)({
	// 	color: "white",
	// 	position: "absolute",
	// 	right: isMobile && window.innerWidth < 1024 ? "20px" : "60px",
	// 	paddingTop: isMobile && window.innerWidth < 1024 ? "0" : "5px",
	// });
	const Desc = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		color: "white",
		padding: "5px 0px 0px 15px",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1.25rem",
		width: isMobile && window.innerWidth < 1024 ? "90%" : "470px",
		overflowY: "scroll",
	});
	const Avatar = styled(AccountCircleRoundedIcon)({
		fontSize: isMobile && window.innerWidth < 1024 ? "2.5rem" : "4.16rem",
		padding: "0 10px 0 10px",
	});

	const ReviwerInfo = styled(Box)({
		display: "flex",
		flexDirection: "column",
	});

	const Reviewer = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "1rem" : "1.5rem",
	});
	const Position = styled(Typography)({
		fontFamily: "ITCAvantGardeGothicStd",
		fontSize: isMobile && window.innerWidth < 1024 ? "0.8rem" : "1.16rem",
	});
	// const handleStar = (star: number) => {
	// 	const stars = Array.from({ length: star }, (_, index) => <StarIcon key={index} />);
	// 	return stars as React.ReactNode[];
	// };

	return (
		<ReviewBox>
			<Header>
				{/*<Title>{title}</Title>*/}

			</Header>
			<Desc>{desc}</Desc>
			<Footer>
				<Avatar />
				<ReviwerInfo>
					<Reviewer>{reviewer}</Reviewer>
					<Position>{position}</Position>
				</ReviwerInfo>
			</Footer>
		</ReviewBox>
	);
};

export default Review;
