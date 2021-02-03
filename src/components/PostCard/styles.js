import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled(motion.article)`
  padding: 1rem 2rem;

  @media (min-width: 900px) {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
      flex: 0 0 100%;
    }
  }

  a {
    text-decoration: none;

    h2 {
      margin-bottom: 0.5rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 0;
  }
`;
