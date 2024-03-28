import { motion } from "framer-motion";

const AnimationOpacity = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, translateY:500 }}
        whileInView={{ opacity: 1, translateY:0}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationOpacity;
