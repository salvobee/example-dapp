// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Greeting {

    string greeting = "Hello World!";

    function get() public view returns (string memory) {
        return greeting;
    }

    function set(string memory _greeting) public {
        greeting = _greeting;
    }
}
