export interface TokenConfig {
  rpcUrl: string;
  name: string;
  symbol: string;
  decimals: number;
  isConverter: boolean;
}

export interface DeployedAddresses {
  mintVerifier?: string;
  withdrawVerifier?: string;
  transferVerifier?: string;
  registrar?: string;
  encryptedERC?: string;
}

export const DEFAULT_CONFIG: TokenConfig = {
  rpcUrl: "http://127.0.0.1:8545",
  name: "Encrypted Token",
  symbol: "EERC",
  decimals: 18,
  isConverter: false
}; 