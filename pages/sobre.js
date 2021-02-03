import React from "react";
import { motion } from "framer-motion";

import Bio from "../src/components/Bio";
import SEO from "../src/components/SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const childVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Sobre() {
  return (
    <>
      <SEO sharedRoute="/sobre" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Bio variants={childVariants} full />
      </motion.div>
    </>
  );
}
