import Head from "next/head";
import Header from "../components/header";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Head>
        <title>About - Austin Toastmasters</title>
        <meta
          name="description"
          content="A place where normies practice public speaking."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-1 flex-col  items-center justify-center rounded-md max-w-3xl">
        <div className="mb-7">
          <h1 className=" mb-1  mt-[45px] text-center text-4xl font-bold ">
            About
          </h1>
        </div>
        <div className=" w-full border p-3  mb-6">
          <p className="text-lg leading-7 text-[#FFF8EE]">
            West Austin 1 Toastmasters club meets Friday mornings at 7:30 am
            CST. We are a fun, lively, diverse and public club so all are
            welcome.
          </p>
        </div>
        <div className=" w-full border p-3">
          <p className="text-lg leading-7 text-[#FFF8EE] mb-3">
            DUE TO THE COVID-19 PANDEMIC WE ARE MEETING VIRTUALLY VIA ZOOM
            during our regular meeting time. We’d love to have you come check us
            out. Please email us at WestAustintoastmasters@gmail.com for access
            information.
          </p>
          <p className="text-lg leading-7 text-[#FFF8EE]">
            Note: We are in the process of looking for a new meeting location to
            get back to meeting Face-to-Face which will help us to transition in
            to a truly Hybrid Club where folks will have the option to attend
            virtually via Zoom or Face-to-Face.
          </p>
        </div>
      </main>
    </div>
  );
}
