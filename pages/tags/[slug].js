import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostsByTag } from "../../src/lib/posts";
import { getAllTags } from "../../src/lib/tags";

import { PostContainer, PostCard } from "../../src/components/PostCard";
import { Title } from "../../src/components/Typography";
import SEO from "../../src/components/SEO";

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

export default function Tag({ slug, tag, posts }) {
  const router = useRouter();

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <SEO sharedRoute={`/tags/${slug}`} />

          <PostContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Title
              style={{ padding: "0 2rem", flex: "100%" }}
              variants={childVariants}
            >
              {posts.length} {posts.length === 1 ? "postagem" : "postagens"} com
              a tag <big>"{tag}"</big>
            </Title>

            {posts.map((post) => (
              <PostCard
                key={post.title}
                content={post}
                variants={childVariants}
              />
            ))}
          </PostContainer>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { posts, tag } = getPostsByTag(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "thumbnail",
    "tags",
  ]);

  return {
    props: {
      slug: params.slug,
      tag,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug,
        },
      };
    }),
    fallback: false,
  };
}
