import React from "react";
import Link from "next/link";

import MobileNav from "./mobile-nav";

type Props = {};

export const navigation = [
  { name: "About Us", href: "#aboutus" },
  { name: "Ventures", href: "#ourventures" },
];

export default function Header({}: Props) {
  return (
    <header className="bg-gradient-to-b from-cyan-600 to-cyan-500/0 h-[6.5rem] absolute top-0 left-0 w-full z-50 transition-all duration-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md text-white font-medium hover:underline hover:underline-offset-2 uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
        <Link
          href="/"
          className="uppercase text-black flex flex-col items-center justify-center -mt-2"
        >
          <p className="font-display text-3xl lg:text-4xl text-white">
            Weybridge
          </p>
          <p className="text-sm tracking-[0.7em] lg:tracking-[1em] text-cyan-700 bg-white rounded-xs w-full text-center font-medium">
            Venture<span className="tracking-[0]">s</span>
          </p>
        </Link>
        <div className="flex flex-1 justify-end lg:gap-x-12">
          <Link
            href="/contact"
            className="text-md text-white font-medium hover:underline hover:underline-offset-2 uppercase"
          >
            Contact<span className="hidden sm:inline"> Us</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
