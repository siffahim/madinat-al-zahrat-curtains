"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

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

const MobileNav = ({ leftLinks }: any) => {
  const [hideMobileMenu, setHideMobileMenu] = React.useState(false);
  const pathname = usePathname();
  return (
    <div className={cn("transition-all duration-300 ease-in-out lg:hidden")}>
      {/* Menu Header */}
      <div className="relative flex items-center justify-between px-4 ">
        {/* menu icon */}
        <button
          className="w-1/3"
          onClick={() => setHideMobileMenu(!hideMobileMenu)}
        >
          {hideMobileMenu ? (
            <Menu color="#FE6201" size={36} />
          ) : (
            <X color="#FE6201" size={36} />
          )}
        </button>

        {/* center */}
        <Link href="/" className="w-1/3">
          <img alt="Logo" width="80%" src="/logo-white.png" />
        </Link>
      </div>

      {/* Mobile Menu Links */}
      <div className="absolute left-0 top-[60px] z-[9999] h-auto w-full">
        <AnimatePresence>
          {!hideMobileMenu && (
            <motion.div
              initial={{ y: "-10%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
            >
              <motion.ul
                className="flex list-none flex-col items-start gap-y-6 border-b border-b-gray-300 bg-white px-4 py-7"
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
                        className={`tracking-wider text-white text-xl whitespace-nowrap ${
                          pathname === link.path
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
  );
};

export default MobileNav;
