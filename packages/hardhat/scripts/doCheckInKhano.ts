import { ethers } from "hardhat";

async function main() {
  const YOUR_CONTRACT = "0x02B69543Cdc1608bEa5a9bFCeB87d4076e05Ea09";

  const abi = ["function checkMeIn()"];
  const signer = (await ethers.getSigners())[0];

  const contract = new ethers.Contract(YOUR_CONTRACT as `0x${string}`, abi, signer);

  console.log("📡 Sending check-in transaction...");
  const tx = await contract.checkMeIn();

  console.log("⏳ Tx sent:", tx.hash);
  await tx.wait();

  console.log("🎉 CHECK-IN SUCCESSFUL !");
}

main().catch(console.error);
