import styled from "styled-components";

export const Aside = styled.aside`
  height: 275px;
  margin-top: 10px;
  width: 300px;

  > h3 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding-left: 21px;
    background-color: var(--green);
    color: var(--gray);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .cartContainer {
    height: 70%;
    background-color: var(--gray);
    border-radius: 0px 0px 5px 5px;
  }

  .cartContainer ul {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  .cleanCart {
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: auto;
  }

  .cleanCart h2 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--darktext);
  }

  .cleanCart p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--graytext);
  }

  .cartList {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 8px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    height: 360px;
    width: 55%;
    min-width: 300px;
  }
`;
