import { useState } from "react";
import { nanoid } from "nanoid";

interface Task {
  id: string;
  title: string;
}

const useTaskManager = () => {
  const [title, setTitle] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTitle: string) => {
    if (newTitle.length < 1) {
      return;
    }

    const newTask: Task = {
      id: nanoid(),
      title: newTitle,
    };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
  };

  const completeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, updatedTitle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return {
    title,
    setTitle,
    searchKeyword,
    handleSearch,
    tasks: filteredTasks,
    addTask,
    completeTask,
    updateTask,
  };
};

export default useTaskManager;
