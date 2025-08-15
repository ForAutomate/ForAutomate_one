import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A simple hook to simulate a loading state for demonstration
const useLoadingState = (initialLoading = true) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
};

const AppLoader = ({ children }) => {
  const isLoading = useLoadingState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  border: '8px solid #fff',
                  borderTopColor: '#f10075',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  loop: Infinity,
                  ease: 'linear',
                  duration: 1,
                }}
              />
              <motion.p
                className="mt-6 text-lg font-medium text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

export default AppLoader;