import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";

export default function App() {
  const [name, setname] = useState();
  const [message, setMessage] = useState("");
  const [chatPage, setChatPage] = useState();

  const handleClick = () => {
    setChatPage(true);
  };
  
  const handleName = (e) => {
    setname(e.target.value);
  };
    useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("chat"))) {
      window.localStorage.setItem("chat", JSON.stringify([]));
    }
  	});
  
  const handleSend = () => {
    const prev = JSON.parse(window.localStorage.getItem("chat"));
    const newState = [
      ...prev,
      {
        name,
        message
      }
    ];
    window.localStorage.setItem("chat", JSON.stringify(newState));
  };
  return (
    <div className="App">
      {chatPage ? (
        <div className="wrapper">
          <div className="chat">
          <Chat />
            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button onClick={handleSend}>Send Message </button>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div>
            <label>Name: </label>
            <input onChange={handleName} />
            <div className="signIn">
              <button onClick={handleClick}>Sign In </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
