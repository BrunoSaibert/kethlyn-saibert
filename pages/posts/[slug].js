import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "../../src/lib/posts";

import { Title, Text } from "../../src/components/Typography";
import Article from "../../src/components/Article";
import Bio from "../../src/components/Bio";
import Percent from "../../src/components/Percent";
import SEO from "../../src/components/SEO";
import Share from "../../src/components/Share";

export default function Home({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <SEO
            title={post.title}
            description={post.excerpt}
            image={post.thumbnail}
            sharedRoute={`/posts/${post.slug}`}
          />

          <Percent />

          <Article
            header={
              <>
                <Title>{post.title}</Title>
                <Text>{post.excerpt}</Text>
              </>
            }
            thumbnail={post.thumbnail}
            tags={post.tags}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Article>

          <div style={{ padding: "0 2rem", maxWidth: 768, margin: "0 auto" }}>
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Compartilhe essa postagem
            </p>
            <Share url={`/posts/${post.slug}`} title={post.title} />
          </div>

          <Bio />
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "date",
    "tags",
    "title",
    "excerpt",
    "thumbnail",
    "content",
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
