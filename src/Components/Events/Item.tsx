import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

interface modals {
  title: string;
  subtitle: string;
  data: string;
  images: string[];
}
interface Props {
  image: string;
  name: string;
  desc: string;
  modalData: modals;
}

const Item = (props: Props) => {
  const navigate = useNavigate();
  const { image, name, desc, modalData } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const EventCard = styled(Card)({
    width: isMobile && window.innerWidth < 1024 ? "95%" : "350px",
    height: "600px",
    padding: "5px",
    backgroundColor: "rgba(42,43,42,.3)",
    borderRadius: "20px",

  });

  const EventPic = styled(Box)({
    display: "flex",
    alignSelf: "center",
    width: isMobile && window.innerWidth < 1024 ? "100%" : "320px",
    height: "260px",
    borderRadius: "10px",
  });

  const Image = styled("img")({
    width: isMobile && window.innerWidth < 1024 ? "100%" : "320px",
    height: isMobile && window.innerWidth < 1024 ? "" : "100%",
    aspectRatio: isMobile && window.innerWidth < 1024 ? "1 / 1" : "",
    borderRadius: "20px",
  });

  const EventName = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    margin: "10px 0",
  });

  const EventDesc = styled(Typography)({
    fontFamily: "ITCAvantGardeGothicStd",
    fontSize: isMobile && window.innerWidth < 1024 ? "0.75rem" : "0.85rem",
    marginBottom: "20px",
    color: "rgba(255, 255, 255, 0.8)",
  });

  const KnowMore = styled(IconButton)({
    color: "white",
    fontSize: "16px",
    borderRadius: "0px",
    margin: "10px 0 0 0",
    position: "fixed",
    bottom: "10px",
  });

  const KnowMoreText = styled(Typography)({
    marginLeft: "-8px",
    fontSize: "1.25rem",
    fontFamily: "ITCAvantGardeGothicStd",
  });

  const Arrow = styled(ArrowForwardIosIcon)({
    color: "white",
    paddingLeft: "20px",
    fontSize: "1.25rem",
  });
  const handleKnowMore = (title: string,subtitle:string, data: string, images: string[]) => {
    if (title === "Innovation Challenge") {
      navigate("/inceptio");
    } else {
      navigate("/events", {
        state: {
          title: title,
          subtitle: subtitle,
          data: data,
          images: images,
        },
      });
    }
  };

  const Itemcard = (
    <CardContent>
      <EventPic>
        <Image src={image} />
      </EventPic>
      <EventName>{name}</EventName>
      <EventDesc>{desc}</EventDesc>

      <KnowMore
        onClick={() =>
          handleKnowMore(modalData.title,modalData.subtitle, modalData.data, modalData.images)
        }
      >
        <KnowMoreText>Know More</KnowMoreText>
        <Arrow />
      </KnowMore>
    </CardContent>
  );
  return <EventCard variant="outlined">{Itemcard}</EventCard>;
};

export default Item;
