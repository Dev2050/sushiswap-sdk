import { ChainId } from '../enums'
export * from './addresses'
export * from './natives'

import JSBI from 'jsbi'

export const MaxUint256 = JSBI.BigInt(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
)

// export const INIT_CODE_HASH: string = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
export const INIT_CODE_HASH: { [chainId: number]: string } = {
    [ChainId.MAINNET]: '0x6f1acd0cee2f87c0c0c10a8c81870bff3bdcb9eccbd756f83ebdd1f7e84ec4b3',
    [ChainId.ROPSTEN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.RINKEBY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.GÖRLI]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.KOVAN]: '0xa35fe415953222fab35f19bbbe3c57ae15d0e7874589ccda37f2d251b368758a',
    [ChainId.FANTOM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.MATIC]: '0x5a41380c19cb85b33f3bc936a3a4f40184041f014e990c9f6b66df77c143e07b',
    [ChainId.MATIC_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.XDAI]: '0x6f1acd0cee2f87c0c0c10a8c81870bff3bdcb9eccbd756f83ebdd1f7e84ec4b3',
    [ChainId.BSC]: '0x152d488aa084ac2d1ca9633d31e05b731708ac2c6ecb1bf8c651abd0c95bb599',
    [ChainId.BSC_TESTNET]: '0x65cf31cf6070c99e971ba4c07aa5e93129112008f31b9becf77f6b3a8f63b538',
    [ChainId.ARBITRUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.MOONBEAM_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.AVALANCHE]: '0x6f1acd0cee2f87c0c0c10a8c81870bff3bdcb9eccbd756f83ebdd1f7e84ec4b3',
    [ChainId.AVALANCHE_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.HECO]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.HECO_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.HARMONY]: '0x65cf31cf6070c99e971ba4c07aa5e93129112008f31b9becf77f6b3a8f63b538',
    [ChainId.HARMONY_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.OKEX]: '0x6f1acd0cee2f87c0c0c10a8c81870bff3bdcb9eccbd756f83ebdd1f7e84ec4b3',
    [ChainId.OKEX_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    [ChainId.CELO]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
  }


export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  ),
}
