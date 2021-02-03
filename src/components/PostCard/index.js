import React from "react";
import Link from "next/link";
import slugify from "slugify";

import { TagList, Tag } from "../Tag";
import { Title, Text } from "../Typography";

import * as S from "./styles";

function PostContainer({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

function PostCard({ content: post, ...props }) {
  return (
    <S.Card {...props}>
      {post.thumbnail && (
        <Link href={`/posts/${post.slug}`}>
          <a>
            <img src={post.thumbnail} />
            <br />
          </a>
        </Link>
      )}

      <div>
        <Text as="span" size="small">
          📅 {post.date}
        </Text>

        <Link href={`/posts/${post.slug}`}>
          <a>
            <Title as="h2">{post.title}</Title>
          </a>
        </Link>

        <Text>{post.excerpt}</Text>

        {post.tags && (
          <TagList>
            {post.tags.sort().map((tag) => (
              <Tag key={tag} slug={slugify(tag, { lower: true })}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </div>
    </S.Card>
  );
}

export { PostContainer, PostCard };
