import { motion } from "framer-motion";

const AnimationScaleY = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationScaleY;
