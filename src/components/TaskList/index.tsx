import React, { FC } from 'react';
import edit from '@/assets/images/edits.png';
import trash from '@/assets/images/trash.png';
import * as Image from '@/components/image';

import * as S from './styled';

interface TaskListProps {
  name: string;
  onRemove: (name: string) => void;
  onEdit: (name: string) => void;
  onToggle: (name: string) => void;
  isChecked: boolean;
}

export const TaskList: FC<TaskListProps> = ({ name, onRemove, onEdit, onToggle, isChecked }) => {
  const toggleTask = () => onToggle(name);
  const editTask = () => onEdit(name);
  const removeTask = () => onRemove(name);

  return (
    <S.TaskListContainer>
      <S.TaskItem>
        <S.TaskActions>
          <input type="checkbox" checked={isChecked} onChange={toggleTask} />
          <S.TaskText completed={false}>{name}</S.TaskText>
        </S.TaskActions>
        <S.ButtonContainer>
          <S.ButtonIcon onClick={editTask}>
            <Image.Icon path={edit} />
          </S.ButtonIcon>
          <S.ButtonIcon onClick={removeTask}>
            <Image.Icon path={trash} />
          </S.ButtonIcon>
        </S.ButtonContainer>
      </S.TaskItem>
    </S.TaskListContainer>
  );
};
