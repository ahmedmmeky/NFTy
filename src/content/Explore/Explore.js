import React from "react";
import styles from "./Explore.module.scss";
import NFT from "../../components/NFT";
const Explore = () => {
  const nfts = [
    {
      id: 0,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 1,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 2,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 3,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 4,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
    {
      id: 5,
      name: "Sample",
      price: 400,
      description: "lorem ipsum dolor sit amet",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
    },
  ];
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.header}>
        <h2>NFTy Marketplace</h2>
        <h5>Popular Listings For You</h5>
      </div>
      <div className={styles.nftsContainer}>
        {nfts.map((nft) => {
          return (
            <NFT
              name={nft.name}
              price={nft.price}
              description={nft.description}
              imgUrl={nft.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
