import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import styles from "./Wallet.module.scss";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

const Wallet = () => {
  const [walletName, setWalletName] = useState("");
  const [wallets, setWallets] = useState([
    {
      id: 1,
      name: "Coinbase Wallet",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1484586799921909764/A9yYenz3.png",
      address: "24252nkmlfonrfon3mrop4rj4pj42po24p2jrkrf",
    },
    {
      id: 2,
      name: "Meta Mask",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
      address: "24252nkmlfonrfon3mrop4rj4pj42po24p2jrkrf",
    },
  ]);

  const [open, setOpen] = useState(false);

  const [walletOpen, setWalletOpen] = useState(false);

  const [currentWallet, setCurrentWallet] = useState({});

  useEffect(() => {}, [wallets]);

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
    display: "flex",
    justifyContent: "center",
    gap: 32,
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleWalletOpen = (wallet) => {
    setCurrentWallet(wallet);
    setWalletOpen(true);
  };

  const handleCreate = (walletName) => {
    wallets.push({
      id: wallets.length + 1,
      name: walletName,
      imgUrl: "",
      address: "24252nkmlfonrfon3mrop4rj4pj42po24p2jrkrf",
    });
  };
  const handleClose = () => {
    setOpen(false);
    setWalletOpen(false);
  };

  return (
    <div className={styles.wallet}>
      <div className={styles.myWallets}>
        <h2>My Wallets</h2>
        <List dense={false}>
          {wallets.map((wallet) => {
            return (
              <ListItem
                key={wallet.id}
                className={styles.listItem}
                onClick={() => handleWalletOpen(wallet)}
              >
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
          className={styles.form}
        >
          <Box sx={style}>
            <FormControl>
              <div className={styles.inputContainer}>
                <InputLabel htmlFor="wallet-name">Wallet Name</InputLabel>
                <Input
                  id="wallet-name"
                  aria-describedby="wallet-helper"
                  onChange={(e) => setWalletName(e.target.value)}
                />
                <FormHelperText id="wallet-helper">
                  Please provide an easy to remember name
                </FormHelperText>
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  handleCreate(walletName);
                  handleClose();
                }}
              >
                Create Wallet
              </Button>
            </FormControl>
          </Box>
        </Modal>

        <Modal
          open={walletOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={styles.form}
        >
          <Box sx={style}>
            <div className={styles.walletInfo}>
              <ListItem className={styles.listItem}>
                <ListItemAvatar>
                  <Avatar src={currentWallet.imgUrl}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={currentWallet.name} secondary={false} />
              </ListItem>
              <Input value={currentWallet.address} />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Wallet;
