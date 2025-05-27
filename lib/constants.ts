import { parseAbi } from "viem";

export const NFT_CONTRACT_ADDRESS =
  "0x53f92cFadF935F376fDe59a0f67958400a899a12";

export const NFT_MINTABLE_ABI_PARSED = parseAbi([
  "function mintTo(address recipient) returns (uint256)",
  "function baseURI() view returns (string)",
  "function balanceOf(address owner) view returns (uint256)",
] as const);
