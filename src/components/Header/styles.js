import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${({ theme }) => theme.header};
  width: 100%;
  height: 4rem;

  z-index: 2;
`;

export const Header = styled.header`
  max-width: 1200px;
  height: 4rem;
  margin: auto;
  padding: 0 2rem;
  transition: all 0.3s ease-in-out 0s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;

      li {
        font-size: 1rem;
        padding: 0 0 0 1.5rem;

        a {
          font-weight: 600;
          color: ${({ theme }) => theme.text};
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;

          &:active,
          &:hover,
          &.current {
            color: ${({ theme }) => theme.primary};
            border-bottom: 1px solid ${({ theme }) => theme.primary};
          }
        }
      }
    }
  }

  @media (max-width: 769px) {
    & {
      nav {
        opacity: 0;

        width: 100%;
        height: calc(100vh - 4rem);

        background: ${({ theme }) => theme.primary};

        margin: 4rem 0 0;
        padding: 2rem;

        position: fixed;
        top: 0;
        left: 0;

        align-items: flex-start;
        flex-direction: column;

        transform: translateY(100%);
        /* transition: opacity 200ms; */

        ul {
          flex-direction: column;

          li {
            font-size: 1.5rem;
            padding: 1rem 0 0;

            a {
              color: #fff;

              &:active,
              &:hover,
              &.current {
                color: #fff;
                opacity: 0.7;
                border: 0;
              }
            }
          }
        }
      }

      &.active nav {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const Toggle = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  width: 30px;
  height: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.text};
  transition: background 0.3s ease;

  &::before {
    content: "";

    display: block;
    position: absolute;
    top: -5px;
    left: ${(props) => (props.isDark ? "-5px" : "20px")};

    transition: left 0.3s ease;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};

    @media (max-width: 769px) {
      background: #fff;
    }
  }
`;
