import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const renderWords = () => {
    return (
      <div>
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block" style={{color:'rgb(223, 255, 253)'}}>
            {word.text.split('').map((char, index) => (
              <span style={{color:'03C03C'}}
                key={`char-${index}`}
                className={cn('dark:text-white text-03C03C', word.className)}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
        animate={{
          width: 'fit-content',
        }}
        transition={{
          duration: 4,
          ease: 'linear',
          delay: 1,
          repeat: Infinity, // Repeat infinitely
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity, // Repeat infinitely
        }}
        className={cn(
          'block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
