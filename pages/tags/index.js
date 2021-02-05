import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { PostContainer } from "../../src/components/PostCard";
import { Title, Text } from "../../src/components/Typography";
import SEO from "../../src/components/SEO";

import { getAllTags } from "../../src/lib/tags";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
};

const childVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Tags({ tags }) {
  return (
    <>
      <SEO sharedRoute={`/tags`} />

      <motion.section
        style={{ padding: "0 2rem 2rem" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Title style={{ marginBottom: "1rem" }} variants={childVariants}>
          Todas as tags
        </Title>

        {tags.map(({ value, slug, count }, index) => (
          <Text key={index} variants={childVariants}>
            <Link href={`/tags/${slug}`}>
              <Text as="a" weight="bold">
                {value}
              </Text>
            </Link>{" "}
            <small>
              ({count} {count === 1 ? "postagem" : "postagens"})
            </small>
          </Text>
        ))}
      </motion.section>
    </>
  );
}

export async function getStaticProps() {
  const tags = getAllTags();

  return {
    props: { tags },
    revalidate: 60,
  };
}
