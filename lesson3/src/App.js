import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import PostCard from "./PostCard";
import React, { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/updates");
    socket.onopen = () => {
      console.log("Connected to the WebSocket");
    };
    socket.onmessage = (event) => {
      const post = JSON.parse(event.data); // Parse the JSON string
      setMessages((prevMessages) => [...prevMessages, post]);
    };
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <Container component="main">
        <CssBaseline />
        {messages.map((message, index) => (
          <PostCard key={index} post={message} />
        ))}
      </Container>
    </div>
  );
}

export default App;
