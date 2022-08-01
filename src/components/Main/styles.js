import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  padding: 0 4%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
    justify-content: flex-start;
  }
`;
