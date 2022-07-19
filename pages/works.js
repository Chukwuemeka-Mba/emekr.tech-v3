import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../layouts/article"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item";
import SpotifyImage from "../public/images/spotify.png"
import WeatherAppImg from "../public/images/mlh-react.png"
function Works() {
    return ( 
        <Layout>
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Works.
        </Heading>
        <SimpleGrid columns={[1,1,1]} gap={6}>
            <Section delay={0.1}>
                <WorkGridItem id="spotify-clone" title="Spotify Clone" thumbnail={SpotifyImage}>
                    A rebuild of the spotify web player with React Js and Styled components. Built with the spotify web API. 
                </WorkGridItem>
            </Section>
            <Section delay={0.2}>
                <WorkGridItem id="weather-app" title="MLH React Weather App" thumbnail={WeatherAppImg}>
                Weather app built with react, styled with sass. Automatically selects your location and gives you weather details, suggestions and news reports.                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>
        </Layout>
    );
}

export default Works;