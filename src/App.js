import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { MessageList } from "./components/MessageList/MessageList.jsx";
import { Form } from "./components/Form/Form.jsx";
import { AUTHORS } from "./utils/constants";
import { ThemeContext } from "@mui/styled-engine";

const initialMessages = [
  {
    text:"text1",
    author: AUTHORS.human
  }
]

function App() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages(prevMessages => [...prevMessages,newMessage]);
  },[]);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author !== AUTHORS.bot) {
      const timeout = setTimeout(
        () =>
        handleSendMessage({
          author: AUTHORS.bot,
          text: "bip bop, i am robot",
          id: `mes-${Date.now()}`,
        }), 1500);
        return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="chatList">
          <h3>List of chats</h3>
          <ul>
            <li >Chat 1</li>
            <li >Chat 2</li>
            <li >Chat 3</li>
          </ul>
        </div>
        <div>
          <MessageList messages={messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      </header>
    </div>
  );
}

export default App;