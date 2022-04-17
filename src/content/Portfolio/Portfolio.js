import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import NFT from "../../components/NFT";
import Wallet from "../../components/Wallet";
import styles from "./Portfolio.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: 3,
            overflowY: "scroll",
            height: "100%",
            width: "calc(100vw - 200px)",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  const [search, setSearch] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nfts = [
    {
      id: 0,
      name: "Lorem",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 1,
      name: "Septum",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 2,
      name: "Call",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 3,
      name: "Random",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 4,
      name: "Test",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
    {
      id: 5,
      name: "Fourth",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
      copies: 1,
      sell: true,
    },
  ];

  const updatedNFTs = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      className={styles.mainBox}
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          maxWidth: "150px",
          minWidth: "150px",
        }}
      >
        <Tab label="Owned NFTs" {...a11yProps(0)} className={styles.tab} />
        <Tab label="Wallets" {...a11yProps(1)} className={styles.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <h1 className={styles.ownedNFTTitle}>Current Collection</h1>
          <div className={styles.nftsContainer}>
            {updatedNFTs.length !== 0 ? (
              updatedNFTs.map((nft) => {
                return (
                  <div key={nft.id}>
                    <Link
                      to={{ pathname: `/${nft.id}` }}
                      state={nft}
                      style={{ textDecoration: "none" }}
                    >
                      <NFT
                        id={nft.id}
                        name={nft.name}
                        price={nft.price}
                        description={nft.description}
                        imgUrl={nft.imgUrl}
                        expandedView={false}
                        sell={nft.sell}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="no-coins">
                <h2>No NFTs Were Found</h2>
              </div>
            )}
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Wallet />
      </TabPanel>
    </Box>
  );
};

export default Portfolio;
