module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {},
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 8,
    "allowImportExportEverywhere": true,
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
  },
  "ignorePatterns": ["dist"], // uncheck "dist" folder
  "settings": {
    "react": {
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future

    },
  }
};
