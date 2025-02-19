import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { TaskList } from '@/components/TaskList';
import { TaskListTitle } from '@/components/TaskList/styled';
import { TaskListWrapper } from '@/components/TaskList/styled';
import { Toast } from '@/components/Toast';
import { getInitialTodoList } from '@/helpers/homeHelpers';
import { Container } from '@/styles/container';
import { Task } from '@/types/types';

import { ErrorMessage, InputContainer } from './styled';

const ArrayListTask: string[] = ['first', 'second'];

export const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoList, setTodoList] = useState<Task[]>(() => getInitialTodoList(ArrayListTask));
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [hasExceededLimit, setHasExceededLimit] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning';
  } | null>(null);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    setHasExceededLimit(inputValue.length > 40);
  }, [inputValue]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const updateTodoList = (
    inputValue: string,
    editingTask: string | null,
    _todoList: Task[],
    setTodoList: Dispatch<SetStateAction<Task[]>>,
    setEditingTask: Dispatch<SetStateAction<string | null>>,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    setTodoList((prevList) =>
      editingTask
        ? prevList.map((task) => (task.name === editingTask ? { ...task, name: inputValue } : task))
        : [...prevList, { name: inputValue, isChecked: false }]
    );

    setEditingTask(null);
    setInputValue('');
  };

  const handleAddOrEditTodo = () => {
    if (inputValue.trim() === '') return;

    if (hasExceededLimit) {
      setToast({ message: 'You cannot add a task with more than 40 symbols', type: 'warning' });
      return;
    }

    updateTodoList(inputValue, editingTask, todoList, setTodoList, setEditingTask, setInputValue);
  };

  const handleRemoveTask = (name: string) =>
    setTodoList((prevList) => prevList.filter((task) => task.name !== name));

  const handleToggleTask = (name: string) =>
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
    );

  const handleStartEditingTask = (name: string) => {
    setInputValue(name);
    setEditingTask(name);
  };

  const handleDeleteCheckedTask = () =>
    setTodoList((prevList) => prevList.filter(({ isChecked }) => !isChecked));

  return (
    <>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={setToast.bind(null, null)} />
      )}
      <Container>
        <InputContainer>
          <InputField inputValue={inputValue} onChange={handleInputChange} />
          {hasExceededLimit && (
            <ErrorMessage>Your message is too long, you can enter up to 40 symbols</ErrorMessage>
          )}
        </InputContainer>
        <Button
          content={editingTask ? 'Edit' : 'Add todo'}
          variant="add"
          onClick={handleAddOrEditTodo}
        />
      </Container>

      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        {todoList.map(({ name, isChecked }) => (
          <TaskList
            key={name}
            name={name}
            isChecked={isChecked}
            onRemove={handleRemoveTask}
            onEdit={handleStartEditingTask}
            onToggle={handleToggleTask}
          />
        ))}
      </TaskListWrapper>

      {todoList.length > 0 && (
        <Button content="Delete Selected" variant="delete" onClick={handleDeleteCheckedTask} />
      )}
    </>
  );
};
