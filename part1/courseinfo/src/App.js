import "./App.css";
import Arto_test from "./arto";
import Hello from "./Components/Hello";
import Counter from "./Counter";
import { useState } from "react";

const App = (props) => {
  const school = "Yabatech";
  const age = 10;
  const { counter } = props;
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left:0, right:0
  })

  const handleLeftClick =()=>{
    const newClicks ={
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick =()=>{
    const newClicks={
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks);
  }

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
    {clicks.left}
    <button onClick={handleLeftClick}>Left</button>
    <button onClick={handleRightClick}>Right</button>
    {clicks.right}
    {left}
    <button onClick={()=> setLeft(left - 1)}>
      left
    </button>
    <button onClick={()=> setRight(right + 1)}>
      right
    </button>

    {right}

      <h1>Greetings</h1>

      <div>{counter}</div>
      <Hello school="ISL" age={2 + 3} />
      <Hello school={school} age={age} />

      <Arto_test age={50} education={"frontend"} name={"yemi"} />

      <Counter />
    </div>
  );
};

export default App;
