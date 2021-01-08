/**
 * References:
 * - https://reactjs.org/docs/higher-order-components.html
 * - https://reactjs.org/docs/hooks-custom.html
 * - https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
 * - https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 */

import React from 'react';
import {
  getDisplayName, 
  toolazyReactTheme as coreToolazyReactTheme,
} from './utils';
import {useToolazyReactTheme} from './useToolazyReactTheme';

/* eslint-disable */
export const withToolazyReactTheme = () => (WrappedComponent) => {
  function IAmHOC({forwardedRef, ...rest}) {
    const theme = useToolazyReactTheme();

    let passDownProps = {
      ...rest,
      theme: theme,
      toolazyReactTheme: {
        changeTheme: coreToolazyReactTheme.changeTheme,
        getThemesResource: coreToolazyReactTheme.getThemesResource,
        getCurrentTheme: coreToolazyReactTheme.getCurrentTheme,
        getTheme: coreToolazyReactTheme.getTheme,
      }
    };
    if (forwardedRef) {
      passDownProps.ref = forwardedRef;
    }

    return React.createElement(WrappedComponent, passDownProps);
  }

  IAmHOC.displayName = `WithToolazyReactTheme(${getDisplayName(
    WrappedComponent,
  )})`;

  const forwardRef = (props, ref) => {
    return React.createElement(
      IAmHOC,
      Object.assign({}, props, {forwardedRef: ref}),
    );
  };

  return React.forwardRef(forwardRef);
};
