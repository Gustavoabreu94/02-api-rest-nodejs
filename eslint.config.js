import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended, // Configurações recomendadas para JS
  {
    files: ["**/*.ts", "**/*.tsx"], // Aplica as regras aos arquivos TypeScript
    languageOptions: {
      parser: typescriptParser, // Define o parser para TypeScript
      parserOptions: {
        ecmaVersion: "latest", // Suporta as últimas versões do JavaScript
        sourceType: "module", // Suporta import/export
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin, // Adiciona o plugin TypeScript
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules, // Usa as regras recomendadas do TypeScript
    },
  },
];
