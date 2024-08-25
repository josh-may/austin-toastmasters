import Head from "next/head";
import FAQ from "../components/faq";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Austin Toastmasters - ATX Speech Garage</title>
        <meta
          name="description"
          content="A place where normies practice public speaking."
        />
        <link rel="icon" href="/favicon.ico" />
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
        <nav className="text-xl">
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
      </header>

      <main className="flex flex-col items-center justify-center px-4 py-12 max-w-4xl mx-auto bg-black text-gray-200">
        <h1 className="text-5xl md:text-7xl font-bold text-center mt-5 mb-12 text-gray-200">
          Welcome to Austin Toastmasters 😎
          <p className="text-2xl md:text-4xl font-semi text-center mt-4 text-green-500">
            (Drop ins welcome)
          </p>
        </h1>

        <section id="meeting-info" className="w-full mb-6">
          <div className="border-gray-400 border p-6  shadow-md">
            <h2 className="text-2xl  md:text-3xl font-bold mb-6 text-gray-200">
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
                ATX Speech Garage
              </a>
            </p>
            <p className="text-lg mb-4">
              <strong className="text-gray-100">Location:</strong>{" "}
              <a
                href="https://www.google.com/maps/dir//google+maps+2823+E+MLK+Jr.+Blvd,+Austin+TX/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8644b5e8e5441f29:0x12af097b1c42ba15?sa=X&ved=1t:3061&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                2823 E MLK Jr. Blvd, Austin TX
              </a>
            </p>
            <p className="text-lg">
              <strong className="text-gray-100">Time:</strong> Saturday 2:30 pm
              - 3:30 pm
            </p>
          </div>
        </section>

        <section id="about" className="w-full mb-6">
          <div className="border-gray-400 border p-6 shadow-md flex flex-col items-center">
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">
                ABOUT
              </h2>
              <p className="text-lg mb-4">
                Hey, my name is Josh. I started going to Toastmasters in 2018. I
                used to have a speech impediment that I worked through by going
                to Toastmasters. And now I run this little club in East Ausitn.
                Come check us out. :)
              </p>
            </div>
            <div className="w-full mb-6">
              <Image
                src="/profile.jpg"
                alt="Josh's profile picture"
                width={300}
                height={450}
                className="rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="w-full mb-6">
          <FAQ />
        </section>
      </main>
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
                href="mailto:hey@joshmay.xyz"
                className="text-blue-400 hover:underline"
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
