"use client";
import Link from "next/link";
import Image from "next/image";
import Squares from "@/components/Squares";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { EncryptedText } from "@/components/core/ui/EncryptedText";
import { BetaModal } from "@/components/core/layout/BetaModal";
import { headingVariants, listVariants } from "@/components/animations/Animation";
import {motion} from "framer-motion"
import SolutionCard from "./components/cards/SolutionCard";
import HoverVideoPlayer from "@/components/core/ui/HoverVideoPlayer";

// import { Navbar } from "@/components/core/layout/Navbar";
export default function Home() {

  const [menuOpen, setMenuOpen] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center  max-w-6xl mx-auto w-full  border-l border-r border-gray-300 border-dotted gap-24">
      {/* <Squares
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
                className="hover:font-medium hover:underline nav uppercase"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/contact"
                className="hover:font-medium hover:underline nav uppercase"
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
                    className="hover:font-medium hover:underline nav uppercase font-semibold tracking-tight"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:font-medium hover:underline nav uppercase font-semibold tracking-tight"
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

            <h2 className="text-6xl font-bold md:w-3/4 w-full ">
              AI-powered testing for mordern infrastructure
            </h2>
            <p className="text-lg font-light md:w-3/4">
              Integrion deploys infra-native agents that hunt bugs, stress-test
              reliability, and validate backend logic—so engineers ship safer,
              faster, and with confidence.
            </p>
            <button
              className="bg-black text-white px-4 py-3 rounded-sm primary-button nav uppercase tracking-tight font-medium"
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
       
      </div> */}

      <section className="flex flex-col justify-center items-center gap-4 h-screen px-5 w-full">
        <div className="flex flex-col justify-center items-center gap-5 w-full min-h-screen md:w-2/3  ">
          <motion.h1 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-5xl font-bold text-center text-black w-full">
            Your Autonomous QA Engineer — Writing Tests Before Bugs Exist
            </motion.h1>
          <motion.p 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-lg text-center font-normal text-gray-700 md:w-3/4">
            Integrion is an autonomous AI QA engineer that writes, runs, and maintains tests for critical code paths — automatically.
          </motion.p>
          <motion.button 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          onClick={() => setModalOpen(true)}
          className="px-4 py-3 text-white bg-black  text-sm font-mono uppercase shadow-[3px_3px_0px_0px] shadow-gray-600 hover:shadow-none transition-shadow duration-300">
         <EncryptedText
        text=" [ Request for Beta Access ]"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={120}
      />
          </motion.button>
          {/* <span className="font-mono text-sm text-gray-400">14-day free trial</span> */}
          {/* <div className="w-full">
 <HoverVideoPlayer
      videoSrc="/demo.mp4"
      thumbnailSrc="/temp.png"
    />
          </div> */}
         
        </div>
      </section>
      <section className="flex flex-col justify-center items-start gap-4 w-full  p-10 border-t border-dotted border-gray-300">
          <motion.h2
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className=" text-lg font-medium text-black nav">
            <EncryptedText
              text="[ THE PROBLEM ]"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-black text-white"
              revealDelayMs={20}
            />
          </motion.h2>
          <motion.h5
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-black text-4xl font-semibold">Testing Is Still Too Manual — Even With AI</motion.h5>
          <motion.p 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-gray-700 text-lg font-light md:w-full leading-10">
          Most testing frameworks — even AI-powered ones — still rely on developers to manually write, review, or trigger tests.
          <br/>
          By the time tests exist [ : ]
          </motion.p>
          <ul className="list-inside text-gray-700 text-lg font-light md:w-full leading-10 space-y-3">
            <motion.li 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="space-x-3 text-black bg-gray-100 shadow-[2px_2px_0px_0px] shadow-gray-400 px-1 py-2">
              <span className="nav text-black text-sm ">
                [↗]
                </span> 
                <span>The wrong code has already been pushed</span>
              </motion.li>
            <motion.li 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="space-x-3 text-black bg-gray-100 shadow-[2px_2px_0px_0px] shadow-gray-400 px-1 py-2">
              <span className="nav text-black text-sm ">
                [↗]
                </span> 
                <span>Bugs are discovered too late</span>
              </motion.li>
            <motion.li 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="space-x-3 text-black bg-gray-100 shadow-[2px_2px_0px_0px] shadow-gray-400 px-1 py-2">
              <span className="nav text-black text-sm ">
                [↗]
                </span> 
                <span>Velocity drops</span>
              </motion.li>
          </ul>
          <motion.p className="text-gray-700 text-lg font-light md:w-full leading-10">
Tests should protect engineers early, not react after damage is done.          </motion.p>
        </section>
      <section className="flex flex-col justify-center items-center gap-4 w-full  p-10 border-t border-dotted border-gray-300">
          <motion.h2
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className=" text-lg font-medium text-black nav">
            <EncryptedText
              text=" [ THE SOLUTION ]"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-black text-white"
              revealDelayMs={20}

            />
          </motion.h2>
          <motion.h5 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-black text-4xl font-semibold flex justify-center items-center gap-3">Meet Integrion 
            <Image src="/logo.svg" alt="AI Robot" width={50} height={50} className="inline-block ml-2"/>
            Your Autonomous QA Engineer</motion.h5>
        <motion.p
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="text-lg text-gray-700 font-light md:w-2/3 leading-normal text-center">Integrion works alongside your codebase and CI pipeline to automatically write, run, and maintain tests for critical code paths — catching breaking changes before they reach production.</motion.p>

      
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4 w-full mt-8">
          <SolutionCard 
            title="Identify Critical Logic" 
            description="Integrion analyzes your codebase to understand business-critical paths — APIs, data transformations, auth flows, and state-changing logic — not just surface-level code."
            size="large"
          />
          <SolutionCard 
            title="Write Meaningful Tests" 
            description="Tests are generated autonomously and tied directly to real logic and behavior, not boilerplate or shallow coverage metrics."
            size="large"
          />
          <SolutionCard 
            title="Run on Every Change" 
            description="Tests execute automatically on every commit and pull request, ensuring continuous validation as your code evolves."
            size="tall"
          />
          <SolutionCard 
            title="Flag Breaking Behavior Early" 
            description="Breaking changes are detected immediately, before they reach production — giving engineers fast, actionable feedback."
            size="large"
          />
          <SolutionCard 
            title="Suggest Fixes With Context" 
            description="When something breaks, Integrion explains why and suggests fixes using full code context — not generic error messages."
            size="tall"
          />
        </div>
        </section>

       <section className="flex flex-col justify-center items-center gap-4 w-full  p-10 border-t border-dotted border-gray-300">
          <motion.h2
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className=" text-lg font-medium text-black nav">
            <EncryptedText
              text=" [ THE 10X TEAM ]"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-black text-white"
              revealDelayMs={20}

            />
          </motion.h2>
          <motion.h5 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-black text-4xl font-semibold flex justify-center items-center gap-3">
            Built for Teams That Move Fast And Care About Code Quality
          </motion.h5>
        <motion.p
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="text-lg text-gray-700 font-light md:w-2/3 leading-normal text-center">Integrion gives fast-moving teams confidence that critical code is continuously tested, validated, and protected as they ship.</motion.p>

      
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4 w-full mt-8">
          <div className="text-gray-700 text-sm nav">

          </div>
        </div>
        </section>

    </main>
  );
}
