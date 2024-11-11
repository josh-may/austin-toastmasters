import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-gray-400 p-4 flex justify-between items-center">
      <div className="flex items-center ml-1">
        <Image
          src="/tm2.png"
          alt="Austin Toastmasters Logo"
          width={60}
          height={60}
        />
        <Link href="/" className="text-white text-xl ml-3 font-semibold">
          Austin Toastmasters
        </Link>
      </div>
      <nav className="text-xl">
        <ul className="flex items-center space-x-10 mr-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-black border-gray-400 border p-10 rounded-xl shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
            <p className="mb-8 text-gray-300 text-xl">
              Email:{" "}
              <a
                href="mailto:hey@joshmmay.com"
                className="text-blue-400 hover:underline"
              >
                hey@joshmmay.com
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
