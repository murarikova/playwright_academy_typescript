import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict, // ? Striktni pravidla, doporucujeme pouzivat obzvlast pro novacky v typescriptu
  prettierConfig // ? Pridava pravidla pro prettier aby nedochazelo ke konfliktum mezi pravidly eslint a formatovanim prettier
);
