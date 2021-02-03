import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${(props) =>
    props.full
      ? css`
          height: calc(100vh - 5rem);
        `
      : css`
          max-width: 768px;
          margin: 3rem auto;
        `};

  padding: 0 2rem;

  .avatar {
    width: 50%;

    & img {
      max-width: 100%;
      border-radius: 50%;
    }
  }

  .content {
    text-align: center;

    h4 {
      margin: 1rem 0 0.5rem;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;

    .avatar {
      width: 100%;
      min-width: 180px;
    }

    .content {
      text-align: left;
      margin: 0;
      font-size: 0.9rem;
      margin-left: 1rem;
    }
  }
`;
