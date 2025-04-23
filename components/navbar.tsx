// navbar.tsx
"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <h1 className="text-3xl font-bold">Wahyudin Sapari</h1>
        {/* Menu Navbar */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:underline">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
