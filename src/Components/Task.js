import React, { useState } from "react";
import Form from "./Form";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const updatetasklist = (task) => {
    setTasks([...tasks, { id: Date.now(), Content: task, completed: false }]);
  };
  const ontoggle = (id) => {
    setTasks(
      tasks.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const taskdelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <>
      <div className="container my-3">
        <Form newtask={updatetasklist}></Form>
        {tasks.length == 0 ? (
          <h2>(No Tasks )</h2>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className="container d-flex border my-2 justify-content-between"
              >
                <div
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.Content}
                  {task.completed}
                </div>

                <div className="d-flex flex-row align-items-center">
                  <button
                    className="btn btn-primary mx-2 my-2 btn-sm"
                    style={{ width: "80px", height: "30px" }}
                    onClick={() => ontoggle(task.id)}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    className="btn btn-danger  mx-2 my-2 btn-sm"
                    style={{ width: "80px", height: "30px" }}
                    onClick={() => taskdelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
