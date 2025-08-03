import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const PrepsPage = () => {
  const title = "Test Preparation Courses | The Lavander Consultancy";
  const description =
    "Get expert guidance and support for your test preparation with The Lavander Consultancy. We offer courses for IELTS Academic, TOEFL iBT, PTE Academic, Cambridge English, OET, Duolingo, and more. Sign up for free today!";
  const keywords =
    "test preparation, IELTS Academic, TOEFL iBT, PTE Academic, Cambridge English, OET, Duolingo, courses, online courses, study abroad, free courses";
  const url = "https://thelavanderconsultancy.com/preps";
  const image = `${process.env.ENDPOINT}/home.jpg`;

  return (
    <Box bg="gray.200">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Container py="16" maxW={["100vw", "80vw"]}>
        <Box mb="12" textAlign="center">
          <Heading 
            as="h1" 
            size="xl" 
            color="gray.800" 
            mb="6"
          >
            We Are Here to Help You With
          </Heading>
          <Text 
            color="gray.600" 
            fontSize="lg" 
            maxW="4xl" 
            mx="auto" 
            mb="8"
          >
            Take the first step to your career with The Lavander Consultancy. Looking for solutions? 
            We have got everything covered for you from work visa services to your career development
          </Text>
          
          {/* Service Categories */}
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={6} mb="10">
            <Box bg="teal.50" p="6" borderRadius="lg" border="2px" borderColor="teal.200">
              <Heading size="md" color="teal.700">Language Courses</Heading>
            </Box>
            <Box bg="blue.50" p="6" borderRadius="lg" border="2px" borderColor="blue.200">
              <Heading size="md" color="blue.700">Test Preparation</Heading>
            </Box>
            <Box bg="purple.50" p="6" borderRadius="lg" border="2px" borderColor="purple.200">
              <Heading size="md" color="purple.700">Conversation Practices</Heading>
            </Box>
          </Grid>
        </Box>

        {/* Language Courses Section */}
        <Box mb="12">
          <Heading as="h2" size="lg" color="gray.800" mb="4">
            Language Courses
          </Heading>
          <Text color="gray.600" mb="8">
            We offer comprehensive language courses in Pakistan to help you master new languages and achieve your goals. Our offerings include
          </Text>
          
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
            mb="12"
          >
            {/* IELTS Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="teal.600">
                  IELTS Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free orientation sessions</li>
                  <li>Focused training for each module</li>
                  <li>One-on-one speaking practice</li>
                  <li>Mock exams with feedback</li>
                  <li>Includes up to 50% discount voucher</li>
                </Box>
                <Link href="/preps/63ec1441b56829f963751950">
                  <Button 
                    colorScheme="teal" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* TOEFL Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="blue.600">
                  TOEFL Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Understand the test format</li>
                  <li>Enhance your writing</li>
                  <li>Improve speaking fluency</li>
                  <li>Practice tests and score analysis</li>
                  <li>Comes with up to 50% discount for added value</li>
                </Box>
                <Link href="/preps/toefl">
                  <Button 
                    colorScheme="blue" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* Duolingo English Test */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="green.600">
                  Duolingo English Test Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free trial session for test pattern</li>
                  <li>Vocabulary and grammar sessions</li>
                  <li>Performance tracking after every module</li>
                  <li>Performance tracking with feedback</li>
                  <li>Includes up to 50% discount for affordable learning</li>
                </Box>
                <Link href="/preps/duolingo">
                  <Button 
                    colorScheme="green" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* German Test Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="orange.600">
                  German Test Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free introductory session</li>
                  <li>Individual module practice</li>
                  <li>German writing and speaking drills</li>
                  <li>Mock exams with feedback</li>
                  <li>Up to 50% discount for cost-effective prep</li>
                </Box>
                <Link href="/preps/german">
                  <Button 
                    colorScheme="orange" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* GMAT Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="red.600">
                  GMAT Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free trial session</li>
                  <li>Analytical writing assessment</li>
                  <li>Learn time-saving strategies</li>
                  <li>Practice test with feedback</li>
                  <li>Up to 50% discount on your registration</li>
                </Box>
                <Link href="/preps/gmat">
                  <Button 
                    colorScheme="red" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* GRE Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="purple.600">
                  GRE Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free GRE overview session</li>
                  <li>Strengthen specific modules</li>
                  <li>Daily vocabulary builder</li>
                  <li>Tests with scoring analytics</li>
                  <li>Enroll with an up to 50% discount voucher</li>
                </Box>
                <Link href="/preps/gre">
                  <Button 
                    colorScheme="purple" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>

            {/* PTE Preparation */}
            <GridItem>
              <Box 
                bg="white" 
                borderRadius="lg" 
                p="6" 
                boxShadow="md" 
                _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                border="1px"
                borderColor="gray.200"
              >
                <Heading as="h3" size="md" mb="4" color="pink.600">
                  PTE Preparation
                </Heading>
                <Box as="ul" color="gray.600" mb="6" listStyleType="disc" pl="4">
                  <li>Free introductory class</li>
                  <li>Skill-based practice sessions</li>
                  <li>AI-based speaking evaluation</li>
                  <li>Mock tests with tips</li>
                  <li>Comes with up to 50% discount for a pocket-friendly start</li>
                </Box>
                <Link href="/preps/pte">
                  <Button 
                    colorScheme="pink" 
                    size="md" 
                    width="full"
                  >
                    Start Course
                  </Button>
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Test Preparation Section */}
        <Box mb="12">
          <Heading as="h2" size="lg" color="gray.800" mb="4">
            Test Preparation
          </Heading>
          <Text color="gray.600" mb="6">
            Prepare yourself for language proficiency tests with The Lavander Consultancy&apos;s dedicated test preparation services. 
            Achieve high scores in language proficiency tests such as IELTS and PTE with our specialized preparation courses. 
            We provide thorough training and practice to help you succeed.
          </Text>
        </Box>

        {/* Conversation Practices Section */}
        <Box mb="8">
          <Heading as="h2" size="lg" color="gray.800" mb="4">
            Conversation Practices
          </Heading>
          <Text color="gray.600">
            Prepare yourself for language proficiency tests with The Lavander Consultancy&apos;s dedicated test preparation services. 
            Achieve high scores in language proficiency tests such as IELTS and PTE with our specialized preparation courses. 
            We provide thorough training and practice to help you succeed.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default PrepsPage;
