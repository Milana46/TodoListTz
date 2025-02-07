import React, { FC, useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import { Container } from '../styles/container';
import { TaskListTitle } from '../components/TaskList/style';
import { TaskList } from '../components/TaskList';
import { TaskListWrapper } from '../components/TaskList/style';
import { Button } from '../components/Button';
import { ArrayListTask } from '../constants';

interface Task {
  name: string;
  isChecked: boolean;
}

export const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('todoList');
    return savedTasks
      ? JSON.parse(savedTasks)
      : ArrayListTask.map((task) => ({ name: task, isChecked: false }));
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function addTodo() {
    if (inputValue.trim() !== '') {
      setTodoList((prevList) => [...prevList, { name: inputValue, isChecked: false }]);
      setInputValue('');
    }
  }

  function removeTask(removeIndex: number) {
    setTodoList((prevList) => prevList.filter((_, index) => index !== removeIndex));
  }

  function changeTask(oldName: string, newName: string) {
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === oldName ? { ...task, name: newName } : task))
    );
  }

  function toggleTask(name: string) {
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
    );
  }

  function deleteCheckedTask() {
    setTodoList((prevList) => prevList.filter((task) => !task.isChecked));
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
            name={data.name}
            isChecked={data.isChecked}
            onRemove={() => removeTask(index)}
            onChange={changeTask}
            onToggle={() => toggleTask(data.name)}
          />
        ))}
      </TaskListWrapper>
      <Button content="Delete Selected" variant="delete" onClick={deleteCheckedTask} />
    </>
  );
};
