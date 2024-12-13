import { getAllPosts } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import { Menu, X } from "lucide-react";

export default function BlogIndex({ posts }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>Blog | Austin Toastmasters</title>
        <meta
          name="description"
          content="Read our latest articles about public speaking, leadership, and communication skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full max-w-5xl mx-auto bg-black min-w-[320px] mb-2 px-4 mt-5">
        <div className="border-gray-400 border p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-semibold">
              Austin Toastmasters
            </Link>
          </div>

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
        <nav className="md:hidden bg-black text-white w-full max-w-5xl mx-auto min-w-[320px] px-4">
          <div className="border-gray-400 border p-4">
            <ul className="space-y-4"></ul>
          </div>
        </nav>
      )}

      <main className="flex flex-col items-center justify-center px-4 py-2 w-full max-w-5xl mx-auto text-gray-200 min-w-[320px]">
        <section className="w-full mb-4 sm:mb-4">
          <div className="border-gray-400 border p-4 sm:p-6 md:p-4 shadow-md">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mt-6 mb-6 text-gray-200">
              Blog Posts
            </h1>
            <p className="text-xl text-center text-gray-300 mb-8">
              Explore our latest articles about public speaking, leadership, and
              communication skills.
            </p>
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-gray-400 rounded-none overflow-hidden transition duration-300 hover:border-gray-300"
            >
              {post.coverImage && (
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={`Cover for ${post.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 bg-black">
                <h2 className="text-xl font-bold mb-2 text-gray-200">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-2 text-sm">{post.date}</p>
                <p className="text-gray-300 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "date", "coverImage", "excerpt"]);

  return {
    props: { posts },
  };
}
