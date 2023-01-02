import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box1() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        animate={{
          x: animate ? 500 : 0,
          opacity: animate ? 1 : 0.5,
          scale: 1,
          rotate: animate ? 360 : 0,
        }}
        initial={{
          opacity: 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        className="box"
        onClick={() => setAnimate(!animate)}
      ></motion.div>
    </div>
  );
}
