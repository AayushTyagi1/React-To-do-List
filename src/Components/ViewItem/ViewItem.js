import React from "react";
import "./ViewItem.css";

export default function ViewItem({ tasks, settasks }) {
  const deleteItem = (id) => {
    const filteredtasks = tasks.filter((item) => item.id !== id);
    settasks(filteredtasks);
  };
  const handleCompleteItem = (id) => {
    const newtasks = tasks.map((item) =>
      item.id === id
        ? {
            id: item.id,
            text: item.text,
            isComplete: !item.isComplete,
          }
        : item
    );
    settasks(newtasks);
  };
  return (
    <div
      className="view_item"
      style={{ display: tasks.length ? "block" : "none" }}
    >
      {tasks.map((items) => (
        <form key={items.id} style={{ opacity: items.isComplete && "0.5" }}>
          <input type="checkbox" onClick={() => handleCompleteItem(items.id)} />
          <p style={{ textDecoration: items.isComplete && "line-through" }}>
            {items.text}
          </p>
          <button type="button" onClick={() => deleteItem(items.id)}>
            Delete
          </button>
        </form>
      ))}
    </div>
  );
}
