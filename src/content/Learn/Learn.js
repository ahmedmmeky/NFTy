import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LearnVideo from "../../components/LearnVideo/LearnVideo";
import styles from "./Learn.module.scss";

const Learn = () => {
    return (
      <>
        <Box sx={{
          width: '100%'
        }}>
        <Stack spacing={2}>
          <h1 className={styles.titleHeader}>Learn</h1>
          <Grid 
            container 
            justifyContent="center" 
            alignItems="center"
          >
            <Grid item>
              <LearnVideo 
                name="What is an NFT?"
                videoUrl="https://www.youtube.com/watch?v=Oz9zw7-_vhM"
                redirectUrl="https://www.bbc.com/news/technology-56371912"
              />
            </Grid>
            <Grid item>
              <LearnVideo 
                name="How to create a cryptocurrency wallet"
                videoUrl="https://www.youtube.com/watch?v=1ROUfMzw2BY"
                redirectUrl="https://www.coinbase.com/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <LearnVideo 
                name="How to create an NFT"
                videoUrl="https://www.youtube.com/watch?v=Gjo1hlIey9g"
                redirectUrl="https://beincrypto.com/learn/how-to-make-an-nft/"
              />
            </Grid>
            <Grid item>
              <LearnVideo 
                name="How to sell an NFT"
                videoUrl="https://www.youtube.com/watch?v=_fWfPVL6wOA"
                redirectUrl="https://www.bitdegree.org/crypto/tutorials/sell-nft"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <LearnVideo 
                name="How to purchase cryptocurrency"
                videoUrl="https://www.youtube.com/watch?v=0VC8tsYrKZM"
                redirectUrl="https://www.wikihow.com/Buy-Cryptocurrency"
              />
            </Grid>
            <Grid item>
              <LearnVideo 
                name="Popular cryptocurrency exchanges"
                videoUrl="https://www.youtube.com/watch?v=PXSjbdOXgUE"
                redirectUrl="https://www.investopedia.com/best-crypto-exchanges-5071855"
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      </>
    );
};

export default Learn;
