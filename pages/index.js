import Head from "next/head";
import FAQ from "../components/faq";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
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

      <main className="flex flex-col items-center justify-center px-4 py-8 sm:py-8 w-full max-w-5xl mx-auto bg-black text-gray-200 min-w-[320px]">
        <header className="w-full max-w-5xl mx-auto bg-black min-w-[320px] mb-4">
          <div className="border-gray-400 border p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-semibold">
                Austin Toastmasters
              </Link>
            </div>
            <nav className="hidden md:block text-xl">
              <ul className="flex items-center space-x-9">
                <li>
                  <a
                    href="#meeting-info"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Info
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
          </div>
        </header>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black text-white w-full max-w-5xl mx-auto min-w-[320px]">
            <div className="border-gray-400 border p-4">
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
            </div>
          </nav>
        )}
        <section className="w-full mb-6">
          <div className="border-gray-400 border p-6 sm:p-8 shadow-md">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mt-6 mb-10 sm:mb-10 text-gray-200">
              Welcome to Austin Toastmasters 😎
              <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center mt-5 text-green-500">
                (Drop ins welcome)
              </p>
            </h1>
          </div>
        </section>

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
                The Speech Garage
              </a>
            </p>
            <p className="text-lg mb-4">
              <strong className="text-gray-100">Location:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/anexD6tD4arH76sa8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Civil Goat on Manor
              </a>
            </p>
            <p className="text-lg">
              <strong className="text-gray-100">Time:</strong> Tuesday 6:30 pm -
              7:30 pm
            </p>
          </div>
        </section>
        {/* New What is Toastmasters section */}
        <section className="w-full mb-6">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              WHAT IS TOASTMASTERS?
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Toastmasters is a non-profit educational organization that teaches
              public speaking and leadership skills through a worldwide network
              of clubs. In our meetings, members learn by speaking to groups and
              working with others in a supportive environment. You&apos;ll learn
              to:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg mb-4 ml-4">
              <li className="mb-2">
                Give better prepared and impromptu speeches
              </li>
              <li className="mb-2">
                Effectively lead meetings and participate in group discussions
              </li>
              <li className="mb-2">
                Practice active listening and provide constructive feedback
              </li>
              <li>Build self-confidence and communication skills</li>
            </ul>
          </div>
        </section>

        {/* How are meetings run section */}
        <section className="w-full mb-6">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              HOW ARE MEETINGS RUN?
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Our meetings follow a structured format that includes three main
              components:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">
                  Prepared Speeches
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Members deliver planned speeches from Toastmasters&apos;
                  educational program, ranging from 5-7 minutes. These speeches
                  help develop specific speaking skills and build confidence.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">
                  Table Topics
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Impromptu speaking session where participants give 1-2 minute
                  responses to random questions. It&apos;s great practice for
                  thinking on your feet and speaking without preparation.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">
                  Speech Evaluations
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Each prepared speech receives constructive feedback from an
                  assigned evaluator, helping speakers understand their
                  strengths and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Story section */}
        <section id="about" className="w-full mb-6">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              WHAT&apos;S THE STORY OF THIS GROUP?
            </h2>

            <p className="text-base sm:text-lg mb-4">
              This is a brand new club that started in 2024. I&apos;m Josh, the
              founder, and I started this club because I saw a need for quality
              public speaking groups in East Austin. My journey with
              Toastmasters began when I was working through a stutter, and the
              organization helped me overcome it. Now, I want to create that
              same supportive environment for others in our community.
            </p>
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
        <footer className="w-full py-3 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4 mt-6">
            <a
              href="https://www.instagram.com/austin_toastmasters/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570084196984"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/atxtoastmasters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>
          <div className="text-sm">
            Built by{" "}
            <a
              href="https://joshmmay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Josh May
            </a>
          </div>
        </footer>
      </main>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-0 min-w-[320px]"
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
                href="mailto:hey@joshmmay.com"
                className="text-blue-400 hover:underline break-all"
              >
                hey@joshmmay.com
              </a>
            </p>
            <p className="mb-4 sm:mb-8 text-gray-300 text-lg sm:text-xl">
              Phone (prefer text):{" "}
              <a
                href="tel:774-275-4205"
                className="text-blue-400 hover:underline"
              >
                774-275-4205
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
