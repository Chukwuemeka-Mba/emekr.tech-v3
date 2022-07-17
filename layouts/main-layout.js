import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from "../components/navbar"
const Main = ({children}, {router}) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Chukwuemeka-Mba | Website</title>
            </Head>
            <Container maxW="container.md" p={5}>
                <Navbar/>
                {children}
            </Container>
        </Box>
    )
}

export default Main