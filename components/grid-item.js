// import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { IoGlobeOutline, IoLogoGithub } from 'react-icons/io5'

export const GridItem = ({
  children,
  href,
  title,
  live,
  github,
  thumbnail
}) => (
  <Box w="100%" align="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      loading="lazy"
    />
    <Text mt={2}>{title}</Text>
    <Text fontSize={14}>{children}</Text>
    <Flex>
      <Link href={github}>
        <IoLogoGithub />
      </Link>
      <Link href={live}>
        <IoGlobeOutline />
      </Link>
    </Flex>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  live,
  github,
  thumbnail
}) => (
  <Box w="100%" align="center" marginTop={5}>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Text mt={2} fontSize={20} textAlign="left">
      {title}
    </Text>
    <Text mt={2} fontSize={16} textAlign={'left'}>
      {children}
    </Text>
    <Flex flex={'row'} alignItems="center" my="5" gap="5">
      <Link href={github} target="_blank">
        <IoLogoGithub />
      </Link>
      <Link href={live} target="_blank">
        <IoGlobeOutline />
      </Link>
    </Flex>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail {
            border-radius: 12px;
            margin-top: 2rem;
    }
    `}
  />
)
