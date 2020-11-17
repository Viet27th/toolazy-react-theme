/**
 * References:
 * - https://reactjs.org/docs/hooks-reference.html#useref
 * useRef returns a mutable ref object whose.
 * The returned object will persist for the full lifetime of the component means when we
 * call useRef(initialValue) to assign the value for old variable again will not work out.
 *
 * - https://reactjs.org/docs/hooks-state.html
 * - https://reactjs.org/docs/hooks-effect.html
 */

import {useState, useEffect, useRef} from 'react';
import {getTheme, setObserves} from './utils';

export function useToolazyReactTheme() {
  const isMounted = useRef(false); // To certain that component is mounted before call setTheme() method and make component update.
  const isFirstRun = useRef(true); // To certain that we call setObserves() one time only.
  const [theme, setTheme] = useState(getTheme());

  function boundReset(newThemeObject) {
    if (isMounted.current) {
      setTheme(newThemeObject);
    }
  }

  useEffect(() => {
    isMounted.current = true;
    if (isFirstRun.current) {
      isFirstRun.current = false;
      setObserves(boundReset);
    }

    // Unbinding on unmount
    return () => {
      isMounted.current = false;
    };
  }, [theme]);

  return theme;
}
