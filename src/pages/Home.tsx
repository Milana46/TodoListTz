import React, { FC } from 'react';

import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { TaskList } from '../components/TaskList';
import { TaskListTitle } from '../components/TaskList/styled';
import { TaskListWrapper } from '../components/TaskList/styled';
import { Container } from '../styles/container';

export const Home: FC = () => {
  //все функции!!!!!
  return (
    <>
      <Container>
        <InputField />
        <Button content="Add todo" variant="add" />
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        <TaskList />
        <TaskList />
      </TaskListWrapper>
      <Button content="Deleted Selected" variant="delete" />
    </>
  );
};
