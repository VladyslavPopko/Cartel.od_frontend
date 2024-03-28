import { motion } from "framer-motion";

const AnimationTranslateXUp = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 100,
        }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationTranslateXUp;
