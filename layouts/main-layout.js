import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from "../components/navbar"
import Krato from '../components/krato'

const Main = ({children}, { router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Chukwuemeka-Mba | Website</title>
            </Head>
            <Navbar/>
            <Container maxW="container.md" p={5}>
                <Krato />
                {children}
            </Container>
        </Box>
    )
}

export default Main