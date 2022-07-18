import { Container, Link, Button, Box, Heading, Paragraph, Image, useColorModeValue, SimpleGrid } from "@chakra-ui/react"
import styled from "@emotion/styled";
import ParagraphCard from "../components/paragraph-card";
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item";
import SpotifyImage from "../public/images/spotify.png"
function Works() {
    return ( 
    <Container>
        <Heading>
            Works.
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.1}>
                <WorkGridItem id="spotify-clone" title="Spotify Clone" thumbnail={SpotifyImage}>
                    A rebuild of the spotify web player with React Js and Styled components. Built with the spotify web API. 
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>
    );
}

export default Works;