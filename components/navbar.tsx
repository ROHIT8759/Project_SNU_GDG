"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Image src="/images/water.png" alt="Clean Water Logo" width={50} height={50} />
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-500 transition-colors ${pathname === "/" ? "text-blue-500 font-semibold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-blue-500 transition-colors ${pathname === "/about" ? "text-blue-500 font-semibold" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/our-ideas"
              className={`hover:text-blue-500 transition-colors ${pathname === "/our-ideas" ? "text-blue-500 font-semibold" : ""}`}
            >
              Our Ideas
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-blue-500 transition-colors ${pathname === "/contact" ? "text-blue-500 font-semibold" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/kaBo2Q4aLyvLgSqr7"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
