import Head from 'next/head'
import { ColorModeScript } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'
const Main = ({children}, {router}) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Nero - Homepage</title>
            </Head>
            <Container maxW="container.md" p={8}>
                {children}
            </Container>
        </Box>
    )
}

export default Main