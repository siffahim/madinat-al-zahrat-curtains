"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const smallMenuLinkVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

const smallMenuVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};
const Navbar = () => {
  const path = usePathname();
  const [hideMobileMenu, setHideMobileMenu] = React.useState(true);
  const [squeezeOnScroll, setSqueezeOnScroll] = React.useState(false);
  const leftLinks = [
    { path: "/", title: "Home" },

    { path: "/curtains", title: "Curtains" },
    { path: "/carpets", title: "Carpets" },
    { path: "/wallpaper", title: "Wallpaper" },
    { path: "/tv-cabinet", title: "TV Cabinets" },
    { path: "/rollar-blinds", title: "Rollar Blinds" },
    { path: "/about-us", title: "About Us" },
    { path: "/contact", title: "Contact" },
  ];

  // Squeeze navbar on scroll
  const handleSqueezeOnScroll = () => {
    if (Math.round(window?.pageYOffset) >= 150) {
      setSqueezeOnScroll(true);
      return;
    }

    setSqueezeOnScroll(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleSqueezeOnScroll);

    return () => window.addEventListener("scroll", handleSqueezeOnScroll); // Clean up
  }, []);

  return (
    <div
      className={`${
        path !== "/" && "lg:bg-black sticky top-0 z-50 lg:h-[80px]"
      }`}
    >
      <div className="container  hidden md:flex items-center justify-between py-6">
        <div className="flex justify-center">
          <a href="/">
            <img alt="Logo" width="80%" src="/logo-white.png" />
          </a>
        </div>

        <div className="flex items-center gap-8">
          {leftLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`tracking-wider text-white text-xl whitespace-nowrap ${
                path === link.path ? "border-b-2 border-primary" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Logo (Centered) */}
      </div>
      <div
        className={cn(
          "transition-all top-0 duration-300 ease-in-out lg:hidden"
        )}
      >
        {/* Menu Header */}
        <div className="relative flex items-center justify-between px-4 bg-black border h-[50px]">
          {/* menu icon */}
          <button
            className="w-1/3"
            onClick={() => setHideMobileMenu(!hideMobileMenu)}
          >
            {hideMobileMenu ? (
              <Menu color="#fff" size={24} />
            ) : (
              <X color="#fff" size={24} />
            )}
          </button>

          {/* center */}
          <Link href="/" className="w-1/3">
            <img alt="Logo" width="80%" src="/logo-white.png" />
          </Link>
        </div>

        {/* Mobile Menu Links */}
        <div className="absolute md:hidden top-[] left-0 z-[9999] w-full">
          <AnimatePresence>
            {!hideMobileMenu && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
              >
                <motion.ul
                  className="flex !top-0 bg-black list-none flex-col items-start gap-y-6 border-b border-b-gray-300  px-4 py-7"
                  variants={smallMenuVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {leftLinks.map(
                    (link: { title: string; path: string }, index: number) => (
                      <motion.li key={index} variants={smallMenuLinkVariants}>
                        <Link
                          href={link?.path}
                          onClick={() => setHideMobileMenu(!hideMobileMenu)}
                          className={`tracking-wider text-white text-xl whitespace-nowrap ${
                            path === link.path
                              ? "border-b-2 border-primary"
                              : ""
                          }`}
                        >
                          {link.title}
                        </Link>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*



<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
 */
