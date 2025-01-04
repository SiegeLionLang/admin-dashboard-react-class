import React from "react";
import "./App.less";
import { Button } from "antd";

function App() {
  const handleClick = () => {
    console.log("enter");
  };
  return (
    <div className="App">
      <Button type="primary" onClick={handleClick}>
        Button
      </Button>
      <header className="App-header">为浪</header>
    </div>
  );
}

export default App;
