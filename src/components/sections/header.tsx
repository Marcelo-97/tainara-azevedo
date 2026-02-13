"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, BookmarkCheck } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Homepage", href: "/", active: true },
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Our Services", href: "/services" },
        { name: "Service Detail", href: "/service-detail" },
        { name: "Appointment", href: "/appointment" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "Pricing", href: "/pricing" },
        { name: "Team", href: "/team" },
        { name: "Blogs", href: "/blogs" },
        { name: "Blog Detail", href: "/blog-detail" },
        { name: "FAQs", href: "/faqs" },
        { name: "Error 404", href: "/error-404" },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
      style={{ minHeight: "102px" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/Main-Logo-1.png"
                alt="Nuro Logo"
                width={133}
                height={63}
                className="h-[63px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex items-center space-x-1 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center text-[18.4px] font-semibold py-7 px-2 transition-colors duration-200 ${
                      link.active
                        ? "text-brand-blue"
                        : "text-brand-dark hover:text-brand-blue"
                    }`}
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-[220px] bg-white shadow-[0_0_24px_rgba(0,0,0,0.1)] rounded-b-[25px] py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <ul className="list-none p-0 m-0">
                        {link.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block px-6 py-3 text-[18.4px] text-brand-dark hover:text-brand-blue hover:bg-gray-50 transition-colors"
                              style={{ fontFamily: "Nunito, sans-serif" }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact-us"
              className="flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-brand-blue transition-all duration-300 hover:scale-105"
            >
              <BookmarkCheck size={18} />
              Get Quotes
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-brand-blue bg-brand-blue/10 rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-80 h-full bg-white transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d006bdb-69fd-4590-a131-c6d4ed9d74be-nuro-widagdos-net/assets/images/Main-Logo-1.png"
              alt="Nuro Logo"
              width={120}
              height={50}
              className="h-auto w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-brand-blue"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto h-[calc(100vh-100px)]">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block text-lg font-bold ${
                      link.active ? "text-brand-blue" : "text-brand-dark"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <ul className="mt-2 ml-4 space-y-2 border-l-2 border-brand-soft-pink pl-4">
                      {link.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block text-gray-600 font-medium py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-4 rounded-full font-bold w-full hover:bg-brand-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookmarkCheck size={20} />
                Get Quotes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;