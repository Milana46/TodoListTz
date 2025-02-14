import React, { FC, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import * as S from './styled';

interface TaskListProps {
  name: string;
  onRemove: (name: string) => void;
  onChange: (oldName: string, newName: string) => void;
  onToggle: (name: string) => void;
  isChecked: boolean;
}

export const TaskList: FC<TaskListProps> = ({ name, onRemove, onChange, onToggle, isChecked }) => {
  const [isEdit, setEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  function saveName() {
    if (newName.trim() !== '' && newName !== name) {
      onChange(name, newName);
    }
    setEdit(false);
  }

  return (
    <S.TaskListContainer>
      <S.TaskItem>
        <S.TaskActions>
          <input type="checkbox" checked={isChecked} onChange={() => onToggle(name)} />
          {isEdit ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={saveName}
              autoFocus
            />
          ) : (
            <S.TaskText completed={false}>{name}</S.TaskText>
          )}
        </S.TaskActions>
        <S.ButtonContainer>
          <S.ButtonIcon onClick={() => setEdit(true)}>
            <FaEdit />
          </S.ButtonIcon>
          <S.ButtonIcon onClick={() => onRemove(name)}>
            <FaTrash />
          </S.ButtonIcon>
        </S.ButtonContainer>
      </S.TaskItem>
    </S.TaskListContainer>
  );
};
