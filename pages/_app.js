import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layouts/main-layout'
import theme from "../layouts/theme"
import  Fonts from "../layouts/fonts"
import { AnimatePresence } from 'framer-motion'

function App({Component, pageProps, router}) {
    return (
    <ChakraProvider theme={theme}>
        <Fonts/>
        <Main router={router}>
            <AnimatePresence 
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
            if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
            }
        }}>
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
        </Main>
    </ChakraProvider>
    )
}

export default App