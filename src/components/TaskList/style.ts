import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 500px;
  width: 100%; 
  margin: 0 auto;

  @media (max-width: 450px) {
    padding: 5px;
    max-width: 100%;
  }
`;

export const TaskListTitle = styled.text`
  margin-left: 518px;
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 52.02px;

  @media (max-width: 450px) {
    margin-left: 0;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
  max-height: 400px; 
  overflow-y: auto; 

  @media (max-width: 450px) {
    max-width: 100%;
    padding: 5px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TaskText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  font-size: 18px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#b5b5b5" : "#333")};
  margin-left: 10px;

  @media (max-width: 450px) {
    font-size: 16px;
    margin-left: 0;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #3e50b5;

  @media (max-width: 450px) {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 450px) {
    gap: 5px;
  }
`;

export const ButtonIcon = styled.div<{ isDelete?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3e50b5;
  }

  svg {
    color: ${(props) => (props.isDelete ? "red" : "#333")};
    font-size: 20px;

    @media (max-width: 450px) {
      font-size: 16px;
    }
  }

  @media (max-width: 450px) {
    width: 35px;
    height: 35px;
  }
`;
