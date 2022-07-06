import dotenv from "dotenv";
dotenv.config();

const { PUBLIC_KEY } = process.env;
const tokenURI =
  "ipfs://bafyreigttidsqh24vlowiicrh3ejy5o2r2ab62m3ar7bxygnc3hwkfhley/metadata.json";

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("ExampleNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to: ", nftContract.address);

  //call the minting function
  let txn = await nftContract.mintNFT(PUBLIC_KEY, tokenURI);
  //wait for NFT to be mined
  await txn.wait();

  //mint second NFT
  txn = await nftContract.mintNFT(PUBLIC_KEY, tokenURI);
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
