import Image from "next/image";

const Navbar = () => (
  <nav className="w-full bg-[#171717] border-b-2 border-zinc-700 p-4 flex justify-between items-center">
    <div className="flex items-center ml-1">
      <Image
        src="/tm2.png"
        alt="Austin Toastmasters Logo"
        width={60}
        height={60}
      />
      <a href="/" className="text-white ml-3 font-semibold">
        Austin Toastmasters
      </a>
    </div>
    <ul className="flex justify-center space-x-8 mr-10">
      <li>
        <a href="/" className="text-white no-underline hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="text-white no-underline hover:underline">
          About
        </a>
      </li>
      <li>
        <a href="/faq" className="text-white no-underline hover:underline">
          FAQs
        </a>
      </li>

      <li>
        <a
          href="mailto:WestAustinitoastmasters@gmail.com"
          className="text-white no-underline hover:underline"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/groups/westaustintoastmasters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/fb.png" alt="Facebook" width={30} height={30} />
        </a>
      </li>
      <li>
        <a
          href="tel:512-789-0900"
          className="text-white no-underline hover:underline"
        >
          512-789-0900
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
