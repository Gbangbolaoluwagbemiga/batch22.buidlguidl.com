import { ethers } from "hardhat";

async function main() {
  // Adresse OFFICIELLE du BatchRegistry (confirmée dans l'Issue 11)
  const REGISTRY = "0xBa7A0079ce923ed5D5F502D4E938bac1df148f24";

  const Factory = await ethers.getContractFactory("CheckInKhano");
  const contract = await Factory.deploy(REGISTRY);

  await contract.waitForDeployment();

  console.log("🚀 CheckInKhano deployed at:", await contract.getAddress());
}

main().catch(console.error);
