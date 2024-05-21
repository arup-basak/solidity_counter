const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", () => {
  let Counter;
  let counter;
  let owner;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    [owner] = await ethers.getSigners();
    counter = await Counter.deploy("My Counter", 0);
    // await counter.deployed();
  });

  it("should return the correct name and initial count", async function () {
    expect(await counter.getName()).to.equal("My Counter");
    expect(await counter.getCount()).to.equal(0);
  });

  it("should increment the count", async function () {
    await counter.increment();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should decrement the count", async function () {
    await counter.increment();
    await counter.increment();
    await counter.decrement();
    expect(await counter.getCount()).to.equal(1);
  });

  it("should set a new name", async function () {
    await counter.setName("New Counter Name");
    expect(await counter.getName()).to.equal("New Counter Name");
  });
});