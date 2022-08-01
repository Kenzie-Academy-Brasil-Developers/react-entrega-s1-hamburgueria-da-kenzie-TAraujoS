import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 6rem;
  background-color: var(--gray);

  img {
    width: 150px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-around;
    height: 7rem;
    padding: 0.5rem 4rem;
  }
`;
