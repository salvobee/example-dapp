const Greeting = artifacts.require("Greeting");

contract("Greeting", function () {
  it("contract is deployed", async function () {
    await Greeting.deployed();
    return assert.isTrue(true);
  });
});
