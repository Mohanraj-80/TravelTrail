import { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

export default function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    console.log("entered input change")
    setUserInput(e.target.value);
    console.log(userInput)
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessage = { text: userInput, type: "user" };
      setMessages([...messages, newMessage]);
      let data  = userInput + " "
      data = JSON.stringify(data)
      console.log(data)
      axios.post("http://localhost:5000/chatbot/question", { question : data }) 
        .then(response => {
          console.log(response.data)
          const serverMessage = { text: response.data, type: "server" };
          setMessages(prevMessages => [...prevMessages, serverMessage]);
        })
        .catch(error => {
          console.error("There was an error communicating with the server!", error);
        });

      setUserInput(""); 
    }
  };

  return (
    <div>
      <div className="card">
        <div className="chat-header">Chat</div>
        <div className="chat-window">
          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`message-item ${message.type === "user" ? "user-message" : "server-message"}`}
              >
                {message.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-input">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message here"
            value={userInput}
            onChange={handleInputChange}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
