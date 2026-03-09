import { useState, useEffect, useRef } from 'react';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789abcdefghijklmnopqrstuvwxyz';

const scramble = (text) =>
  text.replace(/\S/g, () => CHARS[Math.floor(Math.random() * CHARS.length)]);

const useScramble = (text, { duration = 800, delay = 0 } = {}) => {
  const [display, setDisplay] = useState(() => scramble(text));
  const frameRef = useRef();

  useEffect(() => {
    let start = null;
    let timeout = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Characters resolve left-to-right as progress increases
      const resolved = Math.floor(progress * text.length);
      let result = '';

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' ';
        } else if (i < resolved) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    timeout = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, duration, delay]);

  return display;
};

export default useScramble;
