import React, { Component, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Additem from "./Components/Additem/Additem";
import ViewItem from "./Components/ViewItem/ViewItem";

function App() {
  const [tasks, settasks] = useState([]);
  return (
    <div>
      <Navbar />
      <Additem tasks={tasks} settasks={settasks} />
      <ViewItem tasks={tasks} settasks={settasks} />
    </div>
  );
}
export default App;
