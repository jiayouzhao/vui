module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"no-unused-expressions": [ "error", { "allowTernary": true, "allowShortCircuit": true } ],
		"no-multiple-empty-lines": [ "error", { "max": 1, "maxEOF": 1 } ],
		"comma-spacing": [ "error", { "before": false, "after": true } ],
		"array-bracket-spacing": [ "error", "always" ],
		"no-obj-calls": "error",
		"semi-spacing": "error",
		"space-before-blocks": "error",
		"object-curly-spacing":[ "error", "always" ],
		"keyword-spacing":"error",
		"arrow-spacing": "error",
		"space-infix-ops":"error",
		"space-in-parens": [ "error", "never" ],
		"no-multi-spaces":[ "error", { ignoreEOLComments: false } ],
		"block-spacing":[ "error", "never" ],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double",
			{ "allowTemplateLiterals": true }
		],
		"semi": [
			"error",
			"always"
		]
	}
};
