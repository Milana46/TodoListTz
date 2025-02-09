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

  const [editingTask, setEditingTask] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function addOrEditTodo() {
    if (inputValue.trim() === '') {
      throw new Error('Empty field, please, enter your task!');
    }

    if (editingTask) {
      setTodoList((prevList) =>
        prevList.map((task) => (task.name === editingTask ? { ...task, name: inputValue } : task))
      );
      setEditingTask(null);
    } else {
      setTodoList((prevList) => [...prevList, { name: inputValue, isChecked: false }]);
    }

    setInputValue('');
  }

  function removeTask(removeIndex: number) {
    setTodoList((prevList) => prevList.filter((_, index) => index !== removeIndex));
  }

  function toggleTask(name: string) {
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
    );
  }

  function deleteCheckedTask() {
    setTodoList((prevList) => prevList.filter((task) => !task.isChecked));
  }

  function startEditingTask(name: string) {
    setInputValue(name);
    setEditingTask(name);
  }

  return (
    <>
      <Container>
        <InputField inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button content={editingTask ? 'Edit' : 'Add todo'} variant="add" onClick={addOrEditTodo} />
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        {todoList.map((data, index) => (
          <TaskList
            key={index}
            name={data.name}
            isChecked={data.isChecked}
            onRemove={() => removeTask(index)}
            onChange={startEditingTask}
            onToggle={() => toggleTask(data.name)}
          />
        ))}
      </TaskListWrapper>
      {todoList.length > 0 && (
        <Button content="Delete Selected" variant="delete" onClick={deleteCheckedTask} />
      )}
    </>
  );
};
