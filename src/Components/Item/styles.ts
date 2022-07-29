import styled from "styled-components";

type ListProps = {
  check: boolean;
};

export const Container = styled.div`
  margin: 20px;
`;

export const List = styled.li`
  font-size: 20px;
  text-decoration: ${({ check }: ListProps) =>
    check ? "line-through" : "initial"};

  span {
    align-items: center;
    display: flex;
  }
  input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
