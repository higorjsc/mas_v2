module.exports = {
    root: true,

    env: {
        node: true
    },
    parserOptions: {
        parser: "@babel/eslint-parser"
    },

    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // enable additional rules
        indent: ["warn", 4],
        quotes: ["warn", "double"],
        semi: ["warn", "never"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["warn", "always"],

        // disable rules from base configurations
        "for-direction": "off",
        "no-inline-comments": "off",

        "no-unused-vars": "off",
        "no-undef": "off",
        "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
        "space-before-blocks": ["warn", { functions: "always", keywords: "always", classes: "never" }],
        "space-infix-ops": ["warn", { int32Hint: false }],
        "comma-spacing": ["warn", { before: false, after: true }]
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/standard"
    ]

}
