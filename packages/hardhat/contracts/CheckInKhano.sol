// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckInKhano {
    address public owner;
    address public registry;

    constructor(address _registry) {
        owner = msg.sender;
        registry = _registry;
    }

    function checkMeIn() external {
        require(msg.sender == owner, "Not owner");
        IBatchRegistry(registry).checkIn();
    }

    function gm() external pure returns (string memory) {
        return "GM from Khano!";
    }
}
