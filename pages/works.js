import {
  Container,
  Link,
  Box,
  Button,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import SpotifyImage from '../public/images/spotify.png'
import WeatherAppImg from '../public/images/mlh-react.png'
import LakesideImg from '../public/images/lakeside.png'
import { IoMail, IoPaperPlane } from 'react-icons/io5'

function Works() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works.
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="spotify-clone"
              title="Lakeside Stydy Centre"
              thumbnail={LakesideImg}
              github="https://github.com/Chukwuemeka-Mba/lakeside-v2"
              live="https://lakeside-v2.vercel.app/"
            >
              Lakeside Study Centre is a non profit organisation, part of Opus
              Dei. A society focused on giving formation to young men good
              christian formation. I built the website with Nuxt js and Node
              Sass.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="spotify-clone"
              title="Spotify Clone"
              thumbnail={SpotifyImage}
              github="https://github.com/Chukwuemeka-Mba/spotify-clone"
              live="https://emeka-spotify-clone.netlify.app"
            >
              A rebuild of the spotify web player with React Js and Styled
              components. Built with the spotify web API.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="weather-app"
              title="MLH React Weather App"
              thumbnail={WeatherAppImg}
              github="https://github.com/MLH-Fellowship/prep-project-jan-2022"
              live="https://mlh-prep-jan-2022.netlify.app/"
            >
              Weather app built with react, styled with sass. Automatically
              selects your location and gives you weather details, suggestions
              and news reports.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
      <Box align={'center'}>
        <Link href="mailto:emekamba10@gmail.com">
          <Button
            rightIcon={<IoPaperPlane />}
            colorScheme="black"
            color="black.600"
            variant="outline"
            my="5"
          >
            Let&apos;s work together
          </Button>
        </Link>
      </Box>
    </Layout>
  )
}

export default Works
