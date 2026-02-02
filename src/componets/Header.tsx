import { useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  cubicBezier,
} from "motion/react";
import CustomButton from "./ui/CustomButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu slide animation
  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 1, 0.5, 1),
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.5, 0, 0.75, 0),
      },
    },
  };

  // Overlay fade animation
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.4 } },
  };

  // Links container for staggered animation
  const linksContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.45 },
    },
  };

  // Individual link animation
  const linkVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "linear" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  const links = [
    { title: "Home", target: "#home" },
    { title: "features", target: "#features" },
    { title: "Reviews", target: "#reviews" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 mx-auto flex max-w-[1400px] items-center justify-between px-12 py-8">
      {/* Logo */}
      <span className="text-dark text-4xl font-black tracking-tight uppercase">
        Vertx
      </span>

      {/* Hamburger Button */}
      <div className="text-light">
        <motion.div
          initial={{ borderRadius: 16 }}
          whileHover={{
            borderRadius: 100,
            transition: { duration: 1, ease: "linear" },
          }}
          transition={{ duration: 0.5 }}
          className="bg-darkgray text-light cursor-pointer p-4"
          onClick={() => setIsOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15h14M5 9h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Animated Overlay + Side Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-text border-darkgray fixed inset-0 z-50"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            >
              {/* Side Menu */}
              <motion.div
                className="bg-dark ml-auto flex h-full w-[30vw] min-w-[20rem] flex-col justify-between rounded-tl-3xl rounded-bl-3xl p-12"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Links with stagger */}
                <motion.nav
                  className="mt-5 flex flex-col gap-6"
                  variants={linksContainer}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {links.map((link, i) => (
                    <motion.a
                      key={link.title}
                      className="text-light text-[2.8rem] font-medium uppercase transition hover:opacity-70"
                      variants={linkVariant}
                      // onClick={() => setIsOpen(false)}
                    >
                      <span className="text-border-light pr-2 text-sm">
                        0{i}
                      </span>
                      {link.title}
                    </motion.a>
                  ))}
                </motion.nav>

                <CustomButton data="Explore" type="dark" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
