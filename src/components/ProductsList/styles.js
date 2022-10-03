import styled from "styled-components";

export const Section = styled.section`
  width: 55%;
  display: flex;
  justify-content: center;
  //align-items: center;

  ul {
    display: flex;
    width: 100%;
    height: 70%;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 12px;
  }

  @media (max-width: 1000px) {
    width: 100%;

    ul {
      overflow-x: auto;
      height: 100%;
      width: 90%;
      flex-wrap: nowrap;
    }
  }
`;
