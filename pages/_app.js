import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import Main from '../layouts/main-layout'
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }
  
const theme = extendTheme({ config })

function App({Component, pageProps, router}) {
    return (
    <ChakraProvider theme={theme}>
        <Main>
            <Component {...pageProps} key={router.route}/>
        </Main>
    </ChakraProvider>
    )
}

export default App