import Link from "next/link";
import React from "react";

type Props = {};

const footerNavigation = {
  main: [
    { name: "About Weybridge Ventures", href: "#aboutus" },
    { name: "Our Ventures & Partnerships", href: "#ourventures" },
    { name: "Contact Us", href: "#contactus" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer({}: Props) {
  return (
    <footer className="relative bg-cyan-600 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <Link
          href="/"
          className="w-42 lg:w-50 mx-auto uppercase text-black flex flex-col items-center justify-center mb-4"
        >
          <p className="font-display text-3xl lg:text-4xl text-white">
            Weybridge
          </p>
          <p className="text-sm tracking-[0.7em] lg:tracking-[1em] text-cyan-700 bg-white rounded-xs w-full text-center font-medium">
            Venture<span className="tracking-[0]">s</span>
          </p>
        </Link>
        <div className="text-center font-light text-sm/6 text-cyan-400 mb-8">
          <p>&copy; 2025 Weybridge Ventures FZE LLC. All rights reserved.</p>
          <p>
            Amber Gem Tower, Sheikh Khalifa Bin Zayed Road, Ajman, United Arab
            Emirates.
          </p>
          <p>Registration Number 262991153888</p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {footerNavigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-cyan-400 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
