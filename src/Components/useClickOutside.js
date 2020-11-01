import { useEffect } from 'react';

export function useOnClickOutside(refs,handleClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (refs.every(ref => ref.current && !ref.current.contains(event.target))) {
        handleClick(event);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}