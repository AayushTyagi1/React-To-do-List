import React, { useState } from "react";
import "./Additem.css";

export default function Additem({ tasks, settasks }) {
  const [inputTask, setInputTask] = useState("");

  const [ErrorStyle, setErrorStyle] = useState({
    display: "none",
  });

  const changeHandler = (e) => {
    setInputTask(e.target.value);
    if (e.target.value) {
      setErrorStyle({
        display: "none",
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    settasks([
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        text: inputTask,
        isComplete: false,
      },
    ]);
    if (!inputTask) {
      setErrorStyle({
        display: "inline-block",
      });
    }
    setInputTask("");
  };
  return (
    <form className="Additem" onSubmit={submitHandler}>
      <div className="input_text">
        <input
          type="text"
          name="task"
          placeholder="Write your Task.."
          value={inputTask}
          onChange={changeHandler}
        />
        <p style={ErrorStyle}>Add something in task</p>
      </div>
      <button type="submit" name="submit">
        Add Task
      </button>
    </form>
  );
}
