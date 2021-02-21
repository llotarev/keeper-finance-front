import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UIKit } from "./components/UIKit";

const { Button, Input } = UIKit;

export function App() {
  return (
    <Router>
      <div className="app">
        <Input defaultValue="sds" />
        <Button>Button</Button>
      </div>
    </Router>
  );
}
