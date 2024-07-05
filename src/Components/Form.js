import React, { useState } from "react";

export default function Form({ newtask }) {
  const [task, settask] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      newtask(task);

      settask("");
    }
  };

  return (
    <>
      <h1 className="container">Task</h1>
      <div className="container my-3 d-flex ">
        <input
          type="text"
          className="form-control mx-2"
          placeholder="Enter Your task"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        ></input>
        <button className="btn btn-primary mx-2" onClick={handlesubmit}>
          Add Task
        </button>
      </div>
    </>
  );
}
