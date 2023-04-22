import React, { Dispatch, SetStateAction } from "react";
import { Task } from "../Task";
import axios from "axios";

// const API_URL = "http://localhost:8000/api/v1/tasks/";
const API_URL = "/api/v1/tasks/";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

const V4List = ({ tasks, setTasks }: Props) => {
  const removeTask = async (taskId: number) => {
    try {
      await axios.delete(`${API_URL}${taskId}/`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      alert("エラーでした");
    }
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content}
            <button
              type="button"
              form="v4form"
              onClick={() => removeTask(task.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default V4List;
