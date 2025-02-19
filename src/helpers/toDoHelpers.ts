import { Dispatch, SetStateAction } from 'react';

import { Task } from './../types/types';

export const updateTodoList = (
  inputValue: string,
  editingTask: string | null,
  todoList: Task[],
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
