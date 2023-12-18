import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());
  // const [value, setValue] = useState(1);
  const [value, setValue] = useState({
    value: 0,
  });
  // const [multipliedValue, setMultipliedValue] = useState(5);
  // let multipliedValue = value * 5;
  // const multiplybyfive = () => {
  //   setValue(value + 1);
  //   // setMultipliedValue(value * 5);
  // };

  const clickMe = () => {
    // console.log("logged"); // this doesn't renders the App
    // setValue(value + 1); // this renders the App
    // setValue(1); // this doesn't renders the App bcz there's no change in state it is 1 only
    // setValue(3); // this renders the App bcz there's change in state the val is 3
    setValue({
      value: 0,
    });
    // here above it is a non primitive data type where val is updated by, pass by val pass by reference eg., a box but we don't know what is inside that box
    // in primitive val is pass without reference
  };

  // useEffect(() => {}, [value.value]); // 10:00 in video 33 react playlist

  return (
    <>
      {/* <h1>Main value: {value}</h1> */}
      <h1>Main value: {value.value}</h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
    </>
  );
}

export default App;
