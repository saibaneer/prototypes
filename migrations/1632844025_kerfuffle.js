const Kerfuffle = artifacts.require("Kerfuffle");

module.exports = function(deployer) {
  deployer.deploy(Kerfuffle, 311000000);
};

