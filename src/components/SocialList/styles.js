import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    @media (min-width: 600px) {
      margin: 0 1rem 0 0;
    }
  }
`;
