import {toolazyReactThemeStore} from './toolazyReactThemeStore';

class toolazyReactThemeClass {
  /**
   *
   * @param {object} configs - Init values for toolazyReactThemeStore, that's the heart of this library.
   */
  init(configs = {}) {
    if (!configs.themesResource) {
      throw Error('themesResource property is missing.');
    }
    if (!configs.currentTheme) {
      throw Error('currentTheme property is missing.');
    }
    toolazyReactThemeStore.currentTheme = configs.currentTheme;
    toolazyReactThemeStore.themesResource = configs.themesResource;
  }

  /**
   *
   * @param {string} theme - Set current theme value and make all components are using withToolazyReactTheme() HOC update state
   */
  changeTheme(theme) {
    toolazyReactThemeStore.currentTheme = theme;
    toolazyReactThemeStore.observes.forEach((observe) =>
      observe(toolazyReactThemeStore.themesResource[theme]),
    );
  }

  getThemesResource() {
    return getThemesResource();
  }

  getCurrentTheme() {
    return getCurrentTheme();
  }

  getTheme() {
    return getTheme();
  }
}
export const toolazyReactTheme = new toolazyReactThemeClass();

/**
 *
 * @param {*} WrappedComponent - A react component.
 * @returns {string} - Component's name
 */
export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/**
 * @returns {object} - An object contains all themes that you're registered.
 */
export function getThemesResource() {
  return toolazyReactThemeStore.themesResource;
}

/**
 * @returns {string} - The key of the current theme you're using.
 */
export function getCurrentTheme() {
  return toolazyReactThemeStore.currentTheme;
}

/**
 * @returns {object} - Is an theme object that you're using.
 */
export function getTheme() {
  return toolazyReactThemeStore.themesResource[
    toolazyReactThemeStore.currentTheme
  ];
}

export function setObserves(observe) {
  toolazyReactThemeStore.observes.push(observe);
}
