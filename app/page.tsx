"use client";

import Head from "next/head";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Us", href: "#aboutus" },
  { name: "Our Ventures", href: "#ourventures" },
  { name: "Contact", href: "#contactus" },
];

const ventures = [
  {
    name: "AutoLEAD (UAE)",
    intro: "Digital Solutions for Auto Retail",
    description:
      "Empowering automotive businesses with advanced e-commerce and digital sales solutions.",
    href: "https://autolead.digital",
    logo: "/logos/AUTOLEAD-BLACK.svg",
  },
  {
    name: "DriveLEAD (UK)",
    intro: "Development & Digital Solutions",
    description:
      "Custom-built software, web development, and business technology solutions that work.",
    href: "https://drivelead.co.uk",
    logo: "/logos/DRIVELEAD-BLACK.svg",
  },
  {
    name: "We Shape (UK)",
    intro: "Design, Branding & Strategy",
    description:
      "Where creativity meets strategy—crafting exceptional brands, visual identities, and business positioning.",
    href: "https://weshape.london",
    logo: "/logos/WESHAPE-BLACK.svg",
  },
  {
    name: "Saudi Advanced Technologies (KSA)",
    intro: "Our Strategic Saudi Partner",
    description:
      "Driving digital transformation and innovation in Saudi Arabia through strategic collaborations and tech solutions.",
    href: "https://saudiat.sa",
    logo: "/logos/SAT-BLACK.svg",
  },
  {
    name: "ŁOFNHEIM (UAE)",
    intro: "Innovation & Strategic Advisory Partner",
    description:
      "Strategic advisory and cutting-edge solutions for global industries, bridging the gap between technology and business transformation.",
    href: "https://www.lofnheim.com",
    logo: "/logos/ŁOFNHEIM-BLACK.svg",
  },
  {
    name: "FalconSim (UAE)",
    intro: "Turnkey Simulation Solutions",
    description:
      "Bringing reality to the digital world through high-end simulation hardware and immersive software.",
    href: "https://falconsim.pro",
    logo: "/logos/FALCONSIM-BLACK.svg",
  },
];

const footerNavigation = {
  main: [
    { name: "About Weybridge Ventures", href: "#aboutus" },
    { name: "Our Ventures & Partnerships", href: "#ourventures" },
    { name: "Contact Us", href: "#contactus" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Weybridge Ventures | Bridging Innovation & Excellence</title>
        <meta
          name="description"
          content="Weybridge Ventures is a British-UAE holding company investing in technology, design, and strategic ventures."
        />
        <meta
          property="og:title"
          content="Weybridge Ventures | Bridging Innovation & Excellence"
        />
        <meta
          property="og:description"
          content="Weybridge Ventures is a British-UAE holding company investing in technology, design, and strategic ventures."
        />
        <meta
          property="og:image"
          content="https://www.weybridge.ae/og-image.jpg"
        />
        <meta property="og:url" content="https://www.weybridge.ae" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Weybridge Ventures | Bridging Innovation & Excellence"
        />
        <meta
          name="twitter:description"
          content="Weybridge Ventures is a British-UAE holding company investing in technology, design, and strategic ventures."
        />
        <meta
          name="twitter:image"
          content="https://www.weybridge.ae/og-image.jpg"
        />
      </Head>
      <header className="bg-white font-sans">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-slate-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <a href="#" className="">
            <span className="sr-only">Weybridge Ventures</span>
            <img
              alt="Weybridge Ventures Logo"
              src="weybridge-logo.svg"
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </a>
          <div className="flex flex-1 justify-end">
            <a
              href="https://www.notion.so/Weybridge-Ventures-Teamspace-1af76ddeac1d8065847cf375671c21c4"
              target="_blank"
              className="text-sm/6 font-semibold text-slate-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-slate-700">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Weybridge Ventures Logo"
                  src="weybridge-logo.svg"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </a>
              <div className="flex flex-1 justify-end">
                <a href="#" className="text-sm/6 font-semibold text-slate-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden pt-14 font-sans">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1615230686342-7bc64411a1a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-300 to-amber-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance font-display text-5xl font-semibold tracking-tight text-slate-50 sm:text-7xl">
                Bridging Innovation and Excellence
              </h1>
              <p className="mt-8 text-pretty text-lg text-amber-100 sm:text-xl/8">
                We invest in and operate ventures that challenge norms,
                combining timeless quality with cutting-edge solutions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#aboutus"
                  className="text-sm/6 font-semibold text-white">
                  Discover Weybridge Ventures <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32" id="aboutus">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base/7 font-semibold text-cyan-600">
              About Weybridge Ventures
            </p>
            <h1 className="mt-2 text-balance font-display text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Creating a future where quality meets progress
            </h1>
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8 space-y-8">
              <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900">
                Our Vision
              </h2>
              <p className="mt-6 text-base/7 text-slate-600">
                Weybridge Ventures envisions a world where timeless quality and
                forward-thinking innovation work hand in hand.
              </p>
              <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900">
                Our Mission
              </h2>
              <p className="mt-6 text-base/7 text-slate-600">
                Guided by rational thinking, integrity, and efficiency, we
                develop solutions that are effective, human-centred, and
                future-proof ensuring quality and progress go hand in hand.
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className=" font-sans bg-slate-200 py-24 sm:py-32" id="ourventures">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-cyan-600">
              Our Ventures & Partnerships
            </h2>
            <p className="mt-2 font-display text-pretty text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl lg:text-balance">
              Bridging Innovation & Expertise
            </p>
            <p className="mt-6 text-lg/8 text-slate-600">
              Our subsidiaries and partnerships deliver cutting-edge solutions
              with a focus on real-world impact.
            </p>
            w
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {ventures.map((venture) => (
                <div key={venture.name} className="flex flex-col">
                  <div className="mb-5">
                    <img
                      alt={venture.name}
                      src={venture.logo}
                      className="w-full aspect-video mx-auto bg-white rounded border border-slate-300 p-10"
                    />
                  </div>
                  <dt className="text-base/7 font-semibold text-slate-900">
                    {venture.name}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base/7 text-slate-600 space-y-2">
                    <p className="flex-auto font-semibold">{venture.intro}</p>
                    <p className="flex-auto text-sm">{venture.description}</p>
                    <p className="mt-6">
                      <a
                        href={venture.href}
                        target="_blank"
                        className="text-sm/6 font-semibold text-cyan-600">
                        Visit {venture.name} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="font-sans overflow-hidden bg-white py-32" id="contactus">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-base/7 font-semibold text-cyan-600">
                Contact us
              </h2>
              <p className="mt-2 font-display text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-balance">
                Let&apos;s Build the Future Together
              </p>
              <p className="mt-6 text-xl/8 text-slate-600">
                We partner with forward-thinking businesses to create lasting
                impact through innovation and strategy. Whether you’re
                interested in a collaboration, investment, or learning more
                about our ventures, we’d love to hear from you.
              </p>
              <div className="mt-10 flex">
                <a
                  href="mailto:contact@weybridge.ae"
                  className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                  Contact Us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-slate-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                    className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="font-sans bg-slate-600">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {footerNavigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-white">
                {item.name}
              </a>
            ))}
          </nav>

          <p className="uppercase mt-10 text-center text-xs/6 text-slate-400">
            &copy; 2025 Weybridge Ventures FZE LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
