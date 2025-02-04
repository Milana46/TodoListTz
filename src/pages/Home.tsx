import React, { FC, useState } from "react";
import { InputField } from "../components/InputField";
import { Container } from "../styles/container";
import { TaskListTitle } from "../components/TaskList/style";
import { TaskList } from "../components/TaskList";
import { TaskListWrapper } from "../components/TaskList/style";
import { Button } from "../components/Button";
import { ArrayListTask } from "../constants";

export const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Состояние поля ввода
  const [todoList, setTodoList] = useState<string[]>(ArrayListTask); // Состояние списка

  function addTodo() {
    if (inputValue.trim() !== "") {
      setTodoList(prevList => [...prevList, inputValue]);
      setInputValue("");
    }
  }

  function removeTask(removeIndex: number) {
    setTodoList(prevList => prevList.filter((_, index) => index !== removeIndex));
  }

  function changeTask(oldName: string, newName: string) {
    setTodoList(prevList =>
      prevList.map(task => (task === oldName ? newName : task))
    );
  }

  return (
    <>
      <Container>
        <InputField inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button content="Add todo" variant="add" onClick={addTodo} />
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        {todoList.map((data, index) => (
          <TaskList
            key={index}
            name={data}
            onRemove={() => removeTask(index)}
            onChange={changeTask}
          />
        ))}
      </TaskListWrapper>
      <Button content="Deleted Selected" variant="delete" />
    </>
  );
};
