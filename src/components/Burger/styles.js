import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  cursor: pointer;

  .meat {
    position: absolute;
    width: 28px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    top: calc(50% - 2px / 2);
    left: calc(50% - 28px / 2);
    transition: all 150ms ease-in;
  }
  .meat-1 {
    transform: translateY(-10px);
  }
  .meat-2 {
    width: calc(28px - 6px);
  }
  .meat-3 {
    transform: translateY(10px);
  }
  &.active {
    .meat-1 {
      transform: rotate(45deg);
    }
    .meat-2 {
      opacity: 0;
    }
    .meat-3 {
      transform: rotate(-45deg);
    }
  }

  @media (min-width: 769px) {
    & {
      display: none;
    }
  }
`;
