"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[rgba(84,18,18,0.2)] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Yori School
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/programs" className="hover:underline underline-offset-4">Programs</Link>
          <Link href="/events" className="hover:underline underline-offset-4">Events</Link>
          <Link href="/news" className="hover:underline underline-offset-4">News</Link>
          <Link href="/admissions" className="hover:underline underline-offset-4">Admissions</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-[rgba(84,18,18,0.1)] transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(84,18,18,0.2)] bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-4 text-sm">
            <Link 
              href="/about" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/programs" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              href="/events" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/news" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/admissions" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              href="/contact" 
              className="hover:underline underline-offset-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}