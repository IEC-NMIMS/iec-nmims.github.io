import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReviewList } from './ReviewList';
import Review from './Review';
import { Box } from '@mui/material';


const WhatTheyThinkOfIEC = () => {
    const WhatTheyThinkOfIECBox =styled(Box)({

        paddingLeft:'50px',
    })
    const Header =styled(Typography)({
        fontSize:'55px',
        color: 'white',
        padding:'40px  0 0 0px',
        fontWeight:'bold'

    })
    const Intro =styled(Typography)({
        fontSize:'20px',
        color: 'white',
        width:'800px',
        padding:'10px  0 30px 0px',
    })
    const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024, marginleft: "10px" },
			items: 2.6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
  return (
    <WhatTheyThinkOfIECBox>
    <Header>What they think of IEC</Header> 
    <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel justo vitae velit eleifend luctus. Nulla facilisi. Mauris bibendum tincidunt mauris, a interdum odio lacinia vel. Curabitur lacinia, justo at consequat congue, orci justo consequat justo, vel suscipit velit dolor id justo.  </Intro>
    <Carousel
				responsive={responsive}
				swipeable={false}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				transitionDuration={500}
			>
				{ReviewList.map((data) => (
					<Review
						title={data.title}
						star={data.star}
						desc={data.desc}
						reviewer={data.reviewer}
						position={data.position}
					></Review>
				))}
			</Carousel>
    </WhatTheyThinkOfIECBox>
  )
}

export default WhatTheyThinkOfIEC