import Silk from "@/components/Silk";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col justify-center items-center p-10">
      <div className="flex justify-start items-center w-full">
        <button className="bg-black text-white px-4 py-3 rounded-sm flex justify-center items-center gap-2">
          <Link href="/" className=" flex justify-center items-center gap-2">
            <ArrowLeftIcon className="w-6 h-6" />
            Return home
          </Link>
        </button>
      </div>

      <div className="relative flex flex-col h-[40vh] items-stretch justify-center w-4/5 rounded-sm p-10">
        <Silk
          speed={5}
          scale={1}
          color="#2e30c7"
          noiseIntensity={1.5}
          rotation={0}
          className="relative inset-0 rounded-sm"
        />
        <div className="z-50 absolute w-full">
          <div className="flex flex-col justify-center items-center w-full ">
            <h1 className="text-4xl font-bold text-white tracking-wider">
              Terms and Conditions
            </h1>
            <p className="text-white text-center w-3/4">
              Please read these Terms and Conditions carefully before using our
              website.
            </p>
            <span className="text-white italic mt-5">
              Last Updated: Friday, September 2, 2025.
            </span>
          </div>
        </div>
      </div>
      <article className="">
        <span className="text-sm italic font-bold">
          Welcome to Integrion. By accessing or using our platform, you agree to
          be bound by these Terms & Conditions. If you do not agree, please do
          not use our services.
        </span>
        <div className="mt-5">
          <h2 className="text-xl font-bold">1. Eligibility</h2>
          <p>You must be at least 18 years old.</p>
        </div>
        <div className="mt-5 space-y-3">
          <h2 className="text-xl font-bold">2. Use of Services</h2>
          <ol>
            <p>You may use Integrion for lawful purposes only.</p>
          </ol>
          <ol>
            <p>
              You agree not to misuse or attempt to interfere with the security,
              integrity, or availability of the platform.
            </p>
          </ol>
          <ol>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </ol>
        </div>
        <div className="mt-5 space-y-3">
          <h2 className="text-xl font-bold">3. Account and Registration</h2>
          <ol>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>
          </ol>
          <ol>
            <p>
              You agree to provide accurate and up-to-date information when
              registering
            </p>
          </ol>
        </div>
        <div className="mt-5 space-y-3">
          <h2 className="text-xl font-bold">4. Intellectual Property</h2>
          <ol>
            <p>
              All content, branding, logos, and features on Integrion belong to
              us unless otherwise stated.
            </p>
          </ol>
          <ol>
            <p>
              You may not copy, modify, or distribute our content without prior
              written permission
            </p>
          </ol>
        </div>
      </article>
    </main>
  );
}
