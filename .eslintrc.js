module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4], //Отступ количество пробелов
        semi: [2, "always"], //Точка с запятой в конце строки
        "space-before-function-paren": ["error", "never"], // Ошибка при наличии пробела при обозночении функции, уберём её
        quotes: ["error", "double", { allowTemplateLiterals: true }], // Использование двойных кавычек
        code: [120]
    }
};
