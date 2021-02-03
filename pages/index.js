import React from "react";

import { getAllPosts } from "../src/lib/posts";

import { PostContainer, PostCard } from "../src/components/PostCard";
import SEO from "../src/components/SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1, when: "beforeChildren", staggerChildren: 0.1 },
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

export default function Home({ posts }) {
  const morePosts = posts.slice(0);

  return (
    <>
      <SEO sharedRoute="/" />

      <PostContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {morePosts.map((post) => (
          <PostCard key={post.title} content={post} variants={childVariants} />
        ))}
      </PostContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "thumbnail",
    "tags",
  ]);

  return {
    props: { posts },
  };
}
