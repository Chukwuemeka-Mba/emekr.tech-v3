import { Container, Link, Button, Box, Heading, Paragraph, Image, useColorModeValue } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from "../components/section"
import ParagraphCard from "../components/paragraph-card"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../layouts/article"

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
            <p>Software engineer, publisher.</p>
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
            Work
          </Heading>
          <ParagraphCard>
      I am Emeka, a full stack software engineer based in Massachusetts USA. 
      I work closely with frontend teams to build unique user experiences for my clients’ products. 
      I bring a unique component based approach to frontend development which accelerates build time and frees teams to be their best selves  while working hard to achieve great feats.
              
      
      Currently working on a project called {"- "} 
        <NextLink href="/">
          <Link>Project</Link>
        </NextLink>
        </ParagraphCard>
        <Box align="center" my={4}>
          <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon/>}>
          My Portfolio
        </Button>
          </NextLink>
        </Box>
          </Section>
          <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
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
      </Container>
      </Layout>
    )
}

export default Page