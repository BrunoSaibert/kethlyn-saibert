import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.p)`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};

  ${(props) =>
    props.isTitle &&
    css`
      font-family: "Noto Sans", sans-serif;
      line-height: 1.25;
    `};

  ${(props) =>
    props.transform &&
    css`
      text-transform: ${props.transform};
    `}

  & > a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
