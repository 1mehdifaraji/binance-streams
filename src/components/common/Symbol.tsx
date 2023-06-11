import { FC } from "react";

interface SymbolProps {
  symbol: string;
}

const Symbol: FC<SymbolProps> = ({ symbol }) => <div>{symbol}</div>;

export default Symbol;
