module.exports = {
    root: true,

    env: {
        node: true
    },
    parserOptions: {
        parser: "@babel/eslint-parser"
    },

    rules: {
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

        "no-undef": "warn",
        "brace-style": ["warn", "1tbs", {
            allowSingleLine: true
        }],
        "space-before-blocks": ["warn", {
            functions: "always",
            keywords: "always",
            classes: "never"
        }
        ],
        "space-infix-ops": ["warn", {
            int32Hint: false
        }],
        "comma-spacing": ["warn", {
            before: false, after: true
        }],

        // Evita quebras de linha antes da tag de abertura de um elemento
        "vue/html-closing-bracket-newline": ["warn", {
            singleline: "never",
            multiline: "always"
        }],

        // Requer espaços entre os atributos em elementos com múltiplas linhas
        "vue/singleline-html-element-content-newline": ["warn", {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true
        }],

        // Requer espaços antes e depois de chaves em objetos
        "object-curly-spacing": ["warn", "always"],

        // Requer espaços antes de parênteses em funções e declarações de controle
        "space-before-function-paren": ["warn", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
        }],

        // Requer que os nomes de variáveis usem camelCase
        camelcase: ["warn", {
            properties: "always",
            ignoreDestructuring: true
        }],

        // Evita a reatribuição de parâmetros de função
        "no-param-reassign": ["off", {
            props: true,
            ignorePropertyModificationsFor: ["state"]
        }],

        // Evita o uso de console.log e outros métodos de console em produção
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",

        // Requer o uso de === e !== em vez de == e !=
        eqeqeq: "warn",

        // Requer que componentes Vue tenham um nome camelCase
        "vue/component-name-in-template-casing": ["warn", "PascalCase"],

        // Evita a declaração de variáveis não utilizadas
        "no-unused-vars": "warn",

        // Requer que diretivas v-for tenham um valor de key
        "vue/require-v-for-key": "warn",

        // Requer que os métodos de ciclo de vida do Vue sejam definidos na ordem correta
        "vue/order-in-components": "warn",

        // Define a indentação do HTML para 2 espaços
        "vue/html-indent": ["warn", 4]

    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/standard"
    ]

}
