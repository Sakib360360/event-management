import {
    FaArrowAltCircleRight,
    FaFacebook,
    FaGithub,
    FaGreaterThan,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <>
     <div className="mt-12"> 
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
          <Link className="flex gap-1 items-center" href="/about-us"><FaGreaterThan/> About us</Link>
          <Link className="flex gap-1 items-center" href="/advisors"><FaGreaterThan/> Advisors</Link>
          <Link className="flex gap-1 items-center" href="/reviews"><FaGreaterThan/> Reviews</Link>
          <Link className="flex gap-1 items-center" href="/partners"><FaGreaterThan/> Partners</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link className="flex gap-1 items-center" href="/terms-of-use"><FaGreaterThan/>Terms of use</Link>
          <Link className="flex gap-1 items-center" href="/privacy-policy"><FaGreaterThan/>Privacy policy</Link>
          <Link className="flex gap-1 items-center" href="/cookie-policy"><FaGreaterThan/>Cookie policy</Link>
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
      <div className="mx-auto text-center justify-center bg-base-200">
    
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  
      </div>
      </div>
      </>
    );
  };
  
  export default Footer;
  