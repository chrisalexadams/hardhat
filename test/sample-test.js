const { assert } = require("chai");

describe("Chainshot", function () {
    it("Should change x", async function () {
      const Chainshot = await ethers.getContractFactory("Chainshot");
      const chainshot = await Chainshot.deploy();
      
      await chainshot.deployed();
      assert.equal(await chainshot.x(), 4);

      await chainshot.change();

      assert.equal(await chainshot.x(), 9)
      
    });
});