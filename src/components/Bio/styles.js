import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${(props) =>
    props.hasBackground &&
    css`
      background: ${({ theme }) => theme.header};
      color: ${({ theme }) => theme.text};
      border-radius: 8px;
    `};

  ${(props) =>
    props.full &&
    css`
      height: calc(100vh - 5rem);
    `};

  max-width: 768px;
  margin: 1rem auto;
  padding: 2rem;

  .avatar {
    width: 50%;

    & img {
      max-width: 100%;
      border-radius: 50%;
    }
  }

  .content {
    text-align: center;

    & * {
      max-width: 100%;
    }

    h4 {
      margin: 1rem 0 0.5rem;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 2rem;

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
