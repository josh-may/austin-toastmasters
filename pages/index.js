import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Immediate JavaScript redirect
    window.location.href = "https://www.austintoastmasters.org/";
  }, []);

  return (
    <div>
      <Head>
        <title>Redirecting to Austin Toastmasters...</title>
        <meta
          httpEquiv="refresh"
          content="0; url=https://www.austintoastmasters.org/"
        />
        <link rel="canonical" href="https://www.austintoastmasters.org/" />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Redirecting...</h1>
          <p>You are being redirected to our new site.</p>
          <p>
            If you are not redirected automatically,
            <a
              href="https://www.austintoastmasters.org/"
              style={{ color: "#4A90E2", textDecoration: "underline" }}
            >
              click here
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
