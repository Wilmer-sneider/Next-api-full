"use client";

import { useEffect, useState } from "react";
import { fetchGetTask } from "../helpers/apis";

export default function ObtenerTask() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function getTask() {
      const data = await fetchGetTask();
      setTask(data);
    }

    getTask();
  }, []);

  return (
    <div>
      {task.map((item) => (
        <li>{JSON.stringify(item)}</li>
      ))}
    </div>
  );
}
