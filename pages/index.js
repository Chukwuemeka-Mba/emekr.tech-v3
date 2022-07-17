import { Container, Box, Heading, Image } from "@chakra-ui/react"


const Page = () => {
    return (
      <Container>
        <Box borderRadius="lg" bg="teal" p={3} my={5} w="100%" color="white">
          Hello World! I am a fullstack developer based in Boston Massachusetts.
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chukwuemeka Mba
            </Heading>
            <p>Digital artist, engineer and designer. Writer.</p>
          </Box>
        </Box>
      </Container>
    )
}

export default Page