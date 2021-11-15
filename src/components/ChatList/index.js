import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const chatList = [
  {
    name: "chat1",
    id: "chat1",
  },
  {
    name: "chat2",
    id: "chat2",
  },
  {
    name: "chat3",
    id: "chat3",
  },
];

export const ChatList = () => {
  return (
    <div>
      <h3>List of chats</h3>
      <ul>
        {chatList.map((chat) => (
          <>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={`/chats/${chat.id}`}
              >
                {chat.name}
              </NavLink>
            </li>
            <button onClick={() => { } }>delete</button>
          </>
        ))}
      </ul>
        <TextField inputMode />
        <Button variant="contained" type="submit" >ADD CHAT</Button>
    </div>
  );
};