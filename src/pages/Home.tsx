import React, { FC, useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import { Container } from '../styles/container';
import { TaskListTitle } from '../components/TaskList/styled';
import { TaskList } from '../components/TaskList';
import { TaskListWrapper } from '../components/TaskList/styled';
import { Button } from '../components/Button';
import { toast } from 'react-toastify';
import { ArrayListTask } from '../constants';

interface Task {
  name: string;
  isChecked: boolean;
}

const handleInputChange =
  (setInputValue: React.Dispatch<React.SetStateAction<string>>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

const handleAddOrEditTodo = (
  inputValue: string,
  setTodoList: React.Dispatch<React.SetStateAction<Task[]>>,
  editingTask: string | null,
  setEditingTask: React.Dispatch<React.SetStateAction<string | null>>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
) => {
  if (inputValue.trim() === '') return;

  if (inputValue.length > 20) {
    toast.warning('You can pass only 20 symbols', {
      autoClose: 2000,
      closeOnClick: true,
      position: 'top-right',
    });
    return;
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
};

const handleRemoveTask =
  (setTodoList: React.Dispatch<React.SetStateAction<Task[]>>) => (name: string) => {
    setTodoList((prevList) => prevList.filter((task) => task.name !== name));
  };

const handleToggleTask =
  (setTodoList: React.Dispatch<React.SetStateAction<Task[]>>) => (name: string) => {
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
    );
  };

const handleStartEditingTask =
  (
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    setEditingTask: React.Dispatch<React.SetStateAction<string | null>>
  ) =>
  (name: string) => {
    setInputValue(name);
    setEditingTask(name);
  };

const handleDeleteCheckedTask =
  (setTodoList: React.Dispatch<React.SetStateAction<Task[]>>) => () => {
    setTodoList((prevList) => prevList.filter((task) => !task.isChecked));
  };

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

  return (
    <>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputField inputValue={inputValue} onChange={handleInputChange(setInputValue)} />
          {inputValue.length > 50 && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              your message is too long, you can enter 50 symbols
            </span>
          )}
        </div>
        <Button
          content={editingTask ? 'Edit' : 'Add todo'}
          variant="add"
          onClick={() =>
            handleAddOrEditTodo(inputValue, setTodoList, editingTask, setEditingTask, setInputValue)
          }
        />
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        {todoList.map((task, index) => (
          <TaskList
            key={index}
            name={task.name}
            isChecked={task.isChecked}
            onRemove={handleRemoveTask(setTodoList)}
            onEdit={handleStartEditingTask(setInputValue, setEditingTask)}
            onToggle={handleToggleTask(setTodoList)}
          />
        ))}
      </TaskListWrapper>
      {todoList.length > 0 && (
        <Button
          content="Delete Selected"
          variant="delete"
          onClick={handleDeleteCheckedTask(setTodoList)}
        />
      )}
    </>
  );
};
