const hre = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Write your deployment files here
  //
  // // Deploy the FakeNFTMarketplace contract first
  const FakeNFTMarketplace = await hre.ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  await sleep(5000);

  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await hre.ethers.getContractFactory(
    "CryptoDevsDAO"
  );
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      // This assumes your metamask account has at least 0.25 ETH in its account
      // Change this value as you want
      value: ethers.utils.parseEther("0.25"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);


}

// Async Sleep function
function sleep(ms) {

  return new Promise((resolve) => setTimeout(resolve, ms));

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




// async function test() {
//
//   const FakeNFTMarketplace = await hre.ethers.getContractFactory(
//     "FakeNFTMarketplace"
//   );
//   
//   // console.log(FakeNFTMarketplace);
//   // console.log(FakeNFTMarketplace.provider.network);
//
//   console.log("");
//
//   // await sleep(5000);
//
//   // const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
//
//   console.log(CRYPTODEVS_NFT_CONTRACT_ADDRESS)
//
//   // console.log(CryptoDevsDAO.provider.network);
// }
//
// test().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

