module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react/recommended"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "quotes": ["error", "double"],
        "prefer-const": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    }
};