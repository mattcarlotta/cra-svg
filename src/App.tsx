import React from "react";
import MiniMe from "./components/MiniMe";

function App() {
  return (
    <div className="app">
      <MiniMe name="available" width="50" classes="blue" />
      <MiniMe name="at-desk" width="50" classes="red" />
      <MiniMe name="skills" width="50" />
      <MiniMe name="phone" width="50" />
      <MiniMe name="beach" width="50" />
      <MiniMe width="50" />
    </div>
  );
}

export default App;
