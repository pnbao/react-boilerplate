/**
 * componentExists
 *
 * Check the given component exist in the components directory
 */

const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(path.join(__dirname, '../../app/components/'));

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
