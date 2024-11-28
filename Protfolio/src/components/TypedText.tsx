import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  className = '',
}) => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        cursorChar: '|',
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className}></span>;
};

export default TypedText;