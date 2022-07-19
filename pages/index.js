import { Container, Link, List, Button, Box, Heading, Paragraph, SimpleGrid, Image, useColorModeValue, Grid } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from "../components/section"
import ParagraphCard from "../components/paragraph-card"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../layouts/article"
import StackCard from "../components/stack-card"
import { IoLogoHtml5 } from "react-icons/io5"
// Images
import VueImg from "../public/images/vue.js.png"
import NetlifyImg from "../public/images/netlify.png"
import VercelImg from "../public/images/verce.png"
import ReactImg from "../public/images/react.png"
import NodeImg from "../public/images/nodejs.png"
import ReduxImg from "../public/images/redux.png"
import NuxtImg from "../public/images/nuxt.png"
import HerokuImg from "../public/images/heroku.png"
import NotionImg from "../public/images/notion.png"
import PostmanImg from "../public/images/postman.png"
import MongoDBImg from "../public/images/mongodb.png"
import FigmaImg from "../public/images/figma.png"
import PythonImg from "../public/images/python.png"
import TypescriptImg from "../public/images/ts.png"
import JavascrptImg from "../public/images/js.png"
const Page = () => {
    return (
      <Layout>
      <Container>
        <Box 
        borderRadius="lg" 
        bg={useColorModeValue("whiteAlpha.400", "whiteAlpha.200")} 
        p={3} 
        my={10} 
        w="100%" 
        align="center"
        >Tech + Finance 
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1} 
        align="center">
            <Heading as="h2" variant="page-title">
              Chukwuemeka Mba
            </Heading>
            <p>Software engineer, writer.</p>
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
          <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <ParagraphCard>
      I am a full stack software engineer based in Boston Massachusetts. 
      I bring a unique component based approach to frontend development which accelerates build time and frees teams to be their best selves  while working hard to achieve great feats.
        
      Currently working with Acumen's {""}
        
          <Link href="https://payeth-stake-merchant.herokuapp.com/" color={'purple.600'} fontWeight="700">Payeth</Link>
        
        {" "}team.
        </ParagraphCard>
        <Box align="center" my={4}>
          <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon/>} colorScheme='black' variant="outline">
          My Portfolio
        </Button>
          </NextLink>
        </Box>
          </Section>
          <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <BioSection>
        <BioYear>
          2022 
        </BioYear>
        Engineering Prep Fellow at MLH Fellowship
          </BioSection>
          <BioSection>
        <BioYear>
          2022 to present
        </BioYear>
        Frontend Engineer at Acumen Digital
          </BioSection>
          </Section>
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Tech Stack
            </Heading>
            <Box my={"5"} >
            <Heading as='h5' size='sm' py="5">
              Languages
            </Heading>
            <SimpleGrid minChildWidth='120px' spacing='10px'>
              <StackCard thumbnail={PythonImg} text={"Python"}/>
              <StackCard thumbnail={TypescriptImg} text={"TS"}/>
              <StackCard thumbnail={JavascrptImg} text={"JS"}/>
              <Button gap={'5'} variant="outline" colorScheme={'white'}>
                <IoLogoHtml5 color="orange"/> 
                HTML5
              </Button>
            </SimpleGrid>
            </Box>
            <Box my={"5"}>
            <Heading as='h5' size='sm' py="5">
              Frameworks
            </Heading>
            <SimpleGrid minChildWidth='120px' spacing='10px'>
              <StackCard thumbnail={ReactImg} text={"React JS"}/>
              <StackCard thumbnail={ReduxImg} text={"Redux JS"}/>
              <StackCard thumbnail={VueImg} text={"Vue Js"}/>
              <StackCard thumbnail={NuxtImg} text={"Nuxt JS"}/>
              <StackCard thumbnail={NodeImg} text={"Node JS"}/>
              <StackCard thumbnail={FigmaImg} text={"Figma"}/>
              <StackCard thumbnail={MongoDBImg} text={"Mongo db"}/>
            </SimpleGrid>
            </Box>
            <Box my={"5"}>
            <Heading as='h5' size='sm' py="5">
              Platforms
            </Heading>
            <SimpleGrid minChildWidth='120px' spacing='10px'>
              <StackCard thumbnail={NotionImg} text={"Notion"}/>
              <StackCard thumbnail={HerokuImg} text={"Heroku"}/>
              <StackCard thumbnail={PostmanImg} text={"Postman"}/>
              <StackCard thumbnail={NetlifyImg} text={"Netlify"}/>
              <StackCard thumbnail={VercelImg} text={"Vercel"}/>
            </SimpleGrid>
            </Box>
          </Section>
      </Container>
      </Layout>
    )
}

export default Page