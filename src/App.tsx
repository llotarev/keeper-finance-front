import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UICore } from "./UICore";

const { Button, Input } = UICore;

export function App() {
  return (
    <Router>
      <div className="app">
        <Input />
        <Button>Button</Button>
      </div>
    </Router>
  );
}
