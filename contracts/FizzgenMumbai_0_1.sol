// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ExampleNFT is ERC721URIStorage, Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;

   // takes as arguments strings for (1) name of smart contract and (2) symbol for minted
   constructor() ERC721("Fizzgen Mumbai 0.1", "FIZZ") {}

   event NewNFTMinted(address recipient, uint256 tokenId);

   function mintNFT(address recipient, string memory tokenURI)
       public onlyOwner
   {
       _tokenIds.increment();

       uint256 newItemId = _tokenIds.current();
       _mint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);

       console.log("New NFT with ID of %s has been minted to %s!", newItemId, recipient);

       emit NewNFTMinted(recipient, newItemId);
   }
}