import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import styles from "./Wallet.module.scss";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Wallet = () => {
  const wallets = [
    {
      id: 1,
      name: "Coinbase Wallet",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1484586799921909764/A9yYenz3.png",
    },
    {
      id: 2,
      name: "Meta Mask",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = (nft) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wallet}>
      <div className={styles.myWallets}>
        <h2>My Wallets</h2>
        <List dense={false}>
          {wallets.map((wallet) => {
            return (
              <ListItem key={wallet.id} className={styles.listItem}>
                <ListItemAvatar>
                  <Avatar src={wallet.imgUrl}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={wallet.name} secondary={false} />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={styles.createWallet}>
        <h4>Don't Have A Wallet?</h4>
        <Button variant="contained" onClick={handleOpen}>
          Create Wallet
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>Hello</p>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Wallet;
