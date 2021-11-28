const Greeting = artifacts.require("Greeting");

contract("Greeting", function () {
  it("contract is deployed", async function () {
    await Greeting.deployed();
    return assert.isTrue(true);
  });

  describe("get()", () => {
    it("returns greeting value", async () => {
      const greetingContract = await Greeting.deployed();
      const expectedValue = "Hello World!"

      const greetingValue = await greetingContract.get()

      assert.equal(greetingValue, expectedValue, "greeting value matches")
    })
  })

  describe("set()", () => {
    it("sets greeting value", async () => {
      const greetingContract = await Greeting.deployed();
      const expectedValue = "Hello Tests!"

      await greetingContract.set('Hello Tests!')
      const greetingValue = await greetingContract.get()

      assert.equal(greetingValue, expectedValue, "new greeting value matches")
    })
  })
});
