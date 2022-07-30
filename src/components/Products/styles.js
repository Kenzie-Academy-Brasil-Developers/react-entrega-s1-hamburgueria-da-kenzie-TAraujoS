import styled from "styled-components";

export const ListProducts = styled.li`
  height: 340px;
  width: 250px;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  border: 2px solid #e0e0e0;

  figure {
    background-color: var(--gray);
    width: 100%;
    height: 50%;
  }

  figure img {
    width: 75%;
    height: 100%;
    max-width: 150px;
  }

  div {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4% 8%;
  }

  div h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  div p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    color: var(--graytext);
  }

  div span {
    color: var(--green);
    font-style: normal;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  div button {
    width: 45%;
    height: 25%;
    transition: 0.4s;
    background: var(--green);
    border: 2px solid var(--green);
    border-radius: 8px;
    color: var(--white);
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1rem;
    cursor: pointer;
  }

  div button:hover {
    transition: 0.4s;
    color: #93d7af;
  }
`;
