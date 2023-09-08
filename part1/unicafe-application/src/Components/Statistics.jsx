import React from "react";

function Statistics(props) {
  let feedbackGathered = props.good > 0;
  return (
    <div>
      {feedbackGathered ? (
        <>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>Bad {props.bad}</p>
          <p>All{props.all}</p>
          <p>Average {props.average}</p>
          <p>positive{props.positive}</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default Statistics;
