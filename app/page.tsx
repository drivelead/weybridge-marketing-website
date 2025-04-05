"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "About Us", href: "#aboutus" },
  { name: "Ventures", href: "#ourventures" },
];

const ventures = [
  {
    name: "DriveLEAD (UK)",
    intro: "Strategic Technology, Delivered Intelligently",
    description:
      "Technology solutions that solve real business problems—built with precision, scalability, and long-term value in mind.",
    href: "https://drivelead.co.uk",
    logo: "/logos/drive-lead-logo.svg",
  },
  {
    name: "AutoLEAD (UAE)",
    intro: "Digital Solutions for Auto Retail",
    description:
      "Powering vehicle sales online—integrating inventory, financing, lead management, and omni-channel experiences.",
    href: "https://autolead.digital",
    logo: "/logos/auto-lead-logo.svg",
  },
  {
    name: "FitLEAD",
    intro: "Automation for Modern Coaching",
    description:
      "Transforming personal training into a scalable, high-margin business through AI and automated client engagement.",
    href: "https://weshape.london",
    logo: "/logos/fit-lead-logo.svg",
  },
  {
    name: "Saudi Advanced Technologies (KSA)",
    intro: "National-Scale Technology Partner",
    description:
      "Strategic partner delivering technology for enterprise and government that amplify vision, scale, and ambition.",
    href: "https://saudiat.sa",
    logo: "/logos/SAT-BLACK.svg",
  },
  {
    name: "ŁOFNHEIM (UAE)",
    intro: "Strategic Foresight & Innovation Leadership",
    description:
      "A global innovation partner supporting transformation through foresight, product strategy, and deep market understanding.",
    href: "https://www.lofnheim.com",
    logo: "/logos/ŁOFNHEIM-BLACK.svg",
  },
  {
    name: "FalconSim (UAE)",
    intro: "Turnkey Simulation Solutions",
    description:
      "Professional-grade simulation platforms for driving and flight—built for realism, reliability, and commercial deployment.",
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
      <header className="bg-gradient-to-b from-cyan-600 to-cyan-500/0 h-[6.5rem] absolute top-0 left-0 w-full z-50 transition-all duration-300">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-md text-white font-medium hover:underline hover:underline-offset-2 uppercase">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <Link
            href="/"
            className="uppercase text-black flex flex-col items-center justify-center -mt-2">
            <p className="font-display text-3xl lg:text-4xl text-white">
              Weybridge
            </p>
            <p className="text-sm tracking-[0.7em] lg:tracking-[1em] text-cyan-700 bg-white rounded-xs w-full text-center font-medium">
              Venture<span className="tracking-[0]">s</span>
            </p>
          </Link>
          <div className="flex flex-1 justify-end lg:gap-x-12">
            <a
              href="#contactus"
              target="_blank"
              className="text-md text-white font-medium hover:underline hover:underline-offset-2 uppercase">
              Contact<span className="hidden sm:inline"> Us</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-cyan-500 text-white px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-white">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <Link
                href="/"
                className="uppercase text-black flex flex-col items-center justify-center -mt-2">
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <section className="relative isolate h-dvh">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 via-25% h-full" />
        {/* 🔁 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-50 w-full h-full object-cover">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🌟 Hero Content */}
        <div className="flex flex-col items-center justify-center h-full pt-24 bg-cyan-600/60">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center px-4 lg:px-8">
              <h1 className="text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-sm">
                Bridging Innovation and Excellence
              </h1>
              <p className="mt-8 text-balance text-lg text-white sm:text-xl/7">
                We invest in and manage ventures that defy conventions,
                seamlessly blending enduring quality with modern solutions.
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
      </section>

      <section
        className="overflow-hidden bg-gradient-to-t from-slate-200 to-white pb-24 sm:pb-32 pt-8"
        id="aboutus">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base/7 font-medium tracking-wider text-cyan-600 uppercase">
              About Weybridge Ventures
            </p>
            <h1 className="mt-2 text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl max-w-xl">
              Doing things properly, while moving forward.
            </h1>
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8 space-y-8">
              <p className="text-base/7 text-slate-600 text-balance">
                At Weybridge Ventures, we combine timeless principles with
                modern thinking to build businesses that last.
              </p>
              <p className="text-base/7 text-slate-600 text-balance">
                With British leadership and hands-on involvement, we invest in
                ventures that challenge outdated ideas, create real value, and
                move industries forward.
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Our Mission
              </h2>
              <p className="text-base/7 text-slate-600 text-balance">
                Guided by rational thinking, integrity, and efficiency, we
                develop solutions that are effective, human centred, and future
                proof. We create and invest in technology, design, and strategic
                ventures that solve real world challenges.
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Lindsay catching up on messages before starting her workday."
                    src="/photos/lindsay-using-smartphone-at-home.jpeg"
                    width={1280}
                    height={1024}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt="Business professional walking confidently through a modern glass corridor."
                    src="/photos/devon-walking-through-glass-corridor.jpeg"
                    width={1280}
                    height={1024}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Two colleagues working together on a laptop in a casual office environment."
                    src="/photos/jennifer-and-andy-collaborating-over-laptop.jpeg"
                    width={1280}
                    height={1024}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt="Man and woman smiling while discussing something on a laptop."
                    width={1280}
                    height={1024}
                    src="/photos/thomas-and-nina-discussing-project-plan.jpeg"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        className="bg-gradient-to-t from-white via-slate-200 via-20% to-slate-200 pb-24 sm:pb-32"
        id="ourventures">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-medium tracking-wider text-cyan-600 uppercase">
              Our Ventures & Partnerships
            </h2>
            <p className="mt-2 font-display text-pretty text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl lg:text-balance">
              Bridging Innovation & Expertise
            </p>
            <p className="mt-6 text-lg/7 text-slate-600 text-balance">
              Our subsidiaries and partnerships provide advanced solutions
              focused on tangible, real-world outcomes.
            </p>
            w
          </div>
          <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-12 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {ventures.map((venture) => (
                <div key={venture.name} className="flex flex-col">
                  <div className="mb-4">
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
                    <p className="flex-auto text-sm text-balance">
                      {venture.description}
                    </p>
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
      </section>
      <section
        className="relative overflow-hidden bg-white pb-24 sm:pb-32 pt-8"
        id="contactus">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-base/7 font-medium tracking-wider text-cyan-600 uppercase">
                Contact us
              </h2>
              <p className="mt-2 font-display text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-balance">
                Let&apos;s Build the Future Together
              </p>
              <p className="mt-6 text-lg/6 text-slate-600 text-balance">
                We partner with forward-thinking businesses to create lasting
                impact through innovation and strategy.
              </p>
              <p className="mt-6 text-lg/6 text-slate-600 text-balance">
                Whether you&apos;re interested in a collaboration, investment,
                or learning more about our ventures, we&apos;d love to hear from
                you.
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
                <Image
                  alt="Man talking across a table during a one-on-one meeting."
                  src="/photos/oliver-speaking-in-1on1-meeting.jpeg"
                  width={1280}
                  height={1024}
                  className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-slate-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    alt="Three people seated at a table having a business discussion in a sunlit office."
                    src="/photos/client-meeting-in-modern-office.jpeg"
                    width={1280}
                    height={1024}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt="Woman standing and smiling with a tablet during an informal meeting."
                    src="/photos/maya-holding-tablet-in-casual-meeting.jpeg"
                    width={1280}
                    height={1024}
                    className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt="Woman laughing during a video call, seated on a modern armchair."
                    src="/photos/lindsay-laughing-during-video-call.jpeg"
                    width={1280}
                    height={1024}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-slate-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative bg-cyan-600 text-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <Link
            href="/"
            className="w-42 lg:w-50 mx-auto uppercase text-black flex flex-col items-center justify-center mb-4">
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
            className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {footerNavigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cyan-400 hover:text-white">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
