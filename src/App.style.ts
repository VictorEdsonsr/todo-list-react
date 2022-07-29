import styled from "styled-components";

export const Container = styled.div`
  background: #222;
  margin: 100px auto;
  max-width: 320px;
  border-radius: 6px;
  -webkit-box-shadow: 2px 13px 26px 7px rgba(0, 0, 0, 0.68);
  box-shadow: 2px 13px 26px 7px rgba(0, 0, 0, 0.68);

  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    padding: 20px;
  }
`;

export const List = styled.ul`
  padding: 20px;
  list-style: none;

  div {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2c2c2c;
    margin: 15px;
    flex: 1;

    button {
      padding-right: 10px;
    }
  }
`;
