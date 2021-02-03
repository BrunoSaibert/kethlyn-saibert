import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.article)`
  padding: 0 2rem;

  @media (max-width: 800px) {
    padding: 0;
  }

  & img {
    max-width: 100%;
  }
`;

export const Header = styled(motion.header)`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  max-width: 768px;
  margin: 3rem auto;
  padding: 0 2rem;

  @media (max-width: 800px) {
    margin: 0 auto 1rem;
  }

  h1 {
    margin-bottom: 1rem;

    @media (min-width: 800px) {
      font-size: 2.25rem;
    }
  }

  p {
    @media (min-width: 800px) {
      font-size: 1.5rem;
    }
  }

  span {
    margin-top: 1rem;
  }
`;

export const Content = styled(motion.section)`
  max-width: 768px;
  margin: 1rem auto;
  padding: 0 2rem;

  & {
    p {
      margin-bottom: 3rem;
      line-height: 2;
    }

    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
      border-bottom: 2px solid #ccc;

      &:hover {
        border-color: ${({ theme }) => theme.primary};
      }
    }

    blockquote {
      padding-left: 1rem;
      font-size: 1.25rem;
      font-style: italic;
      color: ${({ theme }) => theme.primary};
      border-left: 5px solid ${({ theme }) => theme.primary};
    }
  }
`;

export const Tags = styled.div`
  max-width: 768px;
  margin: 1rem auto;
  padding: 0 2rem;
`;
