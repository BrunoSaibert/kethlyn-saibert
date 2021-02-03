import React from "react";
import { motion } from "framer-motion";
import slugify from "slugify";

import { TagList, Tag } from "../Tag";

import * as S from "./styles";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.4 },
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

function Article({ children, header, tags, thumbnail }) {
  return (
    <S.Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <S.Header variants={childVariants}>{header}</S.Header>

      {thumbnail && (
        <motion.div variants={childVariants}>
          <img src={thumbnail} alt={header.title} />
        </motion.div>
      )}

      <S.Content variants={childVariants}>{children}</S.Content>

      <S.Tags>
        {tags && (
          <TagList>
            {tags.sort().map((tag) => (
              <Tag key={tag} slug={slugify(tag, { lower: true })}>
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </S.Tags>
    </S.Container>
  );
}

export default Article;
