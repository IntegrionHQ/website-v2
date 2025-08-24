import { ArrowRightIcon,LinkIcon } from "@heroicons/react/24/outline";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Image from "next/image";

import Features from "@/components/core/Features";
import Workflow from "@/components/core/Workflow";
import PricingCard from "@/components/core/PricingCard";


export default function Home() {






  return (
   <main className="mx-20 border-l border-r  border-l-gray-400 border-r-gray-500 space-y-20">
    <div className="border-b border-t border-t-gray-500 border-b-gray-500">
 <div className="flex flex-col items-start justify-center h-screen gap-2 p-10">
      <span className="text-gray-500 border border-gray-500 px-4 py-1 mb-4 text-sm uppercase">
        <Image src="/E2B.svg" alt="E2B Logo" width={80} height={20} className="inline-block mr-2"/>
        E2B Startups Program Member</span>
     <h1 className="text-white text-6xl tracking-wide w-3/4">
      The AI-powered way to test backend and infra natively
     </h1>
     <p className="text-gray-300 text-lg w-1/2 font-graphik">Infra-native AI agents hunt bugs, test reliability, and optimize performance — so engineers ship safely and fast</p>
     <div className="flex items-center justify-center gap-6 mt-6">
      <button className="secondary-button bg-white text-[var(--primary)] text-sm font-medium px-4 py-3 cursor-pointer">Get Started</button>
      <button className="primary-button flex justify-center items-center gap-2 text-white border  border-white  text-sm font-medium px-4 py-3 cursor-pointer">Request A Demo 
      <ArrowRightIcon className="w-3 h-3"/>
    
      </button>
     </div>
    
    </div>
     {/* <div className="relative mt-20 w-5/6 mx-auto">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div> */}
    </div>
   <div className="border-b border-t border-t-gray-500 border-b-gray-500">
      <div className="flex flex-col justify-center items-center gap-2 p-10">
        <h2 className="text-4xl text-white font-normal w-3/4 text-center">Your AI safety net for backend and infrastructure code</h2>
        <p className="text-gray-300 text-base text-center font-graphik">Smarter testing,stack-aware checks, and safer merges -all on autopilot</p>
        <div className="flex justify-center items-center mt-10">
        <Features title="Tests that write themselves" description="Skip the boilerplate. Integrion generates realistic, scenario-driven tests that evolve with every commit — expanding coverage without slowing you down." icon={<svg width="30px" height="30px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M16 9.5L16.6923 8M22 9.5L21.3077 8M21.3077 8L19 3L16.6923 8M21.3077 8H16.6923" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13 10H10V3L2 14H8V21L14 12.75" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>} />
        <Features title="Code + Infra, Checked as One" description="Your app doesn’t run in a vacuum. Integrion analyzes both code and infrastructure — schemas, APIs, configs — to catch issues most linters or test suites miss." icon={<svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 4V2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 4V2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 4V2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 20V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 20V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 20V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 17H22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 12H22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 7H22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 17H2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 12H2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 7H2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>} />
        <Features title="Regression Proof PRs" description="Push with confidence. Every pull request is run through deep regression and reliability checks, surfacing breaking changes before they sneak into production." icon={<svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8.5 11.5L11.5 14.5L16.5 9.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 18L3.13036 4.91253C3.05646 4.39524 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.9435 4.39524 20.8696 4.91252L19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>} />
        </div>
      </div>
   </div>
   <div className="border-b border-t border-t-gray-500 border-b-gray-500">
    <div className="flex flex-col justify-center items-center gap-2 p-10">
      <h2 className="text-4xl text-white font-normal w-3/4 text-center">Ship smarter in seconds</h2>
      <p className="text-gray-300 text-base text-center font-graphik">Turn every push into a review-ready PR with AI-driven testing, risk validation, and merge confidence</p>
      <div className="w-full flex justify-center mt-10">
        <Workflow />
      </div>
    </div>
   </div>
   <div className="border-b border-t border-t-gray-500 border-b-gray-500">
    <div className="flex flex-col justify-center items-center gap-2 p-10">
      <h2 className="text-4xl text-white font-normal w-3/4 text-center">Pricing</h2>
      <p className="text-gray-300 text-base text-center font-graphik">Built for speed, safety, and seamless integration into the way you already ship code.</p>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 mt-10">
        <PricingCard
          tag="Free Plan"
          subtitle="For hobby and indie devs"
          amount="0"
          features={[
            "Unlimited public repos",
            "Basic AI test generation",
            "Community support",
          ]}
          CTA={<button className="secondary-button bg-white text-[var(--primary)] text-sm font-medium px-4 py-3 cursor-pointer w-full">Get started for free</button>}
        />
        <PricingCard
          tag="Pro Plan"
          subtitle="For growing teams and startups"
          amount="29"
          features={[
            "Unlimited private repos",
            "Advanced AI test generation",
            "Priority email support",
            "Regression checks",
          ]}
          CTA={<button className="secondary-button bg-white text-[var(--primary)] text-sm font-medium px-4 py-3 cursor-pointer w-full">Upgrade to pro</button>}
        />
        <PricingCard
          tag="Enterprise"
          subtitle="For large orgs & custom needs"
          amount="Custom"
          features={[
            "Custom integrations",
            "Dedicated AI agents",
            "SLA & onboarding",
            "Premium support",
          ]}
          CTA={<button className="primary-button flex justify-center items-center gap-2 text-white border  border-white  text-sm font-medium px-4 py-3 cursor-pointer w-full">Contact Sales</button>}
        />
      </div>
    </div>
   </div>
   <div className="border-b border-t border-t-gray-500 border-b-gray-500">
    <div className=" w-full flex  justify-between items-center gap-2 p-10">
      <div className="w-1/2 flex flex-col justify-center items-start gap-2">
<h2 className="text-4xl text-white font-normal  ">We're partnering with forward-thinking engineering teams</h2>
      <p className="text-gray-300 text-base  font-graphik">Be among the first to shape the future of test automation. Join our early access program and help us build the tool every backend and infrastructure engineer has been waiting for.</p>
            <button className="primary-button  mt-3 flex justify-center items-center gap-2 text-white border  border-white  text-sm font-medium px-4 py-3 cursor-pointer">
              Request Early Access
               <ArrowRightIcon className="w-3 h-3"/>
</button>
      </div>
      <div className="w-1/2">

      </div>
    </div>
   </div>
   </main>
  );
}
