module.exports = {
  'extends': 'airbnb',
  'plugins': ['react-hooks'],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'global-require': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    "react/destructuring-assignment": 'off',
    "import/prefer-default-export": 'off',
    "indent": ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    'no-underscore-dangle': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  'globals': {
    "fetch": false
  }
};