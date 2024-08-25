import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Head>
        <title>Austin Toastmasters - West Austin I Toastmasters Club</title>
        <meta
          name="description"
          content="A place where normies practice public speaking."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-1 flex-col  items-center justify-center rounded-md max-w-3xl">
        <div className="mb-7">
          <h1 className=" mb-1  mt-[45px] text-center text-4xl font-bold ">
            Welcome to Austin Toastmasters!
          </h1>{" "}
          <p className="text-lg text-[#FFF8EE] ">
            Guests are welcome to drop in and attend meetings without notice.
          </p>
        </div>
        <p className="text-left w-full font-bold mb-1">MEETING INFO</p>
        <div className=" w-full border p-3">
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Club Name:{" "}
            <a
              href="https://www.toastmasters.org/Find-a-Club/00005531-west-austin-i-toastmasters-club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              West Austin I Toastmasters Club
            </a>
          </p>
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Location:{" "}
            <a
              href="https://us02web.zoom.us/j/590258400?pwd=V0g3TWNXcDhXUmZRT3RkcDNnMzdZQT09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Zoom
            </a>
          </p>
          <p className="text-lg leading-7 text-[#FFF8EE] ">
            Time: Friday 7:30 am - 8:30 am
          </p>
        </div>

        <p className="text-left w-full font-bold mb-1 mt-10">
          WHAT IS TOASTMASTERS?
        </p>
        <div className=" w-full border p-3">
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Toastmasters International is a nonprofit educational organization
            that builds confidence and teaches public speaking skills through a
            worldwide network of clubs that meet online and in person. <br />
            <br /> In a supportive community or corporate environment, members
            prepare and deliver speeches, respond to impromptu questions, and
            give and receive constructive feedback. <br />
            <br /> It is through this regular practice that members are
            empowered to meet personal and professional communication goals.
            <br />
            <br /> Founded in 1924, the organization is headquartered in
            Englewood, Colorado with approximately 270,000 members in more than
            14,200 clubs in 148 countries.
          </p>
        </div>
      </main>
    </div>
  );
}
