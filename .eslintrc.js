module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-hooks', 'import'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    semi: [2, 'never'],
    'no-extra-boolean-cast': 'off',
  },
}

//   yarn add eslint prettier eslint-plugin-react eslint-plugin-react-hooks
//   eslint-plugin-import eslint-plugin-jsx-a11y eslint-import-resolver-babel-plugin-
//   root-import
