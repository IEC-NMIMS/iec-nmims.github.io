import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface Props {
    index: number;
    image: string;
    name: string;
    desc: string;
    category: string;
    isMobile: boolean;
}

const SponsorsItem = (props: Props) => {
    const { image, name, desc, category, isMobile } = props;

    const EventCard = styled(Card)({
        width: isMobile ? "95%" : "350px",
        height: "400px",
        padding: "5px",
        backgroundColor: "rgba(42,43,42,.3)",
        borderRadius: "20px",
        zIndex: 1,
        display: "flex",
        flexDirection: "column", // Ensures children stack vertically
    });

    const SpeakerPic = styled(Box)({
        width: isMobile ? "100%" : "318px",
        height: isMobile ? "max-content" : "265px",
        borderRadius: "10px",
        zIndex: 1,
    });

    const Image = styled("img")({
        aspectRatio: isMobile ? "1/1" : "1.2 / 1",
        width: "100%",
        borderRadius: "10px",
        loading: "lazy",
        decoding: "async",
    });

    const SpeakerName = styled(Typography)({
        width: "100%",
        fontFamily: "ITCAvantGardeGothicStd",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "white",
        marginTop: "20px",
        textAlign: "center",
        zIndex: 1,
        transition: "color 0.3s ease",
    });

    const SpeakerDesc = styled(Typography)({
        width: "100%",
        fontFamily: "ITCAvantGardeGothicStd",
        textAlign: "center",
        fontSize: isMobile ? "0.8rem" : "1rem",
        color: "rgba(255, 255, 255, 0.8)",
        zIndex: 1,
    });

    const SpeakerCate = styled(Typography)({
        width: "100%",
        fontFamily: "ITCAvantGardeGothicStd",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        zIndex: 1,
        transition: "color 0.3s ease",
        marginTop: "auto", // Pushes it to the bottom
        paddingBottom: "20px", // Adds spacing from the bottom
    });

    const CardContentContainer = styled(CardContent)({
        display: "flex",
        flexDirection: "column",
        flexGrow: 1, // Allows stretching to push SpeakerCate down
    });

    return (
        <EventCard variant="outlined">
            <CardContentContainer>
                <SpeakerPic>
                    <Image src={image} alt={name} loading="lazy" decoding="async" />
                </SpeakerPic>
                <SpeakerName>{name}</SpeakerName>
                <SpeakerDesc>{desc}</SpeakerDesc>
                <SpeakerCate>{category}</SpeakerCate>
            </CardContentContainer>
        </EventCard>
    );
};

export default SponsorsItem;
