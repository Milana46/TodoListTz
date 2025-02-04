import React, { FC, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TaskListContainer, TaskItem, TaskActions, TaskText, ButtonContainer, ButtonIcon } from "./style";

interface TaskListProps {
  name: string;
  onRemove: (name: string) => void;
  onChange: (oldName: string, newName: string) => void;
}

export const TaskList: FC<TaskListProps> = ({ name, onRemove, onChange }) => {
  const [isEdit, setEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  function saveName() {
    if (newName.trim() !== "" && newName !== name) {
      onChange(name, newName);
    }
    setEdit(false);
  }

  return (
    <TaskListContainer>
      <TaskItem>
        <TaskActions>
          <input type="checkbox" />
          {isEdit ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={saveName}
              autoFocus
            />
          ) : (
            <TaskText completed={false}>{name}</TaskText>
          )}
        </TaskActions>
        <ButtonContainer>
          <ButtonIcon onClick={() => setEdit(true)}>
            <FaEdit />
          </ButtonIcon>
          <ButtonIcon onClick={() => onRemove(name)}>
            <FaTrash />
          </ButtonIcon>
        </ButtonContainer>
      </TaskItem>
    </TaskListContainer>
  );
};
