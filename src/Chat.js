import { useEffect, useState } from "react";

const Chat = () => {
    const [allMessages, setAllMessages] = useState([""]);
    useEffect(() => {
      setAllMessages(
        JSON.parse(window.localStorage.getItem("chat")),
        "from chat"
      );
    });
    return (
      <div>
        {allMessages.map((c) => {
          return (
            <div>
              <span>{c.name} :</span>
              <span>{c.message}</span>
            </div>
          );
        })}
      </div>
    );
  };
  export default Chat;
  