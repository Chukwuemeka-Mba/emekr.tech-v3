import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
    return (
      <Container>
        <Box 
        borderRadius="lg" 
        bg={useColorModeValue("whiteAlpha.400", "whiteAlpha.200")} 
        p={3} 
        my={5} 
        w="100%" 
        align="center"
        >
          Hello World! I am a fullstack developer based in Boston Massachusetts.
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1} 
        align="center">
            <Heading as="h2" variant="page-title">
              Chukwuemeka Mba
            </Heading>
            <p>Digital artist, engineer and designer. Writer.</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{ md: 6}} align="center">
          <Image
          borderColor="whiteAlpha.800"
          borderWidth={1}
          borderStyle="solid"
          maxWidth="150px"
          display="inline-block"
          borderRadius="full"
          src="/avatar.png"
          />
          </Box>
        </Box>
      </Container>
    )
}

export default Page