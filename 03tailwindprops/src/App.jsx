import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    username: "hitashree",
    age: 25,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p rounded-xl mb-4">
        Hello world!
      </h1>
      <Card username="chaiaurcode" btnText="Click Me" someObje={newArr} />
      <Card username="hita" />
    </>
  );
}

export default App;
