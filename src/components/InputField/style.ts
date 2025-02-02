import styled from "styled-components";

export const StyledInput = styled.input`
  width: 557px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  border-bottom: 2px solid #3e50b5;
  outline: none;
  margin-right: 20px;
  padding: 5px 0;

  &:focus {
    border-bottom: 2px solid #1e3aa8;
  }

  @media (max-width: 450px) {
    width: 100%;
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  color: #3e5085;
  margin-bottom: 8px;
  display: block;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
