import styled from 'styled-components';

export const ThemeContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 390px) {
    margin-left: 10px;
    margin-top: 20px;
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 40px;
  background-color: #fffafa;
  border: 1px solid #a1a1a1;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;

  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  width: 122px;
  color: #646464;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;

  @media (max-width: 390px) {
    width: auto;
    font-size: 16px;
  }
`;

export const Option = styled.option`
  width: 172px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
