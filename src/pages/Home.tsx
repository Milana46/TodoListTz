import React, { FC, useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { InputField } from '../components/InputField';
import { Container } from '../styles/container';
import { TaskListTitle } from '../components/TaskList/styled';
import { TaskList } from '../components/TaskList';
import { TaskListWrapper } from '../components/TaskList/styled';
import { Button } from '../components/Button';
import { toast } from 'react-toastify';

interface Task {
  name: string;
  isChecked: boolean;
}

const ArrayListTask: string[] = ['first', 'second'];

const handleInputChange =
  (setInputValue: Dispatch<React.SetStateAction<string>>) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

const handleAddOrEditTodo = (
  inputValue: string,
  setTodoList: Dispatch<SetStateAction<Task[]>>,
  editingTask: string | null,
  hasExceededLimit: boolean,
  setEditingTask: Dispatch<SetStateAction<string | null>>,
  setInputValue: Dispatch<SetStateAction<string>>
) => {
  if (inputValue.trim() === '') return;

  if (hasExceededLimit) {
    toast.warning('You cannot add a task with more than 40 symbols', {
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

const handleRemoveTask = (setTodoList: Dispatch<SetStateAction<Task[]>>) => (name: string) => {
  setTodoList((prevList) => prevList.filter((task) => task.name !== name));
};

const handleToggleTask = (setTodoList: Dispatch<SetStateAction<Task[]>>) => (name: string) => {
  setTodoList((prevList) =>
    prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
  );
};

const handleStartEditingTask =
  (
    setInputValue: Dispatch<SetStateAction<string>>,
    setEditingTask: Dispatch<SetStateAction<string | null>>
  ) =>
  (name: string) => {
    setInputValue(name);
    setEditingTask(name);
  };

const handleDeleteCheckedTask = (setTodoList: Dispatch<SetStateAction<Task[]>>) => () => {
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
  const [hasExceededLimit, setHasExceededLimit] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    setHasExceededLimit(inputValue.length > 40);
  }, [inputValue]);

  return (
    <>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputField inputValue={inputValue} onChange={handleInputChange(setInputValue)} />
          {hasExceededLimit && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              Your message is too long, you can enter up to 40 symbols
            </span>
          )}
        </div>
        <Button
          content={editingTask ? 'Edit' : 'Add todo'}
          variant="add"
          onClick={() =>
            handleAddOrEditTodo(
              inputValue,
              setTodoList,
              editingTask,
              hasExceededLimit,
              setEditingTask,
              setInputValue
            )
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
