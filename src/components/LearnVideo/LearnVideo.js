import React from "react";
import ReactPlayer from "react-player";
import NFTYButton from "../NFTYButton";
import Stack from "@mui/material/Stack";
import styles from "./LearnVideo.module.scss";

// Create area for header, video, and redirect button tomorrow morning
const LearnVideo = ({ name, videoUrl, redirectUrl }) => {
  function openURL(url) {
    window.open(url);
  }

  return (
    <div className={styles.learnVideoContainer}>
      <Stack spacing={2}>
        <h2 className={styles.title}>{name}</h2>
        <ReactPlayer
          url={videoUrl}
        />
        <NFTYButton 
          label="Read More"
          width="500"
          onClick={() => openURL(redirectUrl)}
        />
      </Stack>
    </div>
  );
};

export default LearnVideo;
