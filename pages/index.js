import Head from "next/head";
import FAQ from "../components/faq";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Austin Toastmasters - Improve Your Public Speaking Skills</title>
        <meta
          name="description"
          content="Join Austin Toastmasters at ATX Speech Garage to enhance your public speaking and leadership skills. Weekly meetings in East Austin. Drop-ins welcome!"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Austin Toastmasters - Improve Public Speaking Skills | ATX Speech Garage"
        />
        <meta
          property="og:description"
          content="Join Austin Toastmasters at ATX Speech Garage to enhance your public speaking and leadership skills. Weekly meetings in East Austin. Drop-ins welcome!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austintoastmasters.com" />
        <meta
          property="og:image"
          content="https://austintoastmasters.com/tm2.png"
        />
      </Head>

      <header className="w-full bg-black border-b border-gray-400 p-4 py-4 flex justify-between items-center">
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
        <nav className="hidden md:block text-xl">
          <ul className="flex items-center space-x-9 mr-4">
            <li>
              <a
                href="#meeting-info"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Meeting Info
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:text-gray-300 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
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
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#meeting-info"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Meeting Info
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:text-gray-300 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
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
      )}

      <main className="flex flex-col items-center justify-center px-4 py-8 sm:py-12 max-w-4xl mx-auto bg-black text-gray-200">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mt-5 mb-8 sm:mb-12 text-gray-200">
          Welcome to Austin Toastmasters 😎
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-center mt-4 text-green-500">
            (Drop ins welcome)
          </p>
        </h1>

        <section id="meeting-info" className="w-full mb-6">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              MEETING INFO
            </h2>
            <p className="text-lg mb-4">
              <strong className="text-gray-100">Club Name:</strong>{" "}
              <a
                href="https://www.toastmasters.org/Find-a-Club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Speech Garage
              </a>
            </p>
            <p className="text-lg mb-4">
              <strong className="text-gray-100">Location:</strong>{" "}
              <a
                href="https://www.google.com/maps?s=web&lqi=ChBob3VuZHN0b290aCBjYWZlIgOIAQFIqqyVz6qvgIAIWhoQABABGAAYASIQaG91bmRzdG9vdGggY2FmZZIBC2NvZmZlZV9zaG9wqgFPEAEqFCIQaG91bmRzdG9vdGggY2FmZSgAMh8QASIb38m-92Vgn3XlNEaL2NYQSqb3bw4IVlLATpZEMhQQAiIQaG91bmRzdG9vdGggY2FmZeABAA&vet=12ahUKEwj9-9SNt5WJAxWMl-4BHSFbPMoQ1YkKegQILRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KSkfROXotUSGMdpiI_8pTDhV&daddr=2823+East+MLK+Blvd,+2823+E+Martin+Luther+King+Jr+Blvd+%23101,+Austin,+TX+78702"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Houndstooth Coffee on MLK
              </a>
            </p>
            <p className="text-lg">
              <strong className="text-gray-100">Time:</strong> Saturday 1:00 pm
              - 2:00 pm
            </p>
          </div>
        </section>

        <section id="about" className="w-full mb-6">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md flex flex-col items-center">
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
                ABOUT
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Hey, my name is Josh. I started going to Toastmasters in 2018. I
                used to have a speech impediment that I worked through from
                going to Toastmasters. And now I run this little club in East
                Ausitn. Come check us out. :)
              </p>
            </div>
            <div className="w-full mb-6">
              <Image
                src="/profile.jpg"
                alt="Josh's profile picture"
                width={600}
                height={900}
                className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="w-full mb-6">
          <FAQ />
        </section>
        <footer className="w-full text-center  mt-12 text-gray-400 text-lg">
          🦄 Built by{" "}
          <a
            href="https://joshmay.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Josh May
          </a>
        </footer>
      </main>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-0"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-black border-gray-400 border p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-white">
              Contact Us
            </h2>
            <p className="mb-4 sm:mb-8 text-gray-300 text-lg sm:text-xl">
              Email:{" "}
              <a
                href="mailto:hey@joshmay.xyz"
                className="text-blue-400 hover:underline break-all"
              >
                hey@joshmay.xyz
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
