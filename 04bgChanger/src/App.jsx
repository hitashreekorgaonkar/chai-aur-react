import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("lightpink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lightpink" }}
            onClick={() => setColor("lightpink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-dark shadow-lg"
            style={{ backgroundColor: "lightgoldenrodyellow" }}
            onClick={() => setColor("lightgoldenrodyellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lightsteelblue" }}
            onClick={() => setColor("lightsteelblue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
