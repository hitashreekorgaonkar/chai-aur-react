import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);   // this is also fine
    setCounter(counter + 1);

    //what will be the op of the counter?
    // 6 or 9
    // it will be 6 only bcz
    // here it is considered as batch by fibre
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // op for the below on is 9
    // setCounter(() => {}) this is a callback feature for such cases
    // setCounter((here we get the existing state ) => {})
    // Instead of prevCounter you can give any other name too
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
