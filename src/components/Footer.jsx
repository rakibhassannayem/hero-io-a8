import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-slate-900 text-primary-content p-10">
      <aside>
        <img className="w-15" src="/logo.png" alt="" />
        <p className="!text-slate-200 font-medium">
          HERO.IO Ltd.
          <br />
          Providing reliable Apps since 2019
        </p>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="cursor-pointer hover:scale-150 transition">
              <Twitter className="stroke-violet-100" />
            </a>
            <a className="cursor-pointer hover:scale-150 transition">
              <Facebook className="stroke-violet-100" />
            </a>
            <a className="cursor-pointer hover:scale-150 transition">
              <Youtube className="stroke-violet-100" />
            </a>
          </div>
        </nav>
        <p className="!text-violet-500 mt-3">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
