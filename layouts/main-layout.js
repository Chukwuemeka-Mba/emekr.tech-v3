import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const Main = ({children}, { router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Emekr.tech| Website</title>
            </Head>
            <Navbar/>
            <Container maxW="container.md" p={5} pt="20">
                {children}
            <Footer/>
            </Container>
        </Box>
    )
}

export default Main