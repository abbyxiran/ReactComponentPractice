import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  function asyncClick() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCounting]);

  function handleClick() {
    setIsCounting((preState) => !preState);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Decrease
      </button>
      <div>
        <button
          onClick={() =>
            count % 2 === 1 && setCount((prevCount) => prevCount + 1)
          }
        >
          Increase-If-Odd
        </button>
        <button onClick={asyncClick}>Async-Inc</button>
      </div>
      <div>
        <button onClick={handleClick}>{isCounting ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
}

export default Counter;
