import React, {useState} from "react";
import {ChatEngine, getOrCreateChat} from "react-chat-engine";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from "./Chat.module.scss";
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
      <div className={styles.chatContainer}>
        <TextField
          className={styles.chatTextBox}
          id="outlined-start-adornment"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createDirectChat(creds)
            }
          }}
        />
        <div className={styles.chatButtonPosition}>
          <Button
            className={styles.chatButton}
            variant="contained" 
            onClick={() => createDirectChat(creds)}
          >
            <AddIcon />
          </Button>
        </div>
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
