import {
    FaArrowAltCircleRight,
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <footer className="footer mx-auto p-10 bg-base-200">
        <nav>
          <header className="footer-title">EventGuru</header>
          <div className="flex gap-4">
            <a
              href="https://facebook.com" // Replace with your Facebook URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com" // Replace with your GitHub URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com" // Replace with your LinkedIn URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com" // Replace with your Twitter URL
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark.text-gray-400 dark.bg-gray-700 dark:hover-bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark.focus:ring-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link href="/about-us">About us</Link>
          <Link href="/advisors">Advisors</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/partners">Partners</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href="/terms-of-use">Terms of use</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/cookie-policy">Cookie policy</Link>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input rounded-lg w-full pr-16"
              />
              <button className="btn  absolute top-0 right-0 rounded-full">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
  };
  
  export default Footer;
  