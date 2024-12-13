import TableOfContents from "../../components/TableOfContents";
import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import * as prism from "prismjs";
import "prismjs/components/prism-typescript";
import { useMemo } from "react";

/*
  Headings
*/
const h1 = (props) => (
  <Heading id={props.children} fontSize="4xl" as="h1" mb={4} {...props} />
);
const h2 = (props) => (
  <Heading id={props.children} fontSize="2xl" as="h2" mb={4} {...props} />
);
const h3 = (props) => (
  <Heading id={props.children} fontSize="xl" as="h3" mb={4} {...props} />
);
const h4 = (props) => (
  <Heading id={props.children} fontSize="lg" as="h4" mb={4} {...props} />
);
const h5 = (props) => (
  <Heading id={props.children} fontSize="base" as="h5" mb={4} {...props} />
);
const h6 = (props) => (
  <Heading id={props.children} fontSize="sm" as="h6" mb={4} {...props} />
);
/* 
  Paragraph
*/
function CustomParagraph(props) {
  return (
    <Text mb={6} lineHeight={1.6} {...props} color="black" fontSize="2xl" />
  );
}
/*
  Lists
*/
const CustomUl = (props) => (
  <UnorderedList spacing={2} mb={6} color="gray.900" {...props} />
);
const CustomLi = (props) => <ListItem color="gray.900" {...props} />;
const ol = (props) => <OrderedList spacing={2} mb={6} {...props} />;
/*
  Divider
*/
const hr = (props) => <Divider {...props} my={8} />;
/* 
  Code
*/
function CustomCode({ children, className }) {
  const language = className?.replace("language-", "") ?? "typescript";
  const highlighted = useMemo(
    () => prism.highlight(children, prism.languages[language], language),
    [children, language]
  );
  return (
    <Box
      as="code"
      bg="gray.900"
      rounded="md"
      p={1}
      color="white"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    ></Box>
  );
}
const pre = ({ children }) => (
  <Box
    as="pre"
    mb={6}
    rounded="lg"
    bg="gray.900"
    p={4}
    maxW="full"
    overflow="auto"
  >
    {children}
  </Box>
);
/*
  Image
*/
const CustomImage = (props) => (
  <Image {...props} alt={props.alt} layout="responsive" loading="lazy" />
);
/*
  Link
*/

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return isInternalLink ? (
    <Link
      as={NextLink}
      href={href}
      color="primary.400"
      {...props}
      fontWeight="bold"
      className="mdx"
    >
      {props.children}
    </Link>
  ) : (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      color="blue.500"
      className="mdx"
      fontWeight="bold"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export const mdxComponents = {
  a: CustomLink,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul: CustomUl,
  ol,
  li: CustomLi,
  TableOfContents,
  hr,
  img: CustomImage,
  p: CustomParagraph,
  code: CustomCode,
  pre,
};
