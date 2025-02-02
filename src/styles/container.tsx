import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-left: 177px; 
  margin-top: 60px;

  @media (max-width: 450px) {
    margin-left: 10px;
    flex-direction: column;
    padding: 10px;
  }
`;
