import { motion } from "framer-motion";

export default function Box3() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        staggerChildren: true,
        when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li variants={listVariant} className="boxItem"></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
