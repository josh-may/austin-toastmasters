import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const components = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mb-6 text-gray-200" {...props} />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold mt-10 mb-4 text-gray-200"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-medium mt-8 mb-3 text-gray-200" {...props} />
  ),
  p: (props) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-300" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-300"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-800 text-gray-200 rounded px-2 py-1 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
      <code className="font-mono text-sm text-gray-200" {...props} />
    </pre>
  ),
};

export default function BlogPost({ post }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.description}.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full max-w-5xl mx-auto bg-black min-w-[320px] mb-2 px-4 mt-5">
        <div className="border-gray-400 border p-4 flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-semibold">
            Austin Toastmasters
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-1 flex-grow max-w-5xl">
        <article className="border border-gray-400 overflow-hidden">
          {post.coverImage && (
            <div className="relative h-64 md:h-96">
              <Image
                src={post.coverImage}
                alt={`Cover for ${post.title}`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-8 bg-black">
            <h1 className="text-4xl font-bold mb-4 text-gray-200">
              {post.title}
            </h1>
            <p className="text-gray-400 mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.date}
            </p>
            <div className="prose max-w-none text-gray-200">
              <MDXRemote {...post.content} components={components} />
            </div>
          </div>

          {/* Author section */}
          <div className="p-8 bg-black border-t border-gray-400">
            <div className="max-w-3xl mx-auto">
              <div className="border border-gray-400 rounded-none p-5">
                <div className="flex items-center mb-4">
                  <Image
                    src="/author.jpg"
                    alt="Author's image"
                    width={64}
                    height={64}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Article by</p>
                    <a
                      href="/author/josh"
                      className="text-gray-200 font-medium hover:text-indigo-400 transition duration-300"
                    >
                      Josh May
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  Hey I&apos;m Josh, one of the guys behind Show Notes
                  Generator. I&apos;m passionate about technology, podcasting,
                  and storytelling.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.joshmmay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Personal Website"
                  >
                    <svg
                      className="w-6 h-6 text-gray-200 hover:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/josh_m_may"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6 text-gray-200 hover:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100074158632697"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6 text-gray-200 hover:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "excerpt",
    "description",
  ]);

  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
