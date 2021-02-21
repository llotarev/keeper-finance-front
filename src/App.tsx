import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UIKit } from "./components/UIKit";
import { MdClose } from "react-icons/all";

const { Button, Input } = UIKit;

export function App() {
  return (
    <Router>
      <div className="app">
        <Input id="12" type="checkbox" />
        <label htmlFor="12">label</label>
        <Input color="secondary" type="radio" />
        <Input color="secondary" type="text" />
        <Button color="secondary">
          {/*Купить*/}
          <MdClose />
        </Button>
      </div>
    </Router>
  );
}
