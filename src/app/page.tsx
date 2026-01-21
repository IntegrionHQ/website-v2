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
import ScrollBaseAnimation from "@/components/core/ui/MarqueeTextScroll";
import { PricingCard } from "./components/cards/PricingCard";

import { Navbar } from "@/components/core/layout/Navbar";
// import { Navbar } from "@/components/core/layout/Navbar";
export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="flex flex-col justify-center items-center  max-w-6xl mx-auto w-full  border-l border-r border-gray-300 border-dotted gap-24">
      <Navbar onCtaClick={() => setModalOpen(true)} />
      {modalOpen && <BetaModal onClick={() => setModalOpen(false)} />}
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

      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden border-b border-dotted border-gray-300 py-20">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#e5e5e5"
          hoverFillColor="#f3f4f6"
          className="absolute inset-0 w-full h-full -z-10 opacity-60"
        />

        <div className="flex flex-col items-center gap-8 z-10 max-w-5xl px-6 md:px-0 w-full">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black shadow-[2px_2px_0px_0px] shadow-black text-xs font-mono uppercase tracking-widest text-black"
          >
            <div className="w-2 h-2 bg-black animate-pulse"></div>
            v1.0 Public Beta
          </motion.div>

          <motion.h1
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-center text-black tracking-[-0.03em] leading-[0.95]"
          >
            Your Autonomous <br className="hidden md:block" />
            <span className="text-gray-500">QA Engineer</span>
          </motion.h1>

          <motion.p
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-lg md:text-xl text-center text-gray-600 md:w-2/3 max-w-3xl leading-relaxed font-light"
          >
            Integrion is an AI agent that lives in your codebase. It writes tests,
            maintains them, and catches bugs before you even open a PR.
          </motion.p>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white text-sm font-mono uppercase tracking-wide hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px] hover:shadow-gray-400 transition-all duration-200"
            >
              <EncryptedText
                text="[ Request Access ]"
                encryptedClassName="text-neutral-500"
                revealedClassName="text-white"
                revealDelayMs={100}
              />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* THE PROBLEM SECTION */}
      <section className="relative flex flex-col justify-center items-start gap-4 w-full p-6 md:p-10 border-t border-gray-200 overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <motion.h2
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-lg font-medium text-black nav">
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
            className="text-black text-4xl font-semibold mt-4">Testing Is Still Too Manual — Even With AI</motion.h5>
            <motion.p 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="text-gray-700 text-lg font-light md:w-full leading-relaxed mt-4">
            Most testing frameworks — even AI-powered ones — still rely on developers to manually write, review, or trigger tests.
            <br/>
            By the time tests exist [ : ]
            </motion.p>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={6}
                className="bg-white/50 backdrop-blur-sm border border-gray-200 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition-all duration-300"
              >
                 <span className="nav text-red-600 text-sm uppercase flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                   [ Error Log ]
                 </span>
                 <span className="text-black font-aeonik-light text-lg">The wrong code has already been pushed</span>
              </motion.div>
  
              <motion.div 
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={7}
                className="bg-white/50 backdrop-blur-sm border border-gray-200 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition-all duration-300"
              >
                 <span className="nav text-amber-600 text-sm uppercase flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                   [ Alert ]
                 </span>
                 <span className="text-black font-aeonik-light text-lg">Bugs are discovered too late</span>
              </motion.div>
  
              <motion.div 
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={8}
                className="bg-white/50 backdrop-blur-sm border border-gray-200 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition-all duration-300"
              >
                 <span className="nav text-purple-600 text-sm uppercase flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                   [ Metrics ]
                 </span>
                 <span className="text-black font-aeonik-light text-lg">Velocity drops significantly</span>
              </motion.div>
            </div>
  
            <motion.p className="text-gray-700 text-lg font-light md:w-full leading-10 mt-8 border-l-2 border-dashed border-gray-300 pl-4">
              Tests should protect engineers early, not react after damage is done.
            </motion.p>
          </div>
        </section>

      {/* THE SOLUTION SECTION */}
      <section className="relative flex flex-col justify-center items-center gap-4 w-full p-6 md:p-10 border-t border-gray-200">
           {/* Background Grid Pattern - Fainter here */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
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
            className="text-black text-4xl font-semibold flex justify-center items-center gap-3 text-center mt-2">
              Meet Integrion 
              <Image src="/logo.svg" alt="AI Robot" width={40} height={40} className="inline-block mx-2"/>
              Your Autonomous QA Engineer
            </motion.h5>
          <motion.p
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-lg text-gray-700 font-light md:w-2/3 leading-normal text-center mb-12">
              Integrion works alongside your codebase and CI pipeline to automatically write, run, and maintain tests for critical code paths — catching breaking changes before they reach production.
          </motion.p>
  
          {/* MODERN GRID LAYOUT - CARDS WITH BORDERS AND GAP */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard 
              title="Identify Critical Logic" 
              description="Integrion analyzes your codebase to understand business-critical paths — APIs, data transformations, auth flows, and state-changing logic — not just surface-level code."
              size="large" // These size props might be less relevant now if handled by grid, but keeping for content
              className="md:col-span-2 lg:col-span-2 row-span-1"
            />
            <SolutionCard 
              title="Write Meaningful Tests" 
              description="Tests are generated autonomously and tied directly to real logic and behavior, not boilerplate or shallow coverage metrics."
              size="large"
              className="md:col-span-2 lg:col-span-2 row-span-1"
            />
            <SolutionCard 
              title="Run on Every Change" 
              description="Tests execute automatically on every commit and pull request, ensuring continuous validation as your code evolves."
              size="tall"
              className="md:col-span-1 lg:col-span-1 row-span-2"
            />
            <SolutionCard 
              title="Flag Breaking Behavior Early" 
              description="Breaking changes are detected immediately, before they reach production — giving engineers fast, actionable feedback."
              size="large"
              className="md:col-span-1 lg:col-span-2 row-span-1"
            />
            <SolutionCard 
              title="Suggest Fixes With Context" 
              description="When something breaks, Integrion explains why and suggests fixes using full code context — not generic error messages."
              size="tall"
               className="md:col-span-2 lg:col-span-1 row-span-1"
            />
          </div>
          </div>
        </section>

       <section className="relative flex flex-col justify-center items-center w-full py-32 bg-zinc-950 border-t border-zinc-800 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
            
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mb-8"
            >
               <EncryptedText
                text="[ THE ECOSYSTEM ]"
                encryptedClassName="text-zinc-600 font-mono text-sm"
                revealedClassName="text-zinc-400 font-mono text-sm"
                revealDelayMs={20}
              />
            </motion.div>

            <motion.h2 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight mb-6"
            >
              Built for <span className="text-zinc-500">Builders</span>
            </motion.h2>
            
            <motion.p
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="text-lg text-zinc-400 font-light max-w-2xl text-center mb-16 leading-relaxed"
            >
               Integrion scales engineering capacity by automating reliability. 
               Whether you&apos;re shipping features or managing platform stability.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 w-full max-w-6xl shadow-2xl shadow-black/50">
               {[
                 { title: "Backend Engineers", desc: "Stop writing boilerplate tests. Let agents handle coverage." },
                 { title: "Frontend Developers", desc: "Catch UI regressions before preview deployments." },
                 { title: "DevOps & SRE", desc: "Automate reliability checks directly in your CI/CD pipelines." },
                 { title: "QA Teams", desc: "Evolve from manual click-testing to overseeing AI test strategies." }
               ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5 + i}
                    className="group relative bg-zinc-900/40 backdrop-blur-sm p-8 hover:bg-zinc-900/80 transition-colors duration-300"
                  >
                     <div className="absolute top-4 right-4 text-zinc-700 opacity-50 group-hover:text-white group-hover:opacity-100 transition-all duration-300 font-mono text-xs">
                        {`0${i+1}`}
                     </div>
                     <h3 className="text-xl font-medium text-white mb-3 group-hover:text-zinc-100">{item.title}</h3>
                     <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">
                        {item.desc}
                     </p>
                     
                     {/* Corner Decoration */}
                     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
               ))}
            </div>

             {/* Stack marquee below grid */}
            <div className="w-full mt-24 pt-10 border-t border-zinc-900/50">
               <p className="text-center text-zinc-600 text-xs font-mono mb-8 uppercase tracking-widest">[ Works with your stack ]</p>
               <ScrollBaseAnimation
                  delay={0}
                  baseVelocity={-1}
                  classname='font-mono text-zinc-500 text-sm mx-4 opacity-70 hover:opacity-100 transition-opacity duration-300'
               >
                  TypeScript • Python • Go • Rust • Java • Docker • Kubernetes • AWS • GitHub Actions • GitLab CI • Jenkins • PostgreSQL • Redis • MongoDB
               </ScrollBaseAnimation>
            </div>
            
          </div>
       </section>

        <section className="relative flex flex-col justify-center items-center gap-4 w-full p-6 md:p-10 border-t border-gray-200">
           {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
            <motion.h2
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-lg font-medium text-black nav"
            >
              <EncryptedText
                text=" [ PRICING ]"
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
              className="text-black text-4xl font-semibold text-center mb-12"
            >
              Simple, Transparent Pricing
            </motion.h5>
  
            {/* PRICING GRID WITH GAP STYLE */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                tier="Starter"
                price="Free"
                description="For individual developers exploring AI-powered testing."
                features={[
                  "Connect 1 repository",
                  "Up to 200 AI-generated test cases/month",
                  "Basic test generation (unit & integration)",
                  "GitHub integration",
                  "Basic failure insights",
                  "Community support",
                ]}
                ctaText="Start for Free"
                onCtaClick={() => setModalOpen(true)}
              />
              <PricingCard
                tier="Pro"
                price="$49/mo"
                description="For small teams who want continuous AI testing integrated into their workflow."
                isPopular={true}
                features={[
                  "Up to 10 repositories",
                  "5,000 AI test cases/month",
                  "AI-generated failure suggestions",
                  "Automated test maintenance",
                  "Slack/Discord alerts",
                  "CI/CD pipeline integrations",
                  "Email support",
                ]}
                ctaText="Get Pro"
                onCtaClick={() => setModalOpen(true)}
              />
              <PricingCard
                tier="Team"
                price="$199/mo"
                description="For growing teams managing multiple environments and infra repos."
                features={[
                   "Unlimited repositories",
                   "20,000 AI test cases/month",
                   "Advanced test generation",
                   "AI test repair (self-healing)",
                   "Root cause analysis",
                   "Branch-level analytics",
                   "Priority email + chat support",
                   "Role-based access control"
                ]}
                ctaText="Get Team"
                onCtaClick={() => setModalOpen(true)}
              />
              <PricingCard
                tier="Enterprise"
                price="Custom Quote"
                description="For enterprises that need scalability, compliance, and private deployments."
                features={[
                   "Custom test limits (unlimited)",
                   "On-premise / private cloud deployment",
                   "SOC2 & GDPR compliant",
                   "AI model fine-tuning",
                   "Integration with enterprise tools",
                   "Dedicated account manager",
                   "Custom pipelines"
                ]}
                ctaText="Contact Sales"
                onCtaClick={() => setModalOpen(true)}
              />
            </div>
  
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start md:items-center mt-12 w-full max-w-4xl border border-dashed border-gray-300 p-6 bg-white/50 backdrop-blur-sm rounded-sm">
               <span className="font-semibold text-black nav uppercase whitespace-nowrap">Add-ons:</span>
               <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-700 w-full justify-between">
                  {/* ... add ons content ... */}
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-black">Extra AI Test Runs</span>
                     <span>$0.002 per additional test</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="font-medium text-black">Custom AI Model</span>
                     <span>Starting at $500/month</span>
                  </div>
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-black">Dedicated Support</span>
                     <span>$200/month</span>
                  </div>
               </div>
            </div>
            </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-4 w-full p-6 md:p-10 border-t border-gray-200">
          <motion.h2
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-lg font-medium text-black nav"
          >
            <EncryptedText
              text=" [ JOIN THE BETA ]"
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
            className="text-black text-4xl font-semibold text-center"
          >
            Join the Integrion Beta
          </motion.h5>
          <motion.p
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="text-lg text-gray-700 font-light md:w-2/3 leading-normal text-center"
          >
            We’re opening a limited beta to work closely with early users and shape the product.
          </motion.p>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="flex flex-col items-start gap-4 mt-4 bg-gray-50 p-6 border border-gray-200 rounded-sm"
          >
            <span className="font-semibold text-black nav uppercase text-sm tracking-wide">Beta Users Get:</span>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-gray-700 font-light">
                <span className="text-black nav">[↗]</span> Free access during beta
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-light">
                <span className="text-black nav">[↗]</span> Direct influence on roadmap
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-light">
                <span className="text-black nav">[↗]</span> Priority access at public launch
              </li>
            </ul>
          </motion.div>

          <motion.button
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            onClick={() => setModalOpen(true)}
            className="mt-6 px-6 py-3 text-white bg-black text-sm font-mono uppercase shadow-[3px_3px_0px_0px] shadow-gray-600 hover:shadow-none transition-shadow duration-300"
          >
             <EncryptedText
              text=" [ Request Beta Access ]"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-white text-black"
              revealDelayMs={120}
            />
          </motion.button>
        </section>

        <section className="flex flex-col justify-center items-center gap-8 w-full p-6 md:p-10 border-t border-dotted border-gray-300">
           <div className="flex flex-col items-center gap-2 text-center my-10">
              <h3 className="text-2xl md:text-4xl font-semibold text-black">
                Tests shouldn’t be an afterthought.
              </h3>
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-400">
                They should be automatic.
              </h3>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10 text-sm nav text-gray-600 border-t border-dotted border-gray-300 pt-10">
              <div className="flex items-center gap-4">
                 <Image src="/logo.svg" alt="Integrion Logo" width={24} height={24} />
                 <span>&copy; {new Date().getFullYear()} Integrion. All rights reserved.</span>
              </div>
              
              <div className="flex gap-6 mt-4 md:mt-0 uppercase">
                 <Link href="/terms-and-conditions" className="hover:text-black">Terms and Conditions</Link>
                 <Link href="/" className="hover:text-black">Privacy Policy</Link>
                 <a href="mailto:contact@integrion.xyz" className="hover:text-black">contact@integrion.xyz</a>
              </div>
           </div>
        </section>

    </main>
  );
}
