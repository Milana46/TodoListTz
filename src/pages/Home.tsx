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
  }

  function removeTask(name: string) {
    setTodoList((prevList) => prevList.filter((task) => task.name !== name));
  }

  function toggleTask(name: string) {
    setTodoList((prevList) =>
      prevList.map((task) => (task.name === name ? { ...task, isChecked: !task.isChecked } : task))
    );
  }

  function startEditingTask(name: string) {
    setInputValue(name);
    setEditingTask(name);
  }

  function deleteCheckedTask() {
    setTodoList((prevList) => prevList.filter((task) => !task.isChecked));
  }

  return (
    <>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputField inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          {inputValue.length > 20 && (
            <span style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              Сообщение слишком длинное
            </span>
          )}
        </div>
        <Button content={editingTask ? 'Edit' : 'Add todo'} variant="add" onClick={addOrEditTodo} />
      </Container>
      <TaskListTitle>Task list</TaskListTitle>
      <TaskListWrapper>
        {todoList.map((task, index) => (
          <TaskList
            key={index}
            name={task.name}
            isChecked={task.isChecked}
            onRemove={removeTask}
            onEdit={startEditingTask}
            onToggle={toggleTask}
          />
        ))}
      </TaskListWrapper>
      {todoList.length > 0 && (
        <Button content="Delete Selected" variant="delete" onClick={deleteCheckedTask} />
      )}
    </>
  );
};
