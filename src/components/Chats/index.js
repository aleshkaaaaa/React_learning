import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";
import Button from '@mui/material/Button';

import "./Chats.css";
import { ChatList } from "../ChatList";
import {Navigate,useParams,} from "react-router";

const initialMessages = {
  chat1: [
    {
      text: "text1",
      author: AUTHORS.human,
    },
  ],
  chat2: [
    {
      text: "this is chat2",
      author: AUTHORS.human,
    },
  ],
  chat3: [],
};

function Chats() {
  const { chatId } = useParams();

  const [messages, setMessages] = useState(initialMessages);
  const parentRef = useRef();

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[chatId]?.length &&
      messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            author: AUTHORS.bot,
            text: "i am a bot",
            id: `mes-${Date.now()}`,
          }),
        1500
      );

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App" ref={parentRef}>
      <ChatList />
      <div>
        <Button draw={(text) => <span>{text}</span>} />
        <MessageList messages={messages[chatId]} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default Chats;