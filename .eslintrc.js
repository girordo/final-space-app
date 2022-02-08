module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "simple-import-sort",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/anchor-has-content": "off",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error",
  },
};
