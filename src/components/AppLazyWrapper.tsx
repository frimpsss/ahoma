import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
const AppLazyWrapper = () => {
  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <img src={logo} alt="logo" className="h-12" />
      </motion.div>
    </div>
  );
};

export default AppLazyWrapper;
