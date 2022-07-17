import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layouts/main-layout'
import theme from "../layouts/theme"
import  Fonts from "../layouts/fonts"


function App({Component, pageProps, router}) {
    return (
    <ChakraProvider theme={theme}>
        <Fonts/>
        <Main router={router}>
            <Component {...pageProps} key={router.route}/>
        </Main>
    </ChakraProvider>
    )
}

export default App