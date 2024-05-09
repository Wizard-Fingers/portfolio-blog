"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface TransitionProviderProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  out: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const pathName = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [pathName]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathName}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className={isAnimating ? "hide-scrollbar" : ""}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <motion.div
          initial={{ filter: "blur(300px)" }}
          animate={{ filter: "blur(0px)" }}
          exit={{ filter: "blur(50px)" }}
          transition={{ duration: 0.1 }}
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
