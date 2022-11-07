import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";

const questionsList = data.map((item) => <Card {...item} />);

function App() {
  return (
    <div className="app">
      <h1 className="app--title">Questions and Answers About Login</h1>
      <div className="app--ques--list">{questionsList}</div>
    </div>
  );
}

export default App;
