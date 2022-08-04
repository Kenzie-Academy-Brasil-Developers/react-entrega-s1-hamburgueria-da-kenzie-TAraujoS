import styled from "styled-components";

export const FormInput = styled.form`
  height: 75%;
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  input {
    height: 100%;
    width: 60%;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  button {
    height: 85%;
    width: 30%;

    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1rem;

    background: var(--green);
    border: 2px solid var(--green);
    border-radius: 8px;
    color: var(--white);
    cursor: pointer;

    &:hover {
      background-color: #93d7af;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 55%;
    max-width: 400px;
  }
`;
