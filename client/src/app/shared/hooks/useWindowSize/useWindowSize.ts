import { useState, useEffect } from 'react';

/**
 * Хук используется для получения размеров окна браузера (ширина/высота)
 *
 * ```
   // Пример использования
   function App() {
     const size = useWindowSize();

      return (
       <div>{size.width}px / {size.height}px</div>
     );
   }
 * ```
 *
 * @returns
 * @param windowSize {Object} - width -- ширина окна (px)
 *                            - height -- высота окна (px)
 */
export function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(
    () => {
      if (!isClient) {
        return undefined;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },

    // IDEA: Empty array ensures that effect is only run on mount and unmount
    // https://ru.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return windowSize;
}
