const WINDOWS = "windows";
const MODULE = "module";

const ERROR = 2;
const WARNING = 1;

module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: MODULE,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb",
    "prettier",
  ],
  rules: {
    "linebreak-style": [ERROR, WINDOWS],
    "no-unused-vars": WARNING,
    quotes: [ERROR, "double", { avoidEscape: true }],
  },
  plugins: [
    "prettier"
  ]
};
