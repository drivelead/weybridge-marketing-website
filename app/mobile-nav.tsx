"use client";

import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { navigation } from "./header";

type Props = {};

export default function MobileNav({}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-cyan-500 text-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <Link
              href="/"
              className="uppercase text-black flex flex-col items-center justify-center -mt-2"
            >
              <p className="font-display text-4xl lg:text-5xl -mb-1 text-white">
                Weybridge
              </p>
              <p className="tracking-[1em] text-white">
                Venture<span className="tracking-[0]">s</span>
              </p>
            </Link>
            <div className="flex flex-1 justify-end">
              <a href="#" className="text-sm/6 font-semibold text-text-white">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
