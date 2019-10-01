/**
 * containerExists
 *
 * Check the given container exist in the containers directory
 */

const fs = require('fs');
const path = require('path');

const containers = fs.readdirSync(path.join(__dirname, '../../app/containers/'));

function containerExists(cont) {
  return containers.indexOf(cont) >= 0;
}

module.exports = containerExists;
