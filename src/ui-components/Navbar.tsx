import Link from 'next/link';
import Logo from './Logo';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const pathname = usePathname();

  const linkClasses = (path: string) => {
    const isActive = pathname === path;
    return `px-4 py-2 rounded-full transition-all duration-300 relative ${
      isActive 
        ? 'text-pink-400' 
        : 'hover:text-cyan-300'
    }`;
  };

  const activeBorder = (path: string) => {
    return pathname === path 
      ? `before:absolute before:-inset-x-3 before:inset-y-0 before:rounded-full 
         before:border-2 before:border-pink-600 before:content-[""]`
      : '';
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 font-colvetica">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Logo />
          <span className="ml-2 text-2xl font-bold text-cyan-300 group-hover:text-cyan-400 transition-colors duration-300">VISIUI</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className={`${linkClasses('/')} ${activeBorder('/')}`}>
            Home
          </Link>
          <Link href="/services" className={`${linkClasses('/services')} ${activeBorder('/services')}`}>
            Services
          </Link>
          <Link href="/portfolio" className={`${linkClasses('/portfolio')} ${activeBorder('/portfolio')}`}>
            Portfolio
          </Link>
          <Link href="/contact" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Contact
            <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
