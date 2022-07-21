/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

// // LOCAL DEV
// module.exports = {
//   solidity: "0.8.12",
// };

// // FOR DEPLOYING ON GOERLI
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.12",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
