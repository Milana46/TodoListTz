import React, { FC } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TaskListContainer, TaskItem, TaskText, TaskActions, Checkbox, ButtonContainer, ButtonIcon } from "./style";

export const TaskList:FC=()=>{
  return (
    <TaskListContainer>
      <TaskItem>
        <TaskActions>
          <Checkbox type="checkbox" />
          <TaskText completed={false}>hello</TaskText> 
        </TaskActions>
        <ButtonContainer>
          <ButtonIcon>
            <FaEdit />
          </ButtonIcon>
          <ButtonIcon>
            <FaTrash />
          </ButtonIcon>
        </ButtonContainer>
      </TaskItem>
    </TaskListContainer>
  );
}

