import { useEffect, useState } from 'react';

interface UseDebounceProps {
     value: any;
     delay: number;
}

export const useDebounce = ({ value, delay }: UseDebounceProps) => {
     const [debounceValue, setDebounceValue] = useState(value);

     useEffect(() => {
          const handler = setTimeout(() => {
               setDebounceValue(value);
          }, delay);

          return () => {
               clearTimeout(handler);
          };
     }, [value, delay]);

     // Ensure that debounceValue reflects the latest value when 'value' changes
     useEffect(() => {
          setDebounceValue(value);
     }, [value]);

     return debounceValue;
};
