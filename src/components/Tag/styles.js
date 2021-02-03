import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin: 0.5rem -3px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  margin: 6px 3px;
  height: 20px;

  span {
    padding: 3px 18px;
    border-radius: 20px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};

    &:hover {
      background: ${(props) => props.theme.primary};
      color: #fff;
    }
  }
`;
