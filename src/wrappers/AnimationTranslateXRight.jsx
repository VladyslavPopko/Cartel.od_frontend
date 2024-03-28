import { motion } from "framer-motion";

const AnimationTranslateXRight = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          translateX: 100,
        }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationTranslateXRight;
