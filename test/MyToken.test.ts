import { expect } from "chai";
import { network } from "hardhat";

describe("MyToken", function () {
  it("Should deploy and assign initial supply", async function () {
    const { ethers } = await network.connect();

    const [owner] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(1000000n);

    await token.waitForDeployment();

    const balance = await token.balanceOf(owner.address);

    expect(balance).to.equal(1000000n);
  });
});