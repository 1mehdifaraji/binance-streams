import { FC } from "react";

import { Symbol, Perpetual, PriceChange, Price } from "./common";

const Ticker: FC<Ticker> = ({ P: changePercent, c: lastPrice, s: symbol }) => (
  <div className="px-6 py-2 transition-colors hover:bg-hover cursor-pointer select-none">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <Symbol symbol={symbol} />
        <Perpetual />
      </div>
      <div className="text-right space-y-1">
        <Price lastPrice={lastPrice} />
        <PriceChange changePercent={changePercent} />
      </div>
    </div>
  </div>
);

export default Ticker;
