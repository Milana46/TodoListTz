import React, { FC, useState } from "react";
import {InputField} from "../components/InputField";
import {Container} from "../styles/container";
import { TaskListTitle } from "../components/TaskList/style";
import {TaskList} from "../components/TaskList";
import {TaskListWrapper} from "../components/TaskList/style";
import { Button } from "../components/Button";
import { ArrayListTask } from "../constants";

export const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); //состояния поля ввода
  const [todoList, setTodoList] = useState<string[]>(ArrayListTask);  //состояния списка

  function addTodo() {
    if (inputValue !== "") {
      setTodoList(prevList => [...prevList, inputValue]);
      setInputValue("");
    }
  }

  function removeTask(removeIndex:number){
    setTodoList(prevList=>prevList.filter((_,index)=>index!==removeIndex));
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
          <TaskList key={index} name={data} onRemove={()=>removeTask(index)}/>
        ))}
      </TaskListWrapper>
      <Button content="Deleted Selected" variant="delete" />
    </>
  );
};
