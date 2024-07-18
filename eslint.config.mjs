import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: [
      "@typescript-eslint",
      "prettier"
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'prefer-const': 'error',  // Enforce using const
      'no-var': 'error',         // Disallow var
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-undef": 'error', //error no undefine
       "prettier/prettier": "error"
    },
    ignores: [
      "node_modules",
      "dist"
    ],
  },
];
