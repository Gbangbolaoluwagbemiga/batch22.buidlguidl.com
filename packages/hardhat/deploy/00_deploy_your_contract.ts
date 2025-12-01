import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "22";

// BatchRegistry address on Arbitrum (from externalContracts.ts)
const ARBITRUM_BATCH_REGISTRY = "0xBa7A0079ce923ed5D5F502D4E938bac1df148f24";

/**
 * Deploys contracts for check-in functionality.
 * On localhost: Deploys BatchRegistry and CheckIn contracts
 * On Arbitrum: Only deploys CheckIn contract (BatchRegistry is already deployed)
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network arbitrum`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const networkName = hre.network.name;
  const isLocalNetwork = networkName === "localhost" || networkName === "hardhat";

  let batchRegistryAddress: string;

  if (isLocalNetwork) {
    // Deploy BatchRegistry locally for testing
    await deploy("BatchRegistry", {
      from: deployer,
      // Contract constructor arguments
      args: [deployer, BATCH_NUMBER],
      log: true,
      // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
      // automatically mining the contract deployment transaction. There is no effect on live networks.
      autoMine: true,
    });

    // Get the deployed contract to interact with it after deploying.
    const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
    batchRegistryAddress = await batchRegistry.getAddress();
    console.log("\nBatchRegistry deployed to:", batchRegistryAddress);
    console.log("Remember to update the allow list!\n");

    // The GraduationNFT contract is deployed on the BatchRegistry constructor.
    const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
    console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
  } else {
    // On live networks (like Arbitrum), use the already deployed BatchRegistry
    batchRegistryAddress = ARBITRUM_BATCH_REGISTRY;
    console.log("\nUsing existing BatchRegistry at:", batchRegistryAddress);
  }

  // Deploy CheckIn contract
  await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress, deployer],
    log: true,
    autoMine: isLocalNetwork,
  });

  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("CheckIn deployed to:", await checkIn.getAddress(), "\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry", "CheckIn"];
