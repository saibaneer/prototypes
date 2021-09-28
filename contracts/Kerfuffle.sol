// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/*Shortest way to achieve an ERC20 token is to rely on the OpenZeppelin library
We define our initial supply according to the function described by Open Zeppelin
We chose to call the ERC20 token kerfuffle, and set the total supply to 311,000,000
***/
contract Kerfuffle is ERC20{
  constructor(uint256 _initialSupply) ERC20("Kerfuffle", "KFF") public {
    _mint(msg.sender,  _initialSupply*(10**decimals()));
  }
}
