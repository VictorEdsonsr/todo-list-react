import styled from "styled-components";

type ListProps = {
  check: boolean;
};

export const Container = styled.div`
  margin: 20px;
`;

export const List = styled.li`
  font-size: 20px;
  background: #2c2c2c;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: ${({ check }: ListProps) =>
    check ? "line-through" : "initial"};
  justify-content: space-between;

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
