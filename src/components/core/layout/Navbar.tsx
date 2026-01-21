'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { EncryptedText } from '@/components/core/ui/EncryptedText';

// Add this to your globals.css or keep it here if using tailwind
// The blur and border styles will give it the modern look

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Company', href: '#company' }, // targeting the team section
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`
            pointer-events-auto
            flex items-center justify-between
            w-full max-w-4xl
            px-5 py-3
            rounded-2xl
            transition-all duration-300
            ${
              scrolled
                ? 'bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-sm'
                : 'bg-white/50 backdrop-blur-md border border-gray-100/20'
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.svg" 
                alt="Integrion" 
                width={24} 
                height={24} 
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="font-semibold text-sm tracking-tight text-black">Integrion</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
             <Link href="https://app.integrion.xyz" className="text-xs font-medium text-gray-900 hover:opacity-70">
                Log in
             </Link>
             <div className="w-px h-4 bg-gray-300 mx-1" />
             <button 
                onClick={onCtaClick}
                className="bg-black text-white px-3 py-1.5 rounded-md text-xs font-mono uppercase shadow-[2px_2px_0px_0px] shadow-gray-400 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
             >
                <EncryptedText
                    text="Beta Access"
                    encryptedClassName="text-gray-400"
                    revealedClassName="text-white"
                    revealDelayMs={50}
                />
             </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-1 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6 md:hidden"
          >
             <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Integrion" width={24} height={24} />
                    <span className="font-bold text-lg">Integrion</span>
                 </div>
                 <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                    <XMarkIcon className="w-6 h-6 text-black" />
                 </button>
             </div>
             
             <div className="flex flex-col gap-1 w-full">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link 
                            href={link.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-4 text-2xl font-light border-b border-gray-100"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
             </div>

             <div className="mt-auto flex flex-col gap-4">
                 <Link href="https://app.integrion.xyz" className="w-full text-center py-3 text-sm font-medium border border-gray-200 rounded-lg">
                    Log In
                 </Link>
                 <button 
                    onClick={() => {
                        setMobileMenuOpen(false);
                        if (onCtaClick) onCtaClick();
                    }}
                    className="w-full bg-black text-white py-4 text-sm font-medium rounded-lg shadow-lg"
                 >
                    Request Access
                 </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
