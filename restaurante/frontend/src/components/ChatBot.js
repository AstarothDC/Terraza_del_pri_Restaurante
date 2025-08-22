// src/components/ChatBot.js
import React from "react";

const ChatBot = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px", // puedes ajustar el alto según lo necesites
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop: "20px"
      }}
    >
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_agent1JeS1G/webchat?__version__=2"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="ChatBot Restaurante"
      />
    </div>
  );
};

export default ChatBot;
