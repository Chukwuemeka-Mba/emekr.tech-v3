import { Box, ListItem, List, useColorModeValue, Link } from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoTwitter
} from 'react-icons/io5'
import Section from './section'
const Footer = () => {
  return (
    <Box
      align="center"
      w="100%"
      position={'sticky'}
      bottom="0px"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      display="flex"
      flexDirection={'column'}
      pt="5"
    >
      <Section delay="0.1">
        <List
          display="flex"
          flexDirection={'row'}
          gap="5"
          justifyContent={'center'}
        >
          <ListItem>
            <Link href="https://github.com/Chukwuemeka-Mba" target="_blank">
              <IoLogoGithub />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/emekamba/">
              <IoLogoLinkedin />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/balajis">
              <IoLogoTwitter />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://reallifenero.medium.com/subscribe">
              <IoLogoMedium />
            </Link>
          </ListItem>
        </List>
      </Section>
      <Link href="/">&copy; {new Date().getFullYear()} Emeka.</Link>
    </Box>
  )
}

export default Footer
