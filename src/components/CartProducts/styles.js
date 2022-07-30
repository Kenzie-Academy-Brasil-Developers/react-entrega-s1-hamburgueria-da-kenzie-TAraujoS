import styled from "styled-components";

export const LiCart = styled.li`
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 80px;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  > img {
    background-color: var(--graydark);
    border-radius: 5px;
    height: 80px;
    width: 80px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    height: 100%;
    width: 65%;
    margin-left: 5px;
  }

  > div p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--darktext);
  }
  > div span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--graytext);
  }
  .trash {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
`;
