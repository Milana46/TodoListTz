import React, { FC } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import * as S from './styled';

interface TaskListProps {
  name: string;
  onRemove: (name: string) => void;
  onEdit: (name: string) => void;
  onToggle: (name: string) => void;
  isChecked: boolean;
}

export const TaskList: FC<TaskListProps> = ({ name, onRemove, onEdit, onToggle, isChecked }) => {
  return (
    <S.TaskListContainer>
      <S.TaskItem>
        <S.TaskActions>
          <input type="checkbox" checked={isChecked} onChange={() => onToggle(name)} />
          <S.TaskText completed={false}>{name}</S.TaskText>
        </S.TaskActions>
        <S.ButtonContainer>
          <S.ButtonIcon onClick={() => onEdit(name)}>
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
