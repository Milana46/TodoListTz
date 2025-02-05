import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 70px;
  margin-top: 50px;

  @media (max-width: 390px) {
    margin-left: 10px;
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
  margin-bottom: 5px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #9b9b9b;
  width: 282px;

  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;

  @media (max-width: 390px) {
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 5px;

  img {
    width: 28px;
    height: 29px;

    @media (max-width: 390px) {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
