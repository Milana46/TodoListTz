import React, { FC } from "react";
import {InputField} from "../components/InputField";
import {Container} from "../styles/container";
import { TaskListTitle } from "../components/TaskList/style";
import {TaskList} from "../components/TaskList";
import {TaskListWrapper} from "../components/TaskList/style";
import { Button } from "../components/Button";

export const Home:FC = () => {
//все функции!!!!!
  return (
    <>
      <Container>
        <InputField />
        <Button content="Add todo" variant="add"/>
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
      <TaskList />
      <TaskList />
      </TaskListWrapper>
      <Button content="Deleted Selected" variant="delete"/>
      
    </>
  );
};

