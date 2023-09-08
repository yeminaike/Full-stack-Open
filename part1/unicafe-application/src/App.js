
import "./App.css";
import { useState } from "react";
import Statistics from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const sum = good * 1 + neutral * 0 + bad * -1;

  const average = sum / all;
  const percentagePositive = (good / all) * 100;

  // const handleGoodClick = () => {
  //   setGood((prevGood) => prevGood + 1);
  // };

  const handleNeutralClick = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
  };

  const handleBadClick = () => {
    setBad((prevBad) => prevBad + 1);
  };

  

  return (
    <div>
      <h1>give Feedback</h1>
      {/* <button className="btn-click" onClick={handleGoodClick}>  good</button> */}
      <button className="btn-click" onClick={() => setGood(good + 1)}>good</button>

      <button className="btn-click" onClick={handleNeutralClick}>
        neutral
      </button>

      <button className="btn-click" onClick={handleBadClick}>
        Bad
      </button>

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={percentagePositive}
      />
    </div>
  );
};

export default App;
