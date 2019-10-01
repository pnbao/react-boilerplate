/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const pageGenerator = require('./page/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../app/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));

  plop.setActionType('prettify', (answers, config) => {
    const configPath = config.path === '/pages/'
      ? path.join(
        config.path,
        plop
          .getHelper('dashCase')(answers.name)
          .concat('.js'),
      )
      : path.join(
        '/app/',
        config.path,
        plop.getHelper('properCase')(answers.name),
        '**',
        '**.js',
      );
    const folderPath = `${path.join(__dirname, '..', configPath)}`;

    try {
      execSync(`npm run prettify -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
};
