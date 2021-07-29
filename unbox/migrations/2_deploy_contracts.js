var SimpleStorage = artifacts.require("./itemManager.sol");

module.exports = function(deployer) {
  deployer.deploy(ItemManager);
};
