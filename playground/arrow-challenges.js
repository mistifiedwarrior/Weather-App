const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'clean yard',
      completed: false,
    },
    {
      text: 'file course',
      completed: false,
    },
  ],
  getTaskTodo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTaskTodo());
