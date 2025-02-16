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

const handleToggle = (onToggle: (name: string) => void, name: string) => () => onToggle(name);
const handleEdit = (onEdit: (name: string) => void, name: string) => () => onEdit(name);
const handleRemove = (onRemove: (name: string) => void, name: string) => () => onRemove(name);

export const TaskList: FC<TaskListProps> = ({ name, onRemove, onEdit, onToggle, isChecked }) => {
  return (
    <S.TaskListContainer>
      <S.TaskItem>
        <S.TaskActions>
          <input type="checkbox" checked={isChecked} onChange={handleToggle(onToggle, name)} />
          <S.TaskText completed={false}>{name}</S.TaskText>
        </S.TaskActions>
        <S.ButtonContainer>
          <S.ButtonIcon onClick={handleEdit(onEdit, name)}>
            <FaEdit />
          </S.ButtonIcon>
          <S.ButtonIcon onClick={handleRemove(onRemove, name)}>
            <FaTrash />
          </S.ButtonIcon>
        </S.ButtonContainer>
      </S.TaskItem>
    </S.TaskListContainer>
  );
};
