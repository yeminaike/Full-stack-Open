import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function findLargestNumberInAnArray(arr) {
  let largest = arr[0];
  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}


const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const initialPoints = Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(initialPoints);

  const increasePoint = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  function findMax() {
    const copy = [...points];
    const maxValue = findLargestNumberInAnArray(copy);
    const index = anecdotes[points.indexOf(maxValue)]
     console.log("Maximum Element is:" + maxValue); 
    console.log(index)
  }


  findMax();

  const generateRandomText = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomIndex);
  };

  return (
    <div>
      <h1>Ancedote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has{points[selected]} votes</p>
      <button onClick={generateRandomText}>next anecdotes</button>

      <button onClick={increasePoint}>vote</button>

      <h1>Anecdote with the most votes</h1>
     <p>{anecdotes[ ]}</p>
      
    </div>
  );
};

export default App;
