import { motion } from "framer-motion";

const AnimationScaleX = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationScaleX;
