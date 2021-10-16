import { Token } from '../Token';
import { Currency } from '../Currency';
import { NativeCurrency } from '../NativeCurrency';
export declare class Binance extends NativeCurrency {
    protected constructor(chainId: number);
    get wrapped(): Token;
    private static _cache;
    static onChain(chainId: number): Binance;
    equals(other: Currency): boolean;
}
