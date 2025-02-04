import React, { FC } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TaskListContainer, TaskItem, TaskText, TaskActions, Checkbox, ButtonContainer, ButtonIcon } from "./style";


interface TaskListProps{
  name:string,
  onRemove:()=>void,
}

export const TaskList:FC<TaskListProps>=({name, onRemove})=>{
  return (
    <TaskListContainer>
      <TaskItem>
        <TaskActions>
          <Checkbox type="checkbox" />
          <TaskText completed={false}>{name? name:"none"}</TaskText>
        </TaskActions>
        <ButtonContainer>
          <ButtonIcon>
            <FaEdit />
          </ButtonIcon>
          <ButtonIcon>
            <FaTrash onClick={onRemove}/>
          </ButtonIcon>
        </ButtonContainer>
      </TaskItem>
    </TaskListContainer>
  );
}

