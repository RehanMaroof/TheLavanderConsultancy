import {
  AspectRatio,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const PrepsPage = () => {
  const title = "Test Preparation Courses | The Lavander Consultancy";
  const description =
    "Get expert guidance and support for your test preparation with The Lavander Consultancy. We offer courses for IELTS, TOEFL, Duolingo, and more. Sign up for free today!";
  const keywords =
    "test preparation, IELTS, TOEFL, Duolingo, courses, online courses, study abroad, free courses";
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
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={6}
        >
          {/* Render your preps component with empty/static data if needed */}
        </Grid>
      </Container>
    </Box>
  );
};

export default PrepsPage;
