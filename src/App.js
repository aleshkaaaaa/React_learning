import { useState } from "react";
import { Message } from "./components/Message";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const [text, setText] = useState("i am a prop");

  const handleClick = () => {
    alert("click");
    setText("123" + Math.random());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick} />
        <p>
          My first React App
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;