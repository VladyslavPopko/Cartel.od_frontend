import { motion } from "framer-motion";
import { memo } from "react";

const AnimationWrapper = ({ children }) => {
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
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default memo(AnimationWrapper);
