import React from "react";
import Link from "next/link";

import { Text } from "../Typography";

import * as S from "./styles";

function TagList({ children }) {
  return <S.List>{children}</S.List>;
}

function Tag({ children, slug }) {
  return (
    <S.Item>
      <Link href={`/tags/${slug}`} passHref>
        <a>
          <Text as="span" size="small" weight="bold">
            {children}
          </Text>
        </a>
      </Link>
    </S.Item>
  );
}

export { TagList, Tag };
