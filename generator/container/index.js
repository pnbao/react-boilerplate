/**
 * Container Generator
 */

const componentExists = require('../utils/containerExists');

module.exports = {
  description: 'Add a container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Container Name?',
      default: 'Form',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/saga.js',
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../app/containers/{{properCase name}}/{{properCase name}}.style.js',
        templateFile: './container/style.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'prettify',
        path: '/containers/',
      },
    ];

    return actions;
  },
};
