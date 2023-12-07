'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedDarkMode = localStorage.getItem('isDark');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    } else {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <nav className="navbar md:justify-center justify-around">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Info</a>
              <ul className="p-2">
                <li>
                  <Link href="/#estimator">Price Estimator</Link>
                </li>
                <li>
                  <Link href="/#colors">Available Colors</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery">Our Work</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl gap-1">
          Color<span className="text-accent">works</span>
        </Link>
      </div>
      <ul className="navbar-center hidden text-lg lg:flex gap-10">
        <li>
          <Link href="/#estimator">Price Estimator</Link>
        </li>
        <li>
          <Link href="/#colors">Available Colors</Link>
        </li>

        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Our Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-end top-5 right-5">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="darkwork"
            className="toggle theme-controller"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
