import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";

const OuterBox = styled(Box)({
	marginLeft: "50px",
});

const Title = styled(Typography)({
	color: "white",
	marginTop: "50px",
	marginLeft: "50px",
	fontSize: "3rem",
});

const InnerBox = styled(Box)({
	display: "flex",
});

const WhatDoWeLearnBox = styled(Box)({
	marginTop: "35px",
	marginLeft: "30px",
	width: "200px",
	backgroundColor: "rgba(42,43,42,255)",
	borderRadius: "20px",
	height: "215px",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	border: "solid",
});

const Element = styled(Box)({
	maxWidth: "420px",
	marginLeft: "20px",
	marginRight: "auto",
});

const ElementTitle = styled(Typography)({
	marginTop: "40px",
	color: "white",
	fontSize: "1.8rem",
});

const ElementDescription = styled(Typography)({
	color: "white",
	fontWeight: "none",
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
						IEC's introductory event meant for freshers essentially to get the essence
						of 'our vision and mission'.It is a delightful experience with a Bollywood
						twist where freshers get hands-on experience about entrepreneurship.
					</ElementDescription>
					<br />
					<KnowMore>
						{" "}
						Know More <Arrow />
					</KnowMore>
				</Element>

				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>Concepts about entrepreneurship</ElementTitle>
					<ElementDescription>
						IEC's introductory event meant for freshers essentially to get the essence
						of 'our vision and mission'.It is a delightful experience with a Bollywood
						twist where freshers get hands-on experience about entrepreneurship.
					</ElementDescription>
					<br />
					<KnowMore>
						{" "}
						Know More <Arrow />
					</KnowMore>
				</Element>
			</InnerBox>
			<InnerBox>
				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>Having fun while Learning</ElementTitle>
					<ElementDescription>
						IEC's introductory event meant for freshers essentially to get the essence
						of 'our vision and mission'.It is a delightful experience with a Bollywood
						twist where freshers get hands-on experience about entrepreneurship.
					</ElementDescription>
					<br />
					<KnowMore>
						{" "}
						Know More <Arrow />
					</KnowMore>
				</Element>

				<WhatDoWeLearnBox></WhatDoWeLearnBox>
				<Element>
					<ElementTitle>Opportunities for networking</ElementTitle>
					<ElementDescription>
						IEC's introductory event meant for freshers essentially to get the essence
						of 'our vision and mission'.It is a delightful experience with a Bollywood
						twist where freshers get hands-on experience about entrepreneurship.
					</ElementDescription>
					<br />
					<KnowMore>
						{" "}
						Know More <Arrow />
					</KnowMore>
				</Element>
			</InnerBox>
		</OuterBox>
	);
};

export default WhatDoWeLearn;
