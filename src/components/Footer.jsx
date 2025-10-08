import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-slate-900 text-primary-content p-10">
      <aside>
        <img className="w-15" src="/logo.png" alt="" />
        <p className="font-bold text-color">
          HERO.IO Ltd.
          <br />
          Providing reliable Apps since 2019
        </p>
        <nav className="">
          <div className="grid grid-flow-col gap-4">
            <a>
              <Twitter className="stroke-violet-700" />
            </a>
            <a>
              <Facebook className="stroke-violet-700" />
            </a>
            <a>
              <Youtube className="stroke-violet-700" />
            </a>
          </div>
        </nav>
        <p className="!text-violet-800 mt-3">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
