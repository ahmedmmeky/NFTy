import React, {useState} from "react";
import {ChatEngine, getOrCreateChat} from "react-chat-engine";
import "./Chat.css";

const DirectChat = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      {is_direct_chat: true, usernames: [username]},
      () => setUsername("")
    )
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  return (
    <ChatEngine
      width='100vw'
      height='calc(100vh - 162px)'
      projectID={process.env.REACT_APP_CHAT_APP_PROJECT_ID}
      userName='Nucci'
      userSecret={process.env.REACT_APP_CHAT_APP_USER_SECRET}
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChat;
