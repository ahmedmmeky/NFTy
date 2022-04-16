import React from "react";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "./LearnVideo.module.scss";

// Create area for header, video, and redirect button tomorrow morning
const LearnVideo = ({ name, videoUrl, redirectUrl }) => {
  return (
    <div className={styles.learnVideoContainer}>
      <Stack spacing={2}>
        <h2 className={styles.title}>{name}</h2>
        <ReactPlayer
          url={videoUrl}
        />
        <Button className={styles.redirectButton} variant="contained" href={redirectUrl}>
          Read More
        </Button>
      </Stack>
    </div>
  );
};

export default LearnVideo;
