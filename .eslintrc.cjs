module.exports = {
  extends: ['react-app', 'plugin:react/recommended', 'prettier'],
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [
      1,
      { namedComponents: 'function-declaration' },
    ],
  },
};
