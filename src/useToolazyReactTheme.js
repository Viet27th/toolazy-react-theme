import {useState, useEffect, useRef} from 'react';
import {getTheme, setObserves} from './utils';

export function useToolazyReactTheme() {
  const isMounted = useRef(false);
  const [theme, setTheme] = useState(getTheme());

  function boundReset(newThemeObject) {
    if (isMounted.current) {
      setTheme(newThemeObject);
    }
  }

  useEffect(() => {
    isMounted.current = true;
    setObserves(boundReset);

    // Unbinding on unmount
    return () => {
      isMounted.current = false;
    };
  }, [theme]);

  return theme;
}
