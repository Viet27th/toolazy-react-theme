import React from 'react';
import {getDisplayName} from './utils';
import {useToolazyReactTheme} from './useToolazyReactTheme';

/* eslint-disable */
export const withToolazyReactTheme = () => (WrappedComponent) => {
  function IAmHOC({forwardedRef, ...rest}) {
    const theme = useToolazyReactTheme();

    let passDownProps = {
      ...rest,
      theme: theme,
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
