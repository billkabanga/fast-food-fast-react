module.exports = {
  env: {
		es6: true,
		browser: true,
		node: true,
  },
  parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
  extends: ['airbnb-base', 'plugin:jest/recommended', 'jest-enzyme'],
};
