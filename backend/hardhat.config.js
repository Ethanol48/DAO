require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

//* Default Template for Reference

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "truffle",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },

    truffle: {
      url: "http://127.0.0.1:9545",
      accounts: ["e45accb1d299061dd35de4adb89af854480a6fcd9609af788b773b5c98c30077"]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.ETHER_SCAN,
    },
  },
};


// Configuration
/*
  solidity - The version of solidity compiler
  defaultNetwork - The Default network to run (Without running --network-name)
  networks - Object which contains the network information
  etherscan - Object to fill in EtherScan Information for contract verification
*/
