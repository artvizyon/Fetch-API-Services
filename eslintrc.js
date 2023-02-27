// .eslintrc.js
function isTruthy(value) {
    if (!value) return false;
    return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
  }
  
// Warnings are errors in CI
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
    // ...
    "rules": {
        "comma-dangle": OFF,
        "eqeqeq": [WARNING, "allow-null"],
        "import/imports-first": OFF,
        "indent": [WARNING, 2, { "SwitchCase": 1 }],
        "max-len": [WARNING, 100, 2],
        "no-console": [WARNING, { "allow": ["warn", "error"] }],
        "no-debugger": WARNING,
        "no-fallthrough": WARNING,
        "no-unreachable": WARNING,
        "no-unused-vars": [WARNING, { "vars": "all", "args": "none" }],
        "no-var": ERROR,
        "prefer-const": WARNING,
        "react/prop-types": [WARNING, { "ignore": ["className"] }],
        "semi": [WARNING, "never"],
    }
};