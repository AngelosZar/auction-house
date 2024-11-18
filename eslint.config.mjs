import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";

export default [
  {
    files: ["**/*.{js,mjs}"],
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
    plugins: {
      prettier: prettierPlugin.plugins.prettier,
    },
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
];
