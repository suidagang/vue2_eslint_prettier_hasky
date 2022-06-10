module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true
  },
  globals: {
    // script setup
    process: 'readonly',
    __dirname: 'readonly'
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'vue'],
  rules: {
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
    "eol-last": [2, "always"],
    "indent": [2, 2],
    "linebreak-style": [1,"windows"]
  }
};
