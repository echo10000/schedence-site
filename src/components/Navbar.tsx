"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:echo@schedence.xyz?subject=Schedence%20Early%20Access"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span>Join Early Access</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="mailto:echo@schedence.xyz?subject=Schedence%20Early%20Access"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg shadow-sm transition-all"
              >
                <span>Join Early Access</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
