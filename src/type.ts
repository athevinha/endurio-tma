import {ECPairInterface} from "ecpair";
import {BigNumber, Wallet} from "ethers";

export interface IWeb3Account {
    evmMnemonic?: string;
    evmAddress: string;
    evmPrivateKey: string;
    btcAddress: string;
    btcPublicKey: string;
    evmSigner: Wallet;
    btcSigner: ECPairInterface;
    balances: IWeb3AccountBalance
    allowances: IWeb3AccountAllowances
}
export interface IWeb3AccountBalance {[tokenAddress: string]: BigNumber}
export interface IWeb3AccountAllowances {[tokenAddress: string]: {[spender: string]: BigNumber}} 
export type IWeb3OnChainState= {
    balances: {
      [token: string]: BigNumber;
    };
    allowances: {
      [token: string]: {
        [spender: string]: BigNumber;
      };
    };
};