import React, { useState } from "react";
import { Task } from "../Task";
import V4Form from "./V4Form";
import V4List from "./V4List";

const V4Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>タスクリスト (v4)</h1>
      <V4Form tasks={tasks} setTasks={setTasks} />
      <V4List tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default V4Home;
