//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Chainshot {
    uint public x;

    constructor() {
      x = 4;
    }

    function change() external {
     x += 5;
    }
}
