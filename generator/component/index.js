/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component Name?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../app/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/components/{{properCase name}}/{{properCase name}}.style.js',
        templateFile: './component/style.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: '/components/',
      },
    ];
    return actions;
  },
};
