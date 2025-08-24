import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Home() {
  return (
   <main className="mx-20 border-l border-r  border-l-gray-400 border-r-gray-500">
    <div className="border-b border-t border-t-gray-500 border-b-gray-500">
 <div className="flex flex-col items-start justify-center h-screen gap-2 p-10">
      <span className="text-gray-500 border border-gray-500 px-4 py-1 mb-4 text-sm">SPONSORED BY E2B FOR STARTUPS</span>
     <h1 className="text-white text-6xl tracking-wide w-3/4">
      The AI-powered way to test backend and infra natively
     </h1>
     <p className="text-gray-300 text-lg w-1/2">Infra-native AI agents hunt bugs, test reliability, and optimize performance — so engineers ship safely and fast</p>
     <div className="flex items-center justify-center gap-6 mt-6">
      <button className="bg-white text-[var(--primary)] text-sm font-medium px-4 py-3 cursor-pointer">Get Started</button>
      <button className="flex justify-center items-center gap-2 text-white border  border-white  text-sm font-medium px-4 py-3 cursor-pointer">Request A Demo 
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
      <div className="flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl text-white font-light w-3/4 text-center">Your AI safety net for backend and infrastructure code</h2>
        <p className="text-gray-300 text-base text-center">Smarter testing,stack-aware checks, and safer merges -all on autopilot</p>
      </div>
   </div>
   </main>
  );
}
