import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem 0 0;

    @media (min-width: 600px) {
      margin: 1rem;
    }
  }
`;
