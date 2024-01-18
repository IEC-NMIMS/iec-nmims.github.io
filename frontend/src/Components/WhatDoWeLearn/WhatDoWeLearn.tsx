import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";

const OuterBox = styled(Box)({
	marginBottom: "150px",
	zIndex: 1,
});

const Title = styled(Typography)({
	color: "white",
	marginLeft: "50px",
	marginBottom: "50px",
	fontSize: "3rem",
	fontWeight: "bold",
	fontFamily: "ITCAvantGardeGothicStd",
	zIndex: 1,
});

const InnerBox = styled(Box)({
	display: "flex",
	zIndex: 1,
});

const WhatDoWeLearnBox = styled(Box)({
	marginTop: "35px",
	marginLeft: "30px",
	width: "200px",
	backgroundColor: "rgba(42,43,42,0.5)",
	borderRadius: "20px",
	height: "180px",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	zIndex: 1,
});

const Element = styled(Box)({
	maxWidth: "420px",
	marginLeft: "20px",
	marginRight: "auto",
	zIndex: 1,
});

const ElementTitle = styled(Typography)({
	marginTop: "40px",
	marginBottom: "10px",
	color: "white",
	fontSize: "1.8rem",
	fontWeight: "bold",
	fontFamily: "ITCAvantGardeGothicStd",
});

const ElementDescription = styled(Typography)({
	color: "white",
	fontSize: "0.8rem",
	fontWeight: "none",
	opacity: 0.6,
	fontFamily: "ITCAvantGardeGothicStd",
});

const KnowMore = styled(IconButton)({
	color: "white",
	fontSize: "16px",
	borderRadius: "0px",
	position: "relative",
	marginLeft: "-8px",
});

const Arrow = styled(EastIcon)({
	marginLeft: "10px",
});

const WhatDoWeLearn = () => {
	return (
		<OuterBox>
			<Title>What Do You Learn</Title>
			<InnerBox>
				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>Broaden your understanding of the corporate world</ElementTitle>
					<ElementDescription>
						This event comprises of multiple talks and competitions that broadens your
						perspective.
					</ElementDescription>
					<KnowMore>
						Know More <Arrow />
					</KnowMore>
				</Element>

				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>Concepts about entrepreneurship</ElementTitle>
					<ElementDescription>
						Concepts of Entrepreneurship that even you might not have thought about.
					</ElementDescription>
					<KnowMore>
						Know More <Arrow />
					</KnowMore>
				</Element>
			</InnerBox>
			<InnerBox>
				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>
						Having fun while <br /> Learning
					</ElementTitle>
					<ElementDescription>
						All the events are not only competitive and learning opriented but also fun
						filled...
					</ElementDescription>
					<KnowMore>
						Know More <Arrow />
					</KnowMore>
				</Element>

				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>
						Opportunities for <br /> networking
					</ElementTitle>
					<ElementDescription>
						This fiesta is a platform to connect and network woth a bunch of people from
						the industry... Grab an opportunity today
					</ElementDescription>
					<KnowMore>
						Know More <Arrow />
					</KnowMore>
				</Element>
			</InnerBox>
		</OuterBox>
	);
};

export default WhatDoWeLearn;
