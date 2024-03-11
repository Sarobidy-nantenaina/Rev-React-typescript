import React from "react";
import useTaskManager from "./useTaskManager";
import "./TaskManager.css";

export const TaskManagerts: React.FC = () => {
  const {
    title,
    setTitle,
    searchKeyword,
    handleSearch,
    tasks,
    addTask,
    completeTask,
    updateTask,
  } = useTaskManager();

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Task"
        />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={() => addTask(title)}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, e.target.value)}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
