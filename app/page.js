import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Head>
        <title>Austin Toastmasters - The Junto</title>
        <meta
          name="description"
          content="A place where normies practice public speaking."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="w-full bg-[#171717] border-b-2 border-zinc-700 p-4 flex justify-between items-center">
        <div className="flex items-center ml-1">
          <Image
            src="/tm2.png"
            alt="Austin Toastmasters Logo"
            width={60}
            height={60}
          />
          <span className="text-white ml-3 font-semibold">
            Austin Toastmasters
          </span>
        </div>
        <ul className="flex justify-center space-x-8 mr-10">
          <li>
            <a href="#" className="text-white no-underline hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white no-underline hover:underline">
              FAQs
            </a>
          </li>

          <li>
            <a href="#" className="text-white no-underline hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="flex flex-1 flex-col  items-center justify-center rounded-md ">
        <div className="mb-7">
          <h1 className=" mb-1  mt-[45px] text-center text-4xl font-bold ">
            Welcome to Austin Toastmasters!
          </h1>
          <p className="text-lg text-[#FFF8EE] ">
            Guests are welcome to drop in and attend meetings without notice.
          </p>
        </div>
        <p className="text-left w-full font-bold mb-1">MEETING INFO</p>
        <div className=" w-full border p-3">
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Club Name:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Junto_(club)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              The Junto
            </a>
          </p>
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Location:{" "}
            <a
              href="https://www.google.com/maps/place/Createscape+Coworking/@30.2601314,-97.7041995,15z/data=!4m2!3m1!1s0x0:0xd27a2b1184f9b146?sa=X&ved=2ahUKEwiVzcjx0v6DAxXHlGoFHaLiDy8Q_BJ6BAhrEAA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Createscape Coworking
            </a>
          </p>
          <p className="text-lg leading-7 text-[#FFF8EE] ">
            Time: Thursday @ 5:15pm
          </p>
        </div>
      </main>
    </div>
  );
}
