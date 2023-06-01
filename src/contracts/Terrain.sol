// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Terrain is ERC721 {
    uint256 public cost = 1 ether;
    uint256 public maxSupply = 5;
    uint256 public totalSupply = 0;

    struct House {
        string name;
        address owner;
        int256 posX;
        int256 posY;
        int256 posZ;
        uint256 sizeX;
        uint256 sizeY;
        uint256 sizeZ;
    }

    House[] public houses;

    constructor(string memory _name, string memory _symbol, uint256 _cost) ERC721(_name, _symbol) {
        cost = _cost;

        houses.push(House("Maison 1", address(0x0), 0, 0, 0, 10, 10, 10));
        houses.push(House("Maison 2", address(0x0), 10, 10, 0, 10, 10, 10));
        houses.push(House("Maison 3", address(0x0), 20, 20, 0, 10, 10, 10));
    }

    function mint(uint256 _id) public payable {
        uint256 supply = totalSupply;
        require(supply <= maxSupply);
        require(houses[_id - 1].owner == address(0x0));
        require(msg.value >= cost);

        houses[_id - 1].owner = msg.sender;
        totalSupply = totalSupply + 1;

        _safeMint(msg.sender, _id);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Error ERC721"
        );

        houses[tokenId - 1].owner = to;

        _transfer(from, to, tokenId);
    }

    function getHouses() public view returns (House[] memory) {
        return houses;
    }

    function getHouse(uint256 _id) public view returns (House memory) {
        return houses[_id - 1];
    }
}