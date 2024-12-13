import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function useMobileBreakpoint() {
  return useBreakpointValue(
    {
      base: true,
      lg: false,
    },
    {
      ssr: true,
      fallback: 'lg',
    }
  );
}

export function useScrollTop() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = window.scrollY;
      const newIsTop = offsetTop <= 0;
      if (newIsTop !== isTop) setIsTop(newIsTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTop]);

  return isTop;
}
