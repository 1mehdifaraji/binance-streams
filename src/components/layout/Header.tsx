import { FC } from "react";

const Header: FC = () => (
  <header className="flex items-center justify-between font-bold px-6 py-5 md:py-7 border-b border-gray-700">
    <div className="flex items-center space-x-2">
      <img
        alt="logo"
        className="w-7 md:w-10 h-7 md:h-10"
        src={require("../../assets/logo.webp")}
      />
      <div>Market Tickers</div>
    </div>
    <div>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/mehdifaraji/"
      >
        Mehdi Faraji
      </a>
    </div>
  </header>
);

export default Header;
