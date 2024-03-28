import { motion } from "framer-motion";

const AnimationScale = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationScale;
