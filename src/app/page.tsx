"use client";
import Link from "next/link";
import Image from "next/image";
import Squares from "@/components/Squares";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { BetaModal } from "@/components/core/layout/BetaModal";
// import { Navbar } from "@/components/core/layout/Navbar";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className=" relative flex flex-col h-screen items-stretch justify-center">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#000"
        className="absolute inset-0"
      />
      <div className="z-50">
        {modalOpen && <BetaModal onClick={() => setModalOpen(false)} />}
        <div className="flex flex-col h-screen justify-between items-start gap-3  py-5">
          {/*<Navbar />*/}
          <div className="relative flex  justify-between items-center bg-white  w-9/10 py-5 px-5 mx-auto gap-2 tag rounded-sm">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Integrion Logo"
                width={40}
                height={50}
              />
              <span className="text-black text-xl">Integrion</span>
            </div>

            <div className=" justify-center items-center gap-4 hidden md:flex">
              <Link
                href="/terms-and-conditions"
                className="hover:font-medium hover:underline"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/contact"
                className="hover:font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex justify-center items-center md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? (
                  <XMarkIcon className="size-7 text-black cursor-pointer" />
                ) : (
                  <Bars3Icon className="size-7 text-black cursor-pointer" />
                )}
              </button>
            </div>
            {!menuOpen && (
              <div className="absolute  w-full -bottom-26 left-0 bg-white -z-10 p-5 tag md:hidden">
                <div className="flex flex-col justify-center items-start gap-2">
                  <Link
                    href="/about"
                    className="hover:font-medium hover:underline"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:font-medium hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-start gap-3 w-9/10  md:px-20 px-5">
            <div>
              {menuOpen ? (
                <span className="inline-block gap-2 uppercase text-black bg-white rounded-sm backdrop-blur-lg border border-white/20 text-sm px-3 py-1">
                  <Image
                    src="/Black-1.png"
                    alt="E2B Startup Member Logo"
                    width={150}
                    height={50}
                  />
                </span>
              ) : null}
            </div>

            <h2 className="text-6xl font-bold md:w-3/4 w-full">
              AI-powered testing for mordern infrastructure
            </h2>
            <p className="text-lg font-light md:w-3/4">
              Integrion deploys infra-native agents that hunt bugs, stress-test
              reliability, and validate backend logic—so engineers ship safer,
              faster, and with confidence.
            </p>
            <button
              className="bg-black text-white px-4 py-3 rounded-sm primary-button hover:bg-white"
              onClick={() => setModalOpen(true)}
            >
              Join Beta Waitlist
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between  items-start md:items-center w-full py-5 md:px-20 px-5 mx-auto">
            <div className="flex justify-center items-center gap-4">
              <Link href="/about" className="hover:font-bold">
                contact@integrion.xyz
              </Link>
            </div>
            <div className="flex justify-center items-center gap-4">
              &copy; {new Date().getFullYear()} Integrion. All rights reserved.
            </div>
          </div>
        </div>
        {/*<Navbar />*/}
      </div>
    </main>
  );
}
