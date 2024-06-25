import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Pro Access", href: "/pro-access" },
  { label: "Services", href: "/services" },
  { label: "Learning", href: "/learning" },
  { label: "Become affiliate", href: "/affiliate" },
  { label: "Help", href: "/help" },
];

const socialIcons = [
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Facebook, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-full p-12 bg-[#f7f7f8] border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center lg:pb-0 pb-5">
                <img src="/assets/logo.png" alt="logo" className="h-6" />
                <h1 className="text-xl font-medium ml-2">Magicui</h1>
              </div>
            </div>
            <nav>
              <ul className="flex lg:flex-row flex-col flex-wrap items-center lg:space-y-0 space-y-4 justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>
                      <span className="hover:text-gray-900 cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4 lg:pt-0 pt-6">
              {socialIcons.map(({ Icon, href }) => (
                <Link key={href} href={href}>
                  <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <Icon size={24} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-gray-500">
        Blank. All rights reserved. © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
