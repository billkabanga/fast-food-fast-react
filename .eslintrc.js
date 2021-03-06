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
			"arrowFunctions": true,
			"binaryLiterals": true,
			"blockBindings": true,
			"classes": true,
			"defaultParams": true,
			"destructuring": true,
			"forOf": true,
			"generators": true,
			"modules": true,
			"objectLiteralComputedProperties": true,
			"objectLiteralDuplicateProperties": true,
			"objectLiteralShorthandMethods": true,
			"objectLiteralShorthandProperties": true,
			"octalLiterals": true,
			"regexUFlag": true,
			"regexYFlag": true,
			"spread": true,
			"superInFunctions": true,
			"templateStrings": true,
			"unicodeCodePointEscapes": true,
			"globalReturn": true,
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},
	extends: ['airbnb-base', 'plugin:jest/recommended', 'jest-enzyme', 'plugin:react/recommended'],
	rules: {
		"import/no-unresolved": "off"
	}
};
