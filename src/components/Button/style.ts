import styled from "styled-components";

export const StyledDeleteButton = styled.button`
  background-color: #ff4081;
  color: white;
  width: 238px;
  height: 67px;
  margin-left: 200px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 34.68px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 450px) {
    width: 90%;
    justify-content:center;
    margin-left: 0;
    font-size: 18px;
    height: auto;
    padding: 10px;
  }
`;

export const StyledAddButton = styled.button`
  background-color: #3e50b5;
  color: white;
  width: 199px;
  height: 67px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 34.68px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 450px) {
    width: 100%;
    margin-left: 0;
    font-size: 18px;
    height: auto;
    padding: 10px;
  }
`;
