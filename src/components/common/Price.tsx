import { FC } from "react";

interface PriceProps {
  lastPrice: string;
}

const Price: FC<PriceProps> = ({ lastPrice }) => (
  <div>{Number(lastPrice)?.toLocaleString("en-US")}</div>
);

export default Price;
