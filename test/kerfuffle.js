const Kerfuffle = artifacts.require("Kerfuffle");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

let kerfuffle

beforeEach(async function(){
  kerfuffle = await Kerfuffle.deployed()
})
contract("kerfuffle", function (accounts) {
  //Test that the contract is deployed
  it("should assert true", async function () {    
    return assert.isTrue(true);
  });
  //test that the constructor gave the owner of the contract 311 million tokens
  it("gives the caller 311 million tokens", async function(){
    let raw = await kerfuffle.balanceOf(accounts[0]);
    const balance = await web3.utils.fromWei(raw);
    assert.equal(balance, 311000000);    
  });
  // test that tokens can be transferred between accounts
  it("can transfer tokens between accounts", async function(){
    let amount = web3.utils.toWei("1000000")
    await kerfuffle.transfer(accounts[1], amount, {from: accounts[0]});

    let balance = await kerfuffle.balanceOf(accounts[1]);
    balance = await web3.utils.fromWei(balance);
    assert.equal(balance, "1000000");
  });

});
