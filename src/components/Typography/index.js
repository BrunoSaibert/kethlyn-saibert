import React from "react";
import { motion } from "framer-motion";

import * as S from "./styles";

const sizes = { large: 1.5, medium: 1, small: 0.667 };
const transforms = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

function Typography({
  children,
  size = "medium",
  transform = "",
  isTitle = false,
  weight = 400,
  ...props
}) {
  return (
    <S.Container
      size={sizes[size]}
      transform={transforms[transform]}
      weight={weight}
      isTitle={isTitle}
      {...props}
    >
      {children}
    </S.Container>
  );
}

function Title({ children, ...props }) {
  return (
    <Typography
      as={motion.h1}
      size="large"
      weight={700}
      transform="uppercase"
      isTitle
      {...props}
    >
      {children}
    </Typography>
  );
}

function Text({ children, ...props }) {
  return <Typography {...props}>{children}</Typography>;
}

export { Title, Text };
