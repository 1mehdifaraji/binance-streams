import { FC } from "react";

const Footer: FC = () => (
  <footer className="text-xs text-center border-t border-gray-700 py-4 md:py-6 text-gray-400">
    All rights reserved {new Date().getFullYear()} Mehdi Faraji
  </footer>
);

export default Footer;
