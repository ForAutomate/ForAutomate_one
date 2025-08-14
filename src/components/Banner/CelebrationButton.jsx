import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { LuPartyPopper } from "react-icons/lu";

const CelebrationButton = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  // Auto-trigger confetti on page load/reload
  useEffect(() => {
    setIsCelebrating(true);
    setTimeout(() => setIsCelebrating(false), 5000); // Confetti for 3 seconds on load
  }, []);

  const burstCountRef = useRef(0);
  const maxBursts = 2;
  const burstDuration = 4500; // Corresponds to tweenDuration
  const delayBetweenBursts = 10; // Small delay between bursts

  const handleCelebration = () => {
    burstCountRef.current = 0; // Reset count on each button click

    const triggerBurst = () => {
      if (burstCountRef.current < maxBursts) {
        setIsCelebrating(true);
        setTimeout(() => {
          setIsCelebrating(false);
          burstCountRef.current++;
          setTimeout(triggerBurst, delayBetweenBursts); // Trigger next burst after a short delay
        }, burstDuration);
      }
    };

    triggerBurst(); // Start the first burst
  };

  return (
    <>
      <motion.button
        onClick={handleCelebration}
        className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-110"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
      >
        <LuPartyPopper />
      </motion.button>
      {isCelebrating && <Confetti numberOfPieces={500} recycle={false} tweenDuration={1000} />}
    </>
  );
};

export default CelebrationButton;
