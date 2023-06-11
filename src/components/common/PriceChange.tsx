import { FC } from "react";

interface PriceChangeProps {
  changePercent: string;
}

const PriceChange: FC<PriceChangeProps> = ({ changePercent }) => (
  <div
    className={`text-sm font-light ${
      Number(changePercent) < 0 ? "text-red-500" : "text-green-500"
    }`}
  >
    {Number(changePercent) > 0
      ? "+" + Number(changePercent).toFixed(2)
      : Number(changePercent).toFixed(2)}
    %
  </div>
);

export default PriceChange;
