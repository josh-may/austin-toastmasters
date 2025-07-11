/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://www.austintoastmasters.org/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
