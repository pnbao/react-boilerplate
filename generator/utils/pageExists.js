/**
 * pageExists
 *
 * Check the given page exist in the pages directory
 */

const fs = require('fs');
const path = require('path');

const pages = fs.readdirSync(path.join(__dirname, '../../pages/'));

function pageExists(cont) {
  return pages.indexOf(cont) >= 0;
}

module.exports = pageExists;
