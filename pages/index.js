import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook } from "lucide-react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-700 pb-4">
      <button
        className="w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-200">{question}</h3>
        <span className="text-gray-400 text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqItems = [
    {
      question: "How much does a membership cost?",
      answer:
        "You can attend our meetings for free as long as you want and even participate in table topics (impromptu speech) without being a member. However, if you'd like to give prepared speeches, you'll need to become a member. Currently, the membership cost is $60 every 6 months, but this is subject to change. If you have special considerations, please ask the Vice President of Membership.",
    },
    {
      question: "What is a typical toastmasters meeting?",
      answer:
        "Time is important so please always arrive on time before 6:30pm. The daily agenda will be passed out on the tables. You will also find a blank form where you can provide feedback to the speakers. We encourage guests to provide feedback to all speakers! The Toastmaster runs the show and will go over the other key roles that make this club great. There will be 3-4 prepared speeches, table topics, 3-4 evaluators.",
    },
    {
      question: "How do I become a member?",
      answer:
        "Obtain a membership application from the Vice President of Membership, from another officer, or online. Fill it out, turn it in with the appropriate dues, sign up for roles, and you're in! Create an account with easy-speak.org and create a separate account with Toastmasters.org. Take the Pathways assessment and sign up for your 1st speech on Easy Speak. Follow us up Facebook and Twitter. Join us on our Slack channel to hear about the latest location change and communicate last minute cancellations. Confused? Talk with a member for any clarification. We are here to help!",
    },
    {
      question: "Do I need to bring anything before the meeting?",
      answer: "A writing utensil and a positive attitude!",
    },
    {
      question: "How many times can I visit as a guest before joining?",
      answer: "As many times as you'd like.",
    },
    {
      question: "Where do you meet?",
      answer: "In person.",
    },
    {
      question: "Is everyone in your club a good speaker?",
      answer:
        "Absolutely not...but they could be. Sure, we've got talented, long-time members and newer members with prior speaking experience. But the club exists for members at all levels, from knee-knocking, stomach-in-the-throat, \"I think I'm going to faint\" type people to professional speakers polishing their latest material. It's this mix of talents that helps us learn and help each other. And yes, many pros learn every day from Toastmasters feedback and tips. Watching and helping people grow keeps us all coming back.",
    },
    {
      question: "When do I have to give my first speech?",
      answer:
        "Our club lets you move at your own pace. After signing up with Pathways, you can work at your own pace. If you want to reap the full benefits of membership, however, you'll start delivering prepared speeches soon after joining. Everyone's 1st speech is an ice-breaker speech. Tell us more about yourself! Afterwards, you can sign up for a speech every 4 weeks.",
    },
    {
      question: "What do I do for my first speech?",
      answer:
        "The first speech is on a topic you know plenty about - yourself! The basic Competent Communicator Manual provides guidance and direction, and your mentor will also help you.",
    },
    {
      question: "Do I have to participate in Table Topics right away?",
      answer:
        "We don't pressure members, but isn't that why you would join Toastmasters - to speak? Not to worry - we are very understanding. If you cannot think of a response, make up a story! You have a minimum of 1 minute to speak. If you already have a supporting role, you won't be asked to participate in table topics at the same time.",
    },
    {
      question: "How do you decide who has what roles for each meeting?",
      answer:
        "A sign-up sheet is circulated at the meetings, and members sign up for the roles and dates they want during the next month. The VP of Education then fills in any open spots with the names of other members who want to advance. You can also sign up for a role in Easy Speak.",
    },
    {
      question: "Are there other Toastmaster clubs in Austin?",
      answer:
        "Yes. There are more than 60+ clubs around town, and we encourage you to visit a few. But make ours one of them - you'll quickly understand our little motto. Each member and each club have a chemistry, and you'll know when you have found a comfortable fit. Our atmosphere appeals to a broad mix of busy professionals, students, and even several pro speakers. There is an opportunity for everyone!",
    },
    {
      question: "I am not a native English speaker.",
      answer:
        "We have several members for whom English is not their native language. Delivering prepared speeches in front of others is a good way to hone one's skills. As for the rest of us, behaving respectfully towards others is a part of good listening.",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Austin Toastmasters - Improve Your Public Speaking Skills</title>
        <meta
          name="description"
          content="Join Austin Toastmasters to enhance your public speaking and leadership skills. Weekly meetings in East Austin. Drop-ins welcome!"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Austin Toastmasters - Improve Public Speaking Skills"
        />
        <meta
          property="og:description"
          content="Join Austin Toastmasters to enhance your public speaking and leadership skills. Weekly meetings in East Austin. Drop-ins welcome!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austintoastmasters.com" />
        <meta
          property="og:image"
          content="https://austintoastmasters.com/tm2.png"
        />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-8 sm:py-8 w-full max-w-5xl mx-auto bg-black text-gray-200 min-w-[320px]">
        <header className="w-full max-w-5xl mx-auto bg-black min-w-[320px] mb-3">
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
                    href="#about"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Blog
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
        <section className="w-full mb-4 sm:mb-3">
          <div className="border-gray-400 border p-4 sm:p-6 md:p-4 shadow-md">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-6 mb-6 sm:mb-10 text-gray-200">
              Welcome to Austin Toastmasters 🙌
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-4 sm:mt-5 text-green-500">
                (Drop ins welcome)
              </p>
            </h1>
          </div>
        </section>

        <section id="meeting-info" className="w-full mb-3">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              MEETING INFO
            </h2>
            <p className="text-lg mb-4">
              <strong className="text-gray-100">Next Meeting:</strong> Every
              Thursday morning 7:00-8:15 CDT
            </p>

            <p className="text-lg mb-4">
              <strong className="text-gray-100">Location:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/wTFRw9W28z31cqGX7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                IHOP restaurant, 707 E Cesar Chavez St, Austin, TX 78701
              </a>
            </p>

            <p className="text-lg ">
              <strong className="text-gray-100">Club:</strong>{" "}
              <a
                href="https://www.toastmasters.org/find-a-club?q=West+Austin+II"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                West Austin II
              </a>
            </p>
            <p className="text-lg mt-4 text-gray-300">
              <em>
                What&apos;s that you say? That IHOP isn&apos;t in West Austin?
                You&apos;re right! Our former location in West Austin closed
                after 30 years of meeting there. Now, the &quot;West&quot; in
                &quot;West Austin II,&quot; refers to &quot;west of I-35&quot;.
                Our club was chartered in 1986, and we honor the name.
              </em>
            </p>
          </div>
        </section>

        {/* Group Story section */}
        <section id="about" className="w-full mb-3">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              Our Story
            </h2>

            <p className="text-base sm:text-lg mb-4">
              Welcome to West Austin II Toastmasters Club - &quot;Second to
              None&quot;! Chartered in 1986, our club has a rich history of
              helping members develop their public speaking and leadership
              skills.
            </p>

            <p className="text-base sm:text-lg mb-4">
              We come together to improve our public speaking, presentation, and
              leadership skills by, as our founder Ralph Smedley said,
              &quot;learning through moments of enjoyment.&quot;
            </p>

            <p className="text-base sm:text-lg mb-4">
              Our club features experienced members like Chad Goldwasser, a
              Realtor and Professional Speaker who enjoys sharing life stories.
              We welcome guests and new members to join our supportive
              community!
            </p>

            <p className="text-base sm:text-lg mb-4">
              Come wake up with West Austin II every Thursday morning!
            </p>

            {/* Added Map */}
            <div className="w-full overflow-hidden rounded-lg mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55107.37999387374!2d-97.76009523561324!3d30.316508486218854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5ff37e8ccc5%3A0x78059cc9e2e8a224!2sAustin%20Toastmasters!5e0!3m2!1sen!2sus!4v1735402606702!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Austin Toastmasters Location"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* New What is Toastmasters section */}
        <section className="w-full mb-3">
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
        <section className="w-full mb-3">
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

        <section className="w-full">
          <div className="border-gray-400 border p-4 sm:p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
              MORE FAQS
            </h2>
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        <footer className="w-full mt-3">
          <div className="border-gray-400 border p-6 shadow-md">
            <div className="flex flex-col items-center space-y-6">
              {/* Contact Info */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-200 mb-2">
                  Get in Touch
                </h3>
                <a
                  href="mailto:dennisshall@gmail.com"
                  className="text-gray-400 hover:text-white block"
                >
                  dennisshall@gmail.com
                </a>
                <a
                  href="tel:512-905-5600"
                  className="text-gray-400 hover:text-white"
                >
                  (512) 905-5600 (Call or Text)
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-200 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-400">
                  Every Thursday morning 7:00-8:15 CDT
                </p>
                <a
                  href="https://maps.app.goo.gl/wTFRw9W28z31cqGX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  IHOP restaurant, 707 E Cesar Chavez St, Austin, TX 78701
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-4 border-t border-gray-800 w-full justify-center">
                <a
                  href="https://www.instagram.com/austin_toastmasters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61570084196984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://x.com/atxtoastmasters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
              </div>

              {/* Copyright */}
              {/* <div className="text-sm text-gray-500">
                <p>
                  Built by{" "}
                  <a
                    href="https://joshmmay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Josh May
                  </a>
                  {" • "}
                  <span>© {new Date().getFullYear()} Austin Toastmasters</span>
                </p>
              </div> */}
            </div>
          </div>
        </footer>
      </main>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-0 min-w-[320px]"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-black border-gray-400 border p-4 sm:p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-white">
              Contact Us
            </h2>
            <p className="mb-4 sm:mb-8 text-gray-300 text-base sm:text-lg md:text-xl">
              Email:{" "}
              <a
                href="mailto:hey@joshmmay.com"
                className="text-blue-400 hover:underline break-all"
              >
                hey@joshmmay.com
              </a>
            </p>
            <p className="mb-4 sm:mb-8 text-gray-300 text-base sm:text-lg md:text-xl">
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
