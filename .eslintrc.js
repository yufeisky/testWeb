const path = require('path')

module.exports = {
  root: true,
  extends: 'airbnb',
  env: {
    browser: true
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'linebreak-style': 'off'
  }
}