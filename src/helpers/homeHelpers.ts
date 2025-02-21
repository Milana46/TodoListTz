export const getInitialTodoList = (ArrayListTask: string[]) => {
  const savedTasks = localStorage.getItem('todoList');
  return savedTasks
    ? JSON.parse(savedTasks)
    : ArrayListTask.map((task) => ({ name: task, isChecked: false }));
};
