import React, { FC } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import * as S from './styled';

export const TaskList: FC = () => {
  return (
    <S.TaskListContainer>
      <S.TaskItem>
        <S.TaskActions>
          <S.Checkbox type="checkbox" />
          <S.TaskText completed={false}>hello</S.TaskText>
        </S.TaskActions>
        <S.ButtonContainer>
          <S.ButtonIcon>
            <FaEdit />
          </S.ButtonIcon>
          <S.ButtonIcon>
            <FaTrash />
          </S.ButtonIcon>
        </S.ButtonContainer>
      </S.TaskItem>
    </S.TaskListContainer>
  );
};
