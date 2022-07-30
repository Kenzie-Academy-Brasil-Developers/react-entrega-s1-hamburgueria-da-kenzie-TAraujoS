import styled from "styled-components";

export const TotalDiv = styled.div`
  width: 100%;
  display: flex;
  border-radius: 0 0 8px 8px;
  border-top: 2px solid var(--graydark);
  background-color: var(--gray);

  height: 50%;
  flex-wrap: wrap;
  padding-top: 10px;

  h4 {
    width: 30%;
    height: 25%;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--darktext);
  }

  p {
    margin-left: 7rem;
    height: 25%;
    width: 25%;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--graytext);
  }

  button {
    color: var(--graytext);
    background-color: var(--graydark);
    margin: 3%;
    height: 40%;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 19px;
    border-radius: 8px;
  }
`;
