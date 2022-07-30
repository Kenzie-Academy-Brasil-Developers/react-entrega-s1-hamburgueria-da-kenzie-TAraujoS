import styled from "styled-components";

export const Section = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 12px;
  }

  @media screen and (max-width: 900px) {
  }
`;
